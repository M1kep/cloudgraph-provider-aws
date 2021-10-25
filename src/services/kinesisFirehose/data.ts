
import CloudGraph from '@cloudgraph/sdk'
import { groupBy } from 'lodash'
// import { Config } from 'aws-sdk/lib/config'
import { Firehose, DeliveryStreamDescription } from '@aws-sdk/client-firehose'
import { TagMap } from '../../types'
import awsLoggerText from '../../properties/logger'
import { convertAwsTagsToTagMap } from '../../utils/format'
import { generateAwsErrorLog, initTestEndpoint } from '../../utils'

const lt = { ...awsLoggerText }
const { logger } = CloudGraph
const serviceName = 'ASG'
const endpoint = initTestEndpoint(serviceName)

export interface RawAwsKinesisFirehose extends DeliveryStreamDescription {
  region: string
  Tags?: TagMap
}

/**
 * Kinesis Firehose
 */

const Limit = 60
const LIST_TAGS_LIMIT = 50

const listDeliveryStreamData = async (kinesis: Firehose): Promise<DeliveryStreamDescription[]> => {
  try {
    const fullResources = []
    const deliveryStreamNames = await kinesis.listDeliveryStreams({ Limit })
    for (const deliveryStreamName of deliveryStreamNames.DeliveryStreamNames) {
      const deliveryStreams = await kinesis.describeDeliveryStream({DeliveryStreamName: deliveryStreamName})
      fullResources.push(deliveryStreams.DeliveryStreamDescription)
    }

    logger.debug(lt.fetchedKinesisFirehose(fullResources.length))

    return fullResources
  } catch (err) {
    generateAwsErrorLog(serviceName, 'kinesisFirehose:describeDeliveryStream', err)
  }
  return [];
}

const listTagsForDeliveryStream = async (kinesis: Firehose, deliveryStreamName: string): Promise<TagMap> => {
  try {
    const tags = await kinesis.listTagsForDeliveryStream({
      DeliveryStreamName: deliveryStreamName,
      Limit: LIST_TAGS_LIMIT,
    })

    const awsTags = tags.Tags.map(({ Key, Value }) => {
      return {
        Key,
        Value,
      }
    }) || []

    return convertAwsTagsToTagMap(awsTags)
  } catch (err) {
    generateAwsErrorLog(serviceName, 'kinesisFirehose:listTagsForDeliveryStream', err)
  }
  return null;
}

export default async ({
  regions,
  config,
}: {
  regions: string
  config: any
}): Promise<{
  [region: string]: RawAwsKinesisFirehose[]
}> => {
  const streamDescriptionsData = []

  for (const region of regions.split(',')) {
    const kinesis = new Firehose({ ...config, region, endpoint })
    
    const streamDescriptions = await listDeliveryStreamData(kinesis)
    for (const streamDescription of streamDescriptions) {
      const Tags = await listTagsForDeliveryStream(kinesis, streamDescription.DeliveryStreamName)
      const description: RawAwsKinesisFirehose = {
        ...streamDescription,
        region,
        Tags,
      }
      streamDescriptionsData.push(description)
    }
  }

  return groupBy(streamDescriptionsData, 'region')
}
