import CloudGraph from '@cloudgraph/sdk'
import groupBy from 'lodash/groupBy'
import isEmpty from 'lodash/isEmpty'

import {
  IAM,
  AttachedPolicy,
  Group,
  ListAttachedGroupPoliciesResponse,
  ListGroupsResponse,
  ListUserPoliciesResponse,
} from '@aws-sdk/client-iam'

import awsLoggerText from '../../properties/logger'
import {
  initTestEndpoint,
  generateAwsErrorLog,
  setAwsRetryOptions,
} from '../../utils'
import { globalRegionName } from '../../enums/regions'

import {
  IAM_CUSTOM_DELAY,
  MAX_FAILED_AWS_REQUEST_RETRIES,
} from '../../config/constants'

const lt = { ...awsLoggerText }
const { logger } = CloudGraph
const serviceName = 'IAM Group'
const endpoint = initTestEndpoint(serviceName)
const customRetrySettings = setAwsRetryOptions({
  maxRetries: MAX_FAILED_AWS_REQUEST_RETRIES,
  baseDelay: IAM_CUSTOM_DELAY,
})

export interface RawAwsIamGroup extends Group {
  Policies: string[]
  ManagedPolicies: AttachedPolicy[]
  region: string
}

const policiesByGroupName = async (
  iam: IAM,
  { GroupName }: Group
): Promise<{ GroupName: string; Policies: string[] }> =>
  new Promise(resolveUserPolicies => {
    iam.listGroupPolicies(
      { GroupName },
      (err: any, data: ListUserPoliciesResponse) => {
        if (err) {
          generateAwsErrorLog(serviceName, 'iam:listGroupPolicies', err)
        }

        if (!isEmpty(data)) {
          const { PolicyNames = [] } = data

          resolveUserPolicies({ GroupName, Policies: PolicyNames })
        }

        resolveUserPolicies(null)
      }
    )
  })

const managedPoliciesByGroupName = async (
  iam: IAM,
  { GroupName }: Group
): Promise<{ GroupName: string; ManagedPolicies: AttachedPolicy[] }> =>
  new Promise(resolveUserPolicies => {
    iam.listAttachedGroupPolicies(
      { GroupName },
      (err: any, data: ListAttachedGroupPoliciesResponse) => {
        if (err) {
          generateAwsErrorLog(serviceName, 'iam:listAttachedGroupPolicies', err)
        }

        if (!isEmpty(data)) {
          const { AttachedPolicies = [] } = data

          resolveUserPolicies({
            GroupName,
            ManagedPolicies: AttachedPolicies,
          })
        }

        resolveUserPolicies(null)
      }
    )
  })

export const listIamGroups = async (
  iam: IAM,
  marker?: string
): Promise<RawAwsIamGroup[]> =>
  new Promise(resolve => {
    const result: RawAwsIamGroup[] = []
    const policiesByGroupNamePromises = []
    const managedPoliciesByGroupNamePromises = []

    iam.listGroups(
      { Marker: marker },
      async (err: any, data: ListGroupsResponse) => {
        if (err) {
          generateAwsErrorLog(serviceName, 'iam:listGroups', err)
        }
        if (!isEmpty(data)) {
          const { Groups: groups = [], IsTruncated, Marker } = data

          groups.map(group => {
            policiesByGroupNamePromises.push(policiesByGroupName(iam, group))
            managedPoliciesByGroupNamePromises.push(
              managedPoliciesByGroupName(iam, group)
            )
          })

          const policies = await Promise.all(policiesByGroupNamePromises)
          const managedPolicies = await Promise.all(
            managedPoliciesByGroupNamePromises
          )

          result.push(
            ...groups.map(({ GroupName, ...group }) => {
              return {
                GroupName,
                ...group,
                region: globalRegionName,
                Policies:
                  policies
                    ?.filter(p => p.GroupName === GroupName)
                    .map(p => p.Policies)
                    .reduce((current, acc) => [...acc, ...current], []) || [],
                ManagedPolicies:
                  managedPolicies
                    ?.filter(p => p.GroupName === GroupName)
                    .map(p => p.ManagedPolicies)
                    .reduce((current, acc) => [...acc, ...current], []) || [],
              }
            })
          )

          if (IsTruncated) {
            result.push(...(await listIamGroups(iam, Marker)))
          }

          resolve(result)
        }

        resolve([])
      }
    )
  })

/**
 * Iam Group
 */

export default async ({
  config,
}: {
  regions: string
  config: any
  rawData: any
}): Promise<{
  [region: string]: RawAwsIamGroup[]
}> =>
  new Promise(async resolve => {
    let groupsData: RawAwsIamGroup[] = []

    const client = new IAM({
      ...config,
      region: globalRegionName,
      endpoint,
      ...customRetrySettings,
    })

    logger.debug(lt.lookingForIamGroups)

    // Fetch IAM Groups
    groupsData = await listIamGroups(client)

    logger.debug(lt.foundGroups(groupsData.length))

    resolve(groupBy(groupsData, 'region'))
  })
