import { ServiceConnection } from '@cloudgraph/sdk'
import { isEmpty } from 'lodash'
import { SecurityGroup } from 'aws-sdk/clients/ec2'
import { DBInstance, DBCluster } from 'aws-sdk/clients/rds'

import services from '../../enums/services'
import { RawAwsRdsClusterSnapshot } from '../rdsClusterSnapshot/data'
import { RawAwsIamRole } from '../iamRole/data'
import { AwsKms } from '../kms/data'
import { globalRegionName } from '../../enums/regions'

export default ({
  service,
  data,
  region,
}: {
  service: DBCluster
  data: Array<{ name: string; data: { [property: string]: any[] } }>
  region: string
}): {
  [property: string]: ServiceConnection[]
} => {
  const connections: ServiceConnection[] = []
  const {
    DBClusterArn: id,
    DBClusterIdentifier: clusterId,
    MonitoringRoleArn: monitoringRoleArn,
    AssociatedRoles: associatedRoles = [],
    KmsKeyId,
    ActivityStreamKmsKeyId,
    PerformanceInsightsKMSKeyId,
    VpcSecurityGroups,
  } = service
  const sgIds = VpcSecurityGroups.map(
    ({ VpcSecurityGroupId }) => VpcSecurityGroupId
  )

  /**
   * Find rds db instances
   */
  const instances: {
    name: string
    data: { [property: string]: DBInstance[] }
  } = data.find(({ name }) => name === services.rdsDbInstance)

  if (instances?.data?.[region]) {
    const instancesInRegion: DBInstance[] = instances.data[region].filter(
      ({ DBClusterIdentifier }: DBInstance) => DBClusterIdentifier === clusterId
    )
    if (!isEmpty(instancesInRegion)) {
      for (const instance of instancesInRegion) {
        const { DBInstanceArn: id } = instance
        connections.push({
          id,
          resourceType: services.rdsDbInstance,
          relation: 'child',
          field: 'instances',
        })
      }
    }
  }

  /**
   * Find cluster snapshots
   */
  const snapshots: {
    name: string
    data: { [property: string]: RawAwsRdsClusterSnapshot[] }
  } = data.find(({ name }) => name === services.rdsClusterSnapshot)

  if (snapshots?.data?.[region]) {
    const dataInRegion: RawAwsRdsClusterSnapshot[] = snapshots.data[
      region
    ].filter(
      ({ DBClusterIdentifier }: RawAwsRdsClusterSnapshot) =>
        DBClusterIdentifier === clusterId
    )
    if (!isEmpty(dataInRegion)) {
      for (const snapshot of dataInRegion) {
        connections.push({
          id: snapshot.DBClusterSnapshotIdentifier,
          resourceType: services.rdsClusterSnapshot,
          relation: 'child',
          field: 'snapshots',
        })
      }
    }
  }

  /**
   * Find SecurityGroups
   */
  const securityGroups: {
    name: string
    data: { [property: string]: SecurityGroup[] }
  } = data.find(({ name }) => name === services.sg)

  if (securityGroups?.data?.[region]) {
    const sgsInRegion: SecurityGroup[] = securityGroups.data[region].filter(
      ({ GroupId }: SecurityGroup) => sgIds.includes(GroupId)
    )

    if (!isEmpty(sgsInRegion)) {
      for (const sg of sgsInRegion) {
        connections.push({
          id: sg.GroupId,
          resourceType: services.sg,
          relation: 'child',
          field: 'securityGroups',
        })
      }
    }
  }

  /**
   * Find KMS
   * related to this RDS Cluster
   */
  const kms: {
    name: string
    data: { [property: string]: AwsKms[] }
  } = data.find(({ name }) => name === services.kms)

  if (kms?.data?.[region]) {
    // set storage encryption kms key
    let kmsInRegion: AwsKms[] = kms.data[region].filter(
      ({ Arn }: AwsKms) => Arn === KmsKeyId
    )
    if (!isEmpty(kmsInRegion)) {
      for (const instance of kmsInRegion) {
        connections.push({
          id: instance.KeyId,
          resourceType: services.kms,
          relation: 'child',
          field: 'storageEncryptedKms',
        })
      }
    }

    // set activity stream kms key
    kmsInRegion = kms.data[region].filter(
      ({ Arn }: AwsKms) => Arn === ActivityStreamKmsKeyId
    )
    if (!isEmpty(kmsInRegion)) {
      for (const instance of kmsInRegion) {
        connections.push({
          id: instance.KeyId,
          resourceType: services.kms,
          relation: 'child',
          field: 'activityStreamKms',
        })
      }
    }

    // set performance insights kms key
    kmsInRegion = kms.data[region].filter(
      ({ Arn }: AwsKms) => Arn === PerformanceInsightsKMSKeyId
    )
    if (!isEmpty(kmsInRegion)) {
      for (const instance of kmsInRegion) {
        connections.push({
          id: instance.KeyId,
          resourceType: services.kms,
          relation: 'child',
          field: 'performanceInsightsKms',
        })
      }
    }
  }

  /**
   * Find IAM Role
   * related to this RDS Cluster
   */
  const iamRoles: {
    name: string
    data: { [property: string]: RawAwsIamRole[] }
  } = data.find(({ name }) => name === services.iamRole)

  if (iamRoles?.data?.[globalRegionName]) {
    let iamRolesInRegion: RawAwsIamRole[] = iamRoles.data[
      globalRegionName
    ].filter(({ Arn }: RawAwsIamRole) =>
      associatedRoles.find(r => r.RoleArn === Arn)
    )
    if (!isEmpty(iamRolesInRegion)) {
      for (const instance of iamRolesInRegion) {
        connections.push({
          id: instance.Arn,
          resourceType: services.iamRole,
          relation: 'child',
          field: 'iamRoles',
        })
      }
    }
    iamRolesInRegion = iamRoles.data[globalRegionName].filter(
      ({ Arn }: RawAwsIamRole) => Arn === monitoringRoleArn
    )
    if (!isEmpty(iamRolesInRegion)) {
      for (const instance of iamRolesInRegion) {
        connections.push({
          id: instance.Arn,
          resourceType: services.iamRole,
          relation: 'child',
          field: 'monitoringIamRole',
        })
      }
    }
  }

  const rdsClusterResult = {
    [id]: connections,
  }
  return rdsClusterResult
}
