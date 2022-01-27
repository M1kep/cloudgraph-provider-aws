export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Int64: number;
};

export type AwsEcsExecuteCommandLogConfiguration = {
  cloudWatchEncryptionEnabled?: Maybe<Scalars['Boolean']>;
  cloudWatchLogGroupName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  s3BucketName?: Maybe<Scalars['String']>;
  s3EncryptionEnabled?: Maybe<Scalars['Boolean']>;
  s3KeyPrefix?: Maybe<Scalars['String']>;
};

export type AwsEmrClusterApplication = {
  additionalInfo?: Maybe<Array<Maybe<AwsStringMap>>>;
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AwsEmrClusterConfiguration = {
  classification?: Maybe<Scalars['String']>;
  configurations?: Maybe<Array<Maybe<AwsEmrClusterConfiguration>>>;
  id: Scalars['String'];
  properties?: Maybe<Array<Maybe<AwsStringMap>>>;
};

export type AwsEmrClusterEc2InstanceAttributes = {
  additionalMasterSecurityGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  additionalSlaveSecurityGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  ec2AvailabilityZone?: Maybe<Scalars['String']>;
  ec2KeyName?: Maybe<Scalars['String']>;
  ec2SubnetId?: Maybe<Scalars['String']>;
  emrManagedMasterSecurityGroup?: Maybe<Scalars['String']>;
  emrManagedSlaveSecurityGroup?: Maybe<Scalars['String']>;
  iamInstanceProfile?: Maybe<Scalars['String']>;
  requestedEc2AvailabilityZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  requestedEc2SubnetIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  serviceAccessSecurityGroup?: Maybe<Scalars['String']>;
};

export type AwsEmrClusterKerberosAttributes = {
  adDomainJoinPassword?: Maybe<Scalars['String']>;
  adDomainJoinUser?: Maybe<Scalars['String']>;
  crossRealmTrustPrincipalPassword?: Maybe<Scalars['String']>;
  kdcAdminPassword?: Maybe<Scalars['String']>;
  realm?: Maybe<Scalars['String']>;
};

export type AwsEmrClusterPlacementGroupConfig = {
  id: Scalars['String'];
  instanceRole?: Maybe<Scalars['String']>;
  placementStrategy?: Maybe<Scalars['String']>;
};

export type AwsEmrClusterStateChangeReason = {
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type AwsEmrClusterStatus = {
  state?: Maybe<Scalars['String']>;
  stateChangeReason?: Maybe<AwsEmrClusterStateChangeReason>;
  timeline?: Maybe<AwsEmrClusterTimeline>;
};

export type AwsEmrClusterTimeline = {
  creationDateTime?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['String']>;
  readyDateTime?: Maybe<Scalars['String']>;
};

export type AwsStringMap = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};



export type AwsAccessLogSettings = {
  destinationArn?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type AwsAccountRecoverySetting = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
};

export type AwsAdditionalAuthenticationProvider = {
  authenticationType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  openIDConnectAuthTTL?: Maybe<Scalars['Int']>;
  openIDConnectClientId?: Maybe<Scalars['String']>;
  openIDConnectIatTTL?: Maybe<Scalars['Int']>;
  openIDConnectIssuer?: Maybe<Scalars['String']>;
  userPoolAppIdClientRegex?: Maybe<Scalars['String']>;
  userPoolAwsRegion?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
};

export type AwsAlb = {
  accessLogsEnabled?: Maybe<Scalars['String']>;
  accountId: Scalars['String'];
  arn: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  defaultVpc?: Maybe<Scalars['String']>;
  deletionProtection?: Maybe<Scalars['String']>;
  dnsName?: Maybe<Scalars['String']>;
  dropInvalidHeaderFields?: Maybe<Scalars['String']>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  hostedZone?: Maybe<Scalars['String']>;
  http2?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  idleTimeout?: Maybe<Scalars['String']>;
  ipAddressType?: Maybe<Scalars['String']>;
  listeners?: Maybe<Array<Maybe<AwsAlbListener>>>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  route53Record?: Maybe<Array<Maybe<AwsRoute53Record>>>;
  scheme?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  status?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  subnets?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  type?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsAlbListener = {
  arn: Scalars['String'];
  settings?: Maybe<AwsAlbListenerSettings>;
};

export type AwsAlbListenerRule = {
  order?: Maybe<Scalars['String']>;
  targetGroupArn?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AwsAlbListenerSettings = {
  protocol?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Maybe<AwsAlbListenerRule>>>;
  sslPolicy?: Maybe<Scalars['String']>;
};

export type AwsApiGatewayEndpointConfiguration = {
  id?: Maybe<Scalars['ID']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  vpcEndpointIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsApiGatewayMethod = {
  accountId: Scalars['String'];
  apiKeyRequired?: Maybe<Scalars['Boolean']>;
  arn: Scalars['String'];
  authorization?: Maybe<Scalars['String']>;
  httpMethod?: Maybe<Scalars['String']>;
};

export type AwsApiGatewayResource = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  id: Scalars['String'];
  methods?: Maybe<Array<Maybe<AwsApiGatewayMethod>>>;
  path?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  restApi?: Maybe<Array<Maybe<AwsApiGatewayRestApi>>>;
};

export type AwsApiGatewayRestApi = {
  accountId: Scalars['String'];
  apiKeySource?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  binaryMediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdDate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endpointConfiguration?: Maybe<AwsApiGatewayEndpointConfiguration>;
  id: Scalars['String'];
  minimumCompressionSize?: Maybe<Scalars['Int']>;
  policy?: Maybe<AwsIamJsonPolicy>;
  region?: Maybe<Scalars['String']>;
  resources?: Maybe<Array<Maybe<AwsApiGatewayResource>>>;
  route53Record?: Maybe<Array<Maybe<AwsRoute53Record>>>;
  stages?: Maybe<Array<Maybe<AwsApiGatewayStage>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsApiGatewayStage = {
  accessLogSettings?: Maybe<AwsAccessLogSettings>;
  accountId: Scalars['String'];
  arn: Scalars['String'];
  cacheCluster?: Maybe<Scalars['Boolean']>;
  cacheClusterSize?: Maybe<Scalars['String']>;
  clientCertificateId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  documentationVersion?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  restApi?: Maybe<Array<Maybe<AwsApiGatewayRestApi>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  variables?: Maybe<Array<Maybe<AwsApiGatewayStageVariable>>>;
  xrayTracing?: Maybe<Scalars['Boolean']>;
};

export type AwsApiGatewayStageVariable = {
  id: Scalars['String'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type AwsAppSync = {
  accountId: Scalars['String'];
  additionalAuthenticationProviders?: Maybe<Array<Maybe<AwsAdditionalAuthenticationProvider>>>;
  apiKeys?: Maybe<Array<Maybe<AwsAppSyncApiKey>>>;
  arn: Scalars['String'];
  authenticationType?: Maybe<Scalars['String']>;
  cognitoUserPool?: Maybe<Array<Maybe<AwsCognitoUserPool>>>;
  dataSources?: Maybe<Array<Maybe<AwsAppSyncDataSource>>>;
  dynamodb?: Maybe<Array<Maybe<AwsDynamoDbTable>>>;
  functions?: Maybe<Array<Maybe<AwsAppSyncFunction>>>;
  id: Scalars['String'];
  lambda?: Maybe<Array<Maybe<AwsLambda>>>;
  lambdaAuthorizerIdentityValidationExpression?: Maybe<Scalars['String']>;
  lambdaAuthorizerResultTtlInSeconds?: Maybe<Scalars['Int']>;
  lambdaAuthorizerUri?: Maybe<Scalars['String']>;
  logCloudWatchLogsRoleArn?: Maybe<Scalars['String']>;
  logExcludeVerboseContent?: Maybe<Scalars['String']>;
  logFieldLogLevel?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  openIDConnectAuthTTL?: Maybe<Scalars['Int']>;
  openIDConnectClientId?: Maybe<Scalars['String']>;
  openIDConnectIatTTL?: Maybe<Scalars['Int']>;
  openIDConnectIssuer?: Maybe<Scalars['String']>;
  rdsCluster?: Maybe<Array<Maybe<AwsRdsCluster>>>;
  region: Scalars['String'];
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  types?: Maybe<Array<Maybe<AwsAppSyncType>>>;
  uris?: Maybe<Array<Maybe<AwsAppSyncGraphqlApiUris>>>;
  userPoolAppIdClientRegex?: Maybe<Scalars['String']>;
  userPoolAwsRegion?: Maybe<Scalars['String']>;
  userPoolDefaultAction?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  wafWebAclArn?: Maybe<Scalars['String']>;
  xrayEnabled?: Maybe<Scalars['String']>;
};

export type AwsAppSyncApiKey = {
  description?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
};

export type AwsAppSyncDataSource = {
  arn: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dynamodbAwsRegion?: Maybe<Scalars['String']>;
  dynamodbDeltaSyncBaseTableTTL?: Maybe<Scalars['Int']>;
  dynamodbDeltaSyncTableName?: Maybe<Scalars['String']>;
  dynamodbDeltaSyncTableTTL?: Maybe<Scalars['Int']>;
  dynamodbTableName?: Maybe<Scalars['String']>;
  dynamodbUseCallerCredentials?: Maybe<Scalars['String']>;
  dynamodbVersioned?: Maybe<Scalars['String']>;
  elasticsearchAwsRegion?: Maybe<Scalars['String']>;
  elasticsearchEndpoint?: Maybe<Scalars['String']>;
  httpAuthorizationIamSigningRegion?: Maybe<Scalars['String']>;
  httpAuthorizationIamSigningServiceName?: Maybe<Scalars['String']>;
  httpAuthorizationType?: Maybe<Scalars['String']>;
  httpEndpoint?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lambdaFunctionArn?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relationalDatabaseAwsRegion?: Maybe<Scalars['String']>;
  relationalDatabaseAwsSecretStoreArn?: Maybe<Scalars['String']>;
  relationalDatabaseClusterIdentifier?: Maybe<Scalars['String']>;
  relationalDatabaseName?: Maybe<Scalars['String']>;
  relationalDatabaseSchema?: Maybe<Scalars['String']>;
  relationalDatabaseSourceType?: Maybe<Scalars['String']>;
  serviceRoleArn?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AwsAppSyncFunction = {
  arn: Scalars['String'];
  dataSourceName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  functionVersion?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  requestMappingTemplate?: Maybe<Scalars['String']>;
  resolvers?: Maybe<Array<Maybe<AwsAppSyncResolver>>>;
  responseMappingTemplate?: Maybe<Scalars['String']>;
};

export type AwsAppSyncGraphqlApiUris = {
  id: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AwsAppSyncResolver = {
  arn: Scalars['String'];
  cachingKeys?: Maybe<Array<Maybe<Scalars['String']>>>;
  cachingTTL?: Maybe<Scalars['Int']>;
  dataSourceName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  pipelineFunctionIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  requestMappingTemplate?: Maybe<Scalars['String']>;
  responseMappingTemplate?: Maybe<Scalars['String']>;
  syncConflictDetection?: Maybe<Scalars['String']>;
  syncConflictHandler?: Maybe<Scalars['String']>;
  syncLambdaConflictHandlerArn?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
};

export type AwsAppSyncType = {
  arn: Scalars['String'];
  definition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  resolvers?: Maybe<Array<Maybe<AwsAppSyncResolver>>>;
};

export type AwsAsg = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  availabilityZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  capacityRebalanceEnabled?: Maybe<Scalars['String']>;
  context?: Maybe<Scalars['String']>;
  cooldown?: Maybe<Scalars['Int']>;
  desiredCapacity?: Maybe<Scalars['Int']>;
  ebs?: Maybe<Array<Maybe<AwsEbs>>>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  ec2InstanceIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  enabledMetrics?: Maybe<Array<Maybe<AwsEnabledMetrics>>>;
  healthCheckGracePeriod?: Maybe<Scalars['Int']>;
  healthCheckType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  launchConfiguration?: Maybe<AwsLaunchConfiguration>;
  launchConfigurationName?: Maybe<Scalars['String']>;
  launchTemplateId?: Maybe<Scalars['String']>;
  launchTemplateName?: Maybe<Scalars['String']>;
  launchTemplateVersion?: Maybe<Scalars['String']>;
  loadBalancerNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  maxInstanceLifetime?: Maybe<Scalars['Int']>;
  maxSize?: Maybe<Scalars['Int']>;
  minSize?: Maybe<Scalars['Int']>;
  mixedInstancesPolicy?: Maybe<AwsMixedInstancesPolicy>;
  name?: Maybe<Scalars['String']>;
  newInstancesProtectedFromScaleIn?: Maybe<Scalars['String']>;
  placementGroup?: Maybe<Scalars['String']>;
  predictedCapacity?: Maybe<Scalars['Int']>;
  region: Scalars['String'];
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  serviceLinkedRoleARN?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  suspendedProcesses?: Maybe<Array<Maybe<AwsSuspendedProcess>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  targetGroupARNs?: Maybe<Array<Maybe<Scalars['String']>>>;
  terminationPolicies?: Maybe<Array<Maybe<Scalars['String']>>>;
  vpcZoneIdentifier?: Maybe<Scalars['String']>;
  warmPoolConfigMaxGroupPreparedCapacity?: Maybe<Scalars['Int']>;
  warmPoolConfigMinSize?: Maybe<Scalars['Int']>;
  warmPoolConfigPoolState?: Maybe<Scalars['String']>;
  warmPoolConfigStatus?: Maybe<Scalars['String']>;
  warmPoolSize?: Maybe<Scalars['Int']>;
};

export type AwsAssociatedTargetNetworks = {
  id: Scalars['String'];
  networkId?: Maybe<Scalars['String']>;
  networkType?: Maybe<Scalars['String']>;
};

export type AwsBilling = {
  account: Scalars['String'];
  id: Scalars['String'];
  last30Days?: Maybe<Array<Maybe<AwsServiceBillingInfo>>>;
  last30DaysDailyAverage?: Maybe<Array<Maybe<AwsServiceBillingInfo>>>;
  monthToDate?: Maybe<Array<Maybe<AwsServiceBillingInfo>>>;
  monthToDateDailyAverage?: Maybe<Array<Maybe<AwsServiceBillingInfo>>>;
  totalCostLast30Days?: Maybe<AwsTotalBillingInfo>;
  totalCostMonthToDate?: Maybe<AwsTotalBillingInfo>;
};

export type AwsBucketPolicy = {
  id: Scalars['String'];
  policy?: Maybe<AwsIamJsonPolicy>;
};

export type AwsCacheSubnetGroup = {
  cacheSubnetGroupDescription?: Maybe<Scalars['String']>;
  cacheSubnetGroupName?: Maybe<Scalars['String']>;
  vpcId?: Maybe<Scalars['String']>;
};

export type AwsCertificateAuthenticationRequest = {
  clientRootCertificateChain?: Maybe<Scalars['String']>;
};

export type AwsClientConnectResponseOptions = {
  enabled?: Maybe<Scalars['Boolean']>;
  lambdaFunctionArn?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsClientVpnAuthentication = {
  activeDirectory?: Maybe<AwsDirectoryServiceAuthenticationRequest>;
  federatedAuthentication?: Maybe<AwsFederatedAuthentication>;
  id: Scalars['String'];
  mutualAuthentication?: Maybe<AwsCertificateAuthenticationRequest>;
  type?: Maybe<Scalars['String']>;
};

export type AwsClientVpnEndpoint = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  associatedTargetNetworks?: Maybe<Array<Maybe<AwsAssociatedTargetNetworks>>>;
  authenticationOptions?: Maybe<Array<Maybe<AwsClientVpnAuthentication>>>;
  clientCidrBlock?: Maybe<Scalars['String']>;
  clientConnectOptions?: Maybe<AwsClientConnectResponseOptions>;
  connectionLogOptions?: Maybe<AwsConnectionLogResponseOptions>;
  creationTime?: Maybe<Scalars['String']>;
  deletionTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dnsName?: Maybe<Scalars['String']>;
  dnsServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  securityGroupIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  serverCertificateArn?: Maybe<Scalars['String']>;
  splitTunnel?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transportProtocol?: Maybe<Scalars['String']>;
  vpnPort?: Maybe<Scalars['Int']>;
  vpnProtocol?: Maybe<Scalars['String']>;
};

export type AwsCloud9Environment = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  connectionType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lifecycle?: Maybe<AwsCloud9EnvironmentLifecycle>;
  managedCredentialsStatus?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerArn?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  type?: Maybe<Scalars['String']>;
};

export type AwsCloud9EnvironmentLifecycle = {
  failureResource?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStack = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  changeSetId?: Maybe<Scalars['String']>;
  creationTime: Scalars['String'];
  deletionTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disableRollback?: Maybe<Scalars['String']>;
  enableTerminationProtection?: Maybe<Scalars['String']>;
  iamRole?: Maybe<Array<Maybe<AwsIamRole>>>;
  id: Scalars['String'];
  lastUpdatedTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notificationARNs?: Maybe<Array<Maybe<Scalars['String']>>>;
  outputs?: Maybe<Array<Maybe<AwsCloudFormationStackOutputList>>>;
  parameters?: Maybe<Array<Maybe<AwsCloudFormationStackParameter>>>;
  parentId?: Maybe<Scalars['String']>;
  parentStack?: Maybe<Array<Maybe<AwsCloudFormationStack>>>;
  region: Scalars['String'];
  roleArn?: Maybe<Scalars['String']>;
  rollbackConfiguration?: Maybe<AwsCloudFormationStackRollbackConfiguration>;
  rootId?: Maybe<Scalars['String']>;
  rootStack?: Maybe<Array<Maybe<AwsCloudFormationStack>>>;
  sns?: Maybe<Array<Maybe<AwsSns>>>;
  stackDriftInfo?: Maybe<AwsCloudFormationStackDriftInfo>;
  stackDriftList?: Maybe<Array<Maybe<AwsCloudFormationStackDriftList>>>;
  stackStatus: Scalars['String'];
  stackStatusReason?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  timeoutInMinutes?: Maybe<Scalars['Int']>;
};

export type AwsCloudFormationStackAutoDeploymentConfig = {
  enabled?: Maybe<Scalars['String']>;
  retainStacksOnAccountRemoval?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStackDriftInfo = {
  id: Scalars['String'];
  lastCheckTimestamp?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStackDriftList = {
  id: Scalars['String'];
  resourceType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStackOutputList = {
  description?: Maybe<Scalars['String']>;
  exportName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  outputKey?: Maybe<Scalars['String']>;
  outputValue?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStackParameter = {
  id: Scalars['String'];
  parameterKey?: Maybe<Scalars['String']>;
  parameterValue?: Maybe<Scalars['String']>;
  resolvedValue?: Maybe<Scalars['String']>;
  usePreviousValue?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStackRollbackConfiguration = {
  id: Scalars['String'];
  monitoringTimeInMinutes?: Maybe<Scalars['Int']>;
  rollbackTriggers?: Maybe<Array<Maybe<AwsRollbackConfigurationRollbackTrigger>>>;
};

export type AwsCloudFormationStackSet = {
  administrationRoleARN?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  autoDeploymentConfig?: Maybe<AwsCloudFormationStackAutoDeploymentConfig>;
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  driftDetectionDetail?: Maybe<AwsCloudFormationStackSetDriftDetectionDetail>;
  executionRoleName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  organizationalUnitIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  parameters?: Maybe<Array<Maybe<AwsCloudFormationStackSetParameter>>>;
  permissionModel?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  templateBody?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStackSetDriftDetectionDetail = {
  driftDetectionStatus?: Maybe<Scalars['String']>;
  driftStatus?: Maybe<Scalars['String']>;
  driftedStackInstancesCount?: Maybe<Scalars['Int']>;
  failedStackInstancesCount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  inProgressStackInstancesCount?: Maybe<Scalars['Int']>;
  inSyncStackInstancesCount?: Maybe<Scalars['Int']>;
  lastDriftCheckTimestamp?: Maybe<Scalars['String']>;
  parameterKey?: Maybe<Scalars['String']>;
  parameterValue?: Maybe<Scalars['String']>;
  resolvedValue?: Maybe<Scalars['String']>;
  totalStackInstancesCount?: Maybe<Scalars['Int']>;
  usePreviousValue?: Maybe<Scalars['String']>;
};

export type AwsCloudFormationStackSetParameter = {
  id: Scalars['String'];
  parameterKey?: Maybe<Scalars['String']>;
  parameterValue?: Maybe<Scalars['String']>;
  resolvedValue?: Maybe<Scalars['String']>;
  usePreviousValue?: Maybe<Scalars['String']>;
};

export type AwsCloudfront = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  callerReference?: Maybe<Scalars['String']>;
  customErrorResponses?: Maybe<Array<Maybe<AwsCloudfrontCustomErrorResponse>>>;
  defaultCacheBehavior?: Maybe<AwsCloudfrontCacheBehavior>;
  defaultRootObject?: Maybe<Scalars['String']>;
  domainName?: Maybe<Scalars['String']>;
  elb?: Maybe<Array<Maybe<AwsElb>>>;
  enabled?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  geoRestrictions?: Maybe<Scalars['String']>;
  httpVersion?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ipv6Enabled?: Maybe<Scalars['String']>;
  lastModified?: Maybe<Scalars['String']>;
  orderedCacheBehaviors?: Maybe<Array<Maybe<AwsCloudfrontCacheBehavior>>>;
  origins?: Maybe<Array<Maybe<AwsCloudfrontOriginData>>>;
  priceClass?: Maybe<Scalars['String']>;
  s3?: Maybe<Array<Maybe<AwsS3>>>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  viewerCertificate?: Maybe<AwsCloudfrontViewerCertificate>;
  webAclId?: Maybe<Scalars['String']>;
};

export type AwsCloudfrontCacheBehavior = {
  allowedMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  cachedMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  compress?: Maybe<Scalars['String']>;
  defaultTtl?: Maybe<Scalars['String']>;
  forwardedValues?: Maybe<AwsCloudfrontforwardedValues>;
  id: Scalars['String'];
  maxTtl?: Maybe<Scalars['String']>;
  minTtl?: Maybe<Scalars['String']>;
  patternPath?: Maybe<Scalars['String']>;
  smoothStreaming?: Maybe<Scalars['String']>;
  targetOriginId?: Maybe<Scalars['String']>;
  viewerProtocolPolicy?: Maybe<Scalars['String']>;
};

export type AwsCloudfrontCustomErrorResponse = {
  errorCachingMinTtl?: Maybe<Scalars['String']>;
  errorCode?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  responseCode?: Maybe<Scalars['String']>;
  responsePagePath?: Maybe<Scalars['String']>;
};

export type AwsCloudfrontCustomOriginConfig = {
  httpPort?: Maybe<Scalars['Int']>;
  httpsPort?: Maybe<Scalars['Int']>;
  originKeepaliveTimeout?: Maybe<Scalars['Int']>;
  originProtocolPolicy?: Maybe<Scalars['String']>;
  originReadTimeout?: Maybe<Scalars['Int']>;
  originSslProtocols?: Maybe<AwsCloudfrontOriginSslProtocols>;
};

export type AwsCloudfrontOriginCustomHeader = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsCloudfrontOriginData = {
  customHeaders?: Maybe<Array<Maybe<AwsCloudfrontOriginCustomHeader>>>;
  customOriginConfig?: Maybe<AwsCloudfrontCustomOriginConfig>;
  domainName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  originId: Scalars['String'];
  originPath?: Maybe<Scalars['String']>;
};

export type AwsCloudfrontOriginSslProtocols = {
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  quantity?: Maybe<Scalars['Int']>;
};

export type AwsCloudfrontViewerCertificate = {
  acmCertificateArn?: Maybe<Scalars['String']>;
  cloudfrontDefaultCertificate?: Maybe<Scalars['String']>;
  iamCertificateId?: Maybe<Scalars['String']>;
  minimumProtocolVersion?: Maybe<Scalars['String']>;
  sslSupportMethod?: Maybe<Scalars['String']>;
};

export type AwsCloudfrontforwardedValues = {
  headers?: Maybe<Array<Maybe<Scalars['String']>>>;
  queryString?: Maybe<Scalars['String']>;
};

export type AwsCloudtrail = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  cgId: Scalars['String'];
  cloudWatchLogsLogGroupArn?: Maybe<Scalars['String']>;
  cloudWatchLogsRoleArn?: Maybe<Scalars['String']>;
  cloudwatch?: Maybe<Array<Maybe<AwsCloudwatch>>>;
  cloudwatchLog?: Maybe<Array<Maybe<AwsCloudwatchLog>>>;
  eventSelectors?: Maybe<Array<Maybe<AwsCloudtrailEventSelector>>>;
  hasCustomEventSelectors?: Maybe<Scalars['String']>;
  hasInsightSelectors?: Maybe<Scalars['String']>;
  homeRegion?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  includeGlobalServiceEvents?: Maybe<Scalars['String']>;
  isMultiRegionTrail?: Maybe<Scalars['String']>;
  isOrganizationTrail?: Maybe<Scalars['String']>;
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  kmsKeyId?: Maybe<Scalars['String']>;
  logFileValidationEnabled?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  s3?: Maybe<Array<Maybe<AwsS3>>>;
  s3BucketName?: Maybe<Scalars['String']>;
  s3KeyPrefix?: Maybe<Scalars['String']>;
  sns?: Maybe<Array<Maybe<AwsSns>>>;
  status?: Maybe<AwsCloudtrailStatus>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsCloudtrailEventSelector = {
  id: Scalars['String'];
  includeManagementEvents?: Maybe<Scalars['Boolean']>;
  readWriteType?: Maybe<Scalars['String']>;
};

export type AwsCloudtrailStatus = {
  isLogging?: Maybe<Scalars['Boolean']>;
  latestCloudWatchLogsDeliveryTime?: Maybe<Scalars['String']>;
  latestDeliveryAttemptSucceeded?: Maybe<Scalars['String']>;
  latestDeliveryAttemptTime?: Maybe<Scalars['String']>;
  latestDeliveryTime?: Maybe<Scalars['String']>;
  latestDigestDeliveryTime?: Maybe<Scalars['String']>;
  latestNotificationAttemptSucceeded?: Maybe<Scalars['String']>;
  latestNotificationAttemptTime?: Maybe<Scalars['String']>;
  latestNotificationTime?: Maybe<Scalars['String']>;
  startLoggingTime?: Maybe<Scalars['String']>;
  timeLoggingStarted?: Maybe<Scalars['String']>;
  timeLoggingStopped?: Maybe<Scalars['String']>;
};

export type AwsCloudwatch = {
  accountId: Scalars['String'];
  actions?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionsEnabled?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  cloudtrail?: Maybe<Array<Maybe<AwsCloudtrail>>>;
  cloudwatchLog?: Maybe<Array<Maybe<AwsCloudwatchLog>>>;
  comparisonOperator?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Array<Maybe<AwsCloudwatchDimensions>>>;
  evaluationPeriods?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  metric?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  sns?: Maybe<Array<Maybe<AwsSns>>>;
  statistic?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  threshold?: Maybe<Scalars['String']>;
};

export type AwsCloudwatchDimensions = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsCloudwatchLog = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  cloudtrail?: Maybe<Array<Maybe<AwsCloudtrail>>>;
  cloudwatch?: Maybe<Array<Maybe<AwsCloudwatch>>>;
  creationTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  kmsKeyId?: Maybe<Scalars['String']>;
  metricFilterCount?: Maybe<Scalars['Int']>;
  metricFilters?: Maybe<Array<Maybe<AwsMetricFilter>>>;
  region?: Maybe<Scalars['String']>;
  retentionInDays?: Maybe<Scalars['Int']>;
  storedBytes?: Maybe<Scalars['String']>;
};

export type AwsCognitoIdentityPool = {
  accountId: Scalars['String'];
  allowClassicFlow?: Maybe<Scalars['String']>;
  allowUnauthenticatedIdentities?: Maybe<Scalars['String']>;
  cognitoIdentityProviders?: Maybe<Array<Maybe<AwsCognitoIdentityProviders>>>;
  developerProviderName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  identityPoolName?: Maybe<Scalars['String']>;
  openIdConnectProviderARNs?: Maybe<Array<Maybe<Scalars['String']>>>;
  region?: Maybe<Scalars['String']>;
  samlProviderARNs?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportedLoginProviders?: Maybe<Array<Maybe<AwsSupportedLoginProvider>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsCognitoIdentityProviders = {
  clientId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  providerName?: Maybe<Scalars['String']>;
  serverSideTokenCheck?: Maybe<Scalars['String']>;
};

export type AwsCognitoUserPool = {
  accountId: Scalars['String'];
  accountRecoverySettings?: Maybe<Array<Maybe<AwsAccountRecoverySetting>>>;
  adminCreateUserConfigAllowAdminCreateUserOnly?: Maybe<Scalars['String']>;
  adminCreateUserConfigInviteMessageTemplateEmailMessage?: Maybe<Scalars['String']>;
  adminCreateUserConfigInviteMessageTemplateEmailSubject?: Maybe<Scalars['String']>;
  adminCreateUserConfigInviteMessageTemplateSMSMessage?: Maybe<Scalars['String']>;
  adminCreateUserConfigUnusedAccountValidityDays?: Maybe<Scalars['Int']>;
  aliasAttributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  appSync?: Maybe<Array<Maybe<AwsAppSync>>>;
  arn: Scalars['String'];
  autoVerifiedAttributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  creationDate?: Maybe<Scalars['String']>;
  customDomain?: Maybe<Scalars['String']>;
  deviceConfigChallengeRequiredOnNewDevice?: Maybe<Scalars['String']>;
  deviceConfigDeviceOnlyRememberedOnUserPrompt?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  emailConfigConfigurationSet?: Maybe<Scalars['String']>;
  emailConfigEmailSendingAccount?: Maybe<Scalars['String']>;
  emailConfigFrom?: Maybe<Scalars['String']>;
  emailConfigReplyToEmailAddress?: Maybe<Scalars['String']>;
  emailConfigSourceArn?: Maybe<Scalars['String']>;
  emailConfigurationFailure?: Maybe<Scalars['String']>;
  emailVerificationMessage?: Maybe<Scalars['String']>;
  emailVerificationSubject?: Maybe<Scalars['String']>;
  estimatedNumberOfUsers?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  lambda?: Maybe<Array<Maybe<AwsLambda>>>;
  lambdaConfig?: Maybe<AwsCognitoUserPoolLambdaConfig>;
  lastModifiedDate?: Maybe<Scalars['String']>;
  mfaConfiguration?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  policies?: Maybe<AwsCognitoUserPoolPasswordPolicy>;
  region?: Maybe<Scalars['String']>;
  schemaAttributes?: Maybe<Array<Maybe<AwsCognitoUserPoolSchemaAttribute>>>;
  smsAuthenticationMessage?: Maybe<Scalars['String']>;
  smsConfigurationExternalId?: Maybe<Scalars['String']>;
  smsConfigurationFailure?: Maybe<Scalars['String']>;
  smsConfigurationSnsCallerArn?: Maybe<Scalars['String']>;
  smsVerificationMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  userPoolAddOnsAdvancedSecurityMode?: Maybe<Scalars['String']>;
  usernameAttributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  usernameConfigurationCaseSensitive?: Maybe<Scalars['String']>;
  verificationMessageTemplateDefaultEmailOption?: Maybe<Scalars['String']>;
  verificationMessageTemplateEmailMessage?: Maybe<Scalars['String']>;
  verificationMessageTemplateEmailMessageByLink?: Maybe<Scalars['String']>;
  verificationMessageTemplateEmailSubject?: Maybe<Scalars['String']>;
  verificationMessageTemplateEmailSubjectByLink?: Maybe<Scalars['String']>;
  verificationMessageTemplateSmsMessage?: Maybe<Scalars['String']>;
};

export type AwsCognitoUserPoolLambdaConfig = {
  createAuthChallenge?: Maybe<Scalars['String']>;
  customEmailSenderLambdaArn?: Maybe<Scalars['String']>;
  customEmailSenderLambdaVersion?: Maybe<Scalars['String']>;
  customMessage?: Maybe<Scalars['String']>;
  customSMSSenderLambdaArn?: Maybe<Scalars['String']>;
  customSMSSenderLambdaVersion?: Maybe<Scalars['String']>;
  defineAuthChallenge?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kmsKeyID?: Maybe<Scalars['String']>;
  postAuthentication?: Maybe<Scalars['String']>;
  postConfirmation?: Maybe<Scalars['String']>;
  preAuthentication?: Maybe<Scalars['String']>;
  preSignUp?: Maybe<Scalars['String']>;
  preTokenGeneration?: Maybe<Scalars['String']>;
  userMigration?: Maybe<Scalars['String']>;
  verifyAuthChallengeResponse?: Maybe<Scalars['String']>;
};

export type AwsCognitoUserPoolPasswordPolicy = {
  id: Scalars['String'];
  minimumLength?: Maybe<Scalars['Int']>;
  requireLowercase?: Maybe<Scalars['String']>;
  requireNumbers?: Maybe<Scalars['String']>;
  requireSymbols?: Maybe<Scalars['String']>;
  requireUppercase?: Maybe<Scalars['String']>;
  temporaryPasswordValidityDays?: Maybe<Scalars['Int']>;
};

export type AwsCognitoUserPoolSchemaAttribute = {
  attributeDataType?: Maybe<Scalars['String']>;
  developerOnlyAttribute?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mutable?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberAttributeConstraintsMaxValue?: Maybe<Scalars['String']>;
  numberAttributeConstraintsMinValue?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
  stringAttributeConstraintsMaxValue?: Maybe<Scalars['String']>;
  stringAttributeConstraintsMinValue?: Maybe<Scalars['String']>;
};

export type AwsConnectionLogResponseOptions = {
  cloudwatchLogGroup?: Maybe<Scalars['String']>;
  cloudwatchLogStream?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type AwsCustomerGateway = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  bgpAsn?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ipAddress?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  type?: Maybe<Scalars['String']>;
  vpnConnection?: Maybe<Array<Maybe<AwsVpnConnection>>>;
};

export type AwsDirectoryServiceAuthenticationRequest = {
  directoryId?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTable = {
  accountId: Scalars['String'];
  appSync?: Maybe<Array<Maybe<AwsAppSync>>>;
  arn: Scalars['String'];
  attributes?: Maybe<Array<Maybe<AwsDynamoDbTableAttributes>>>;
  billingModeSummary?: Maybe<AwsDynamoDbTableBillingSummary>;
  creationDate: Scalars['String'];
  globalIndexes?: Maybe<Array<Maybe<AwsDynamoDbTableGlobalSecondaryIndexDescription>>>;
  globalTableVersion?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  itemCount?: Maybe<Scalars['Int']>;
  keySchema?: Maybe<Array<Maybe<AwsDynamoDbTableIndexKeySchema>>>;
  latestStreamArn?: Maybe<Scalars['String']>;
  latestStreamLabel?: Maybe<Scalars['String']>;
  localIndexes?: Maybe<Array<Maybe<AwsDynamoDbTableLocalSecondaryIndexDescription>>>;
  name: Scalars['String'];
  pointInTimeRecoveryEnabled?: Maybe<Scalars['Boolean']>;
  provisionedThroughput?: Maybe<AwsDynamoDbTableProvisionedThroughputDescription>;
  region?: Maybe<Scalars['String']>;
  replicas?: Maybe<Array<Maybe<AwsDynamoDbTableReplicaDescription>>>;
  restoreSummary?: Maybe<AwsDynamoDbTableRestoreSummary>;
  sizeInBytes?: Maybe<Scalars['Int64']>;
  sseDescription?: Maybe<AwsDynamoDbTableSseDescription>;
  status?: Maybe<Scalars['String']>;
  streamSpecification?: Maybe<AwsDynamoDbTableStreamSpecification>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  ttlEnabled?: Maybe<Scalars['Boolean']>;
};

export type AwsDynamoDbTableAttributes = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableBillingSummary = {
  billingMode?: Maybe<Scalars['String']>;
  lastUpdateToPayPerRequestDateTime?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableGlobalSecondaryIndexDescription = {
  arn: Scalars['String'];
  backfilling?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  itemCount?: Maybe<Scalars['Int']>;
  keySchema?: Maybe<Array<Maybe<AwsDynamoDbTableIndexKeySchema>>>;
  name: Scalars['String'];
  projection?: Maybe<AwsDynamoDbTableIndexProjection>;
  provisionedThroughput?: Maybe<AwsDynamoDbTableProvisionedThroughputDescription>;
  sizeInBytes?: Maybe<Scalars['Int64']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableIndexKeySchema = {
  attributeName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  keyType?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableIndexProjection = {
  nonKeyAttributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableLocalSecondaryIndexDescription = {
  arn: Scalars['String'];
  itemCount?: Maybe<Scalars['Int']>;
  keySchema?: Maybe<Array<Maybe<AwsDynamoDbTableIndexKeySchema>>>;
  name: Scalars['String'];
  projection?: Maybe<AwsDynamoDbTableIndexProjection>;
  sizeInBytes?: Maybe<Scalars['Int64']>;
};

export type AwsDynamoDbTableProvisionedThroughputDescription = {
  lastDecreaseDateTime?: Maybe<Scalars['String']>;
  lastIncreaseDateTime?: Maybe<Scalars['String']>;
  numberOfDecreasesToday?: Maybe<Scalars['Int']>;
  readCapacityUnits?: Maybe<Scalars['Int']>;
  writeCapacityUnits?: Maybe<Scalars['Int']>;
};

export type AwsDynamoDbTableReplicaDescription = {
  globalSecondaryIndexes?: Maybe<Array<Maybe<AwsDynamoDbTableReplicaGlobalSecondaryIndexDescription>>>;
  id: Scalars['String'];
  kmsMasterKeyId?: Maybe<Scalars['String']>;
  readCapacityUnits?: Maybe<Scalars['Int']>;
  regionName?: Maybe<Scalars['String']>;
  replicaInaccessibleDateTime?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusDescription?: Maybe<Scalars['String']>;
  statusPercentProgress?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableReplicaGlobalSecondaryIndexDescription = {
  name?: Maybe<Scalars['String']>;
  readCapacityUnits?: Maybe<Scalars['Int']>;
};

export type AwsDynamoDbTableRestoreSummary = {
  restoreDateTime?: Maybe<Scalars['String']>;
  restoreInProgress?: Maybe<Scalars['String']>;
  sourceBackupArn?: Maybe<Scalars['String']>;
  sourceTableArn?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableSseDescription = {
  inaccessibleEncryptionDateTime?: Maybe<Scalars['String']>;
  kmsMasterKeyArn?: Maybe<Scalars['String']>;
  sseType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsDynamoDbTableStreamSpecification = {
  streamViewType?: Maybe<Scalars['String']>;
  streamsEnabled?: Maybe<Scalars['Boolean']>;
};

export type AwsEbs = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  asg?: Maybe<Array<Maybe<AwsAsg>>>;
  attachments?: Maybe<Array<Maybe<AwsEbsAttachment>>>;
  availabilityZone?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  emrInstance?: Maybe<Array<Maybe<AwsEmrInstance>>>;
  encrypted?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  iops?: Maybe<Scalars['Int']>;
  isBootDisk?: Maybe<Scalars['Boolean']>;
  multiAttachEnabled?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  snapshot?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  volumeType?: Maybe<Scalars['String']>;
};

export type AwsEbsAttachment = {
  attachedTime?: Maybe<Scalars['String']>;
  attachmentInformation?: Maybe<Scalars['String']>;
  deleteOnTermination?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};

export type AwsEc2 = {
  accountId: Scalars['String'];
  alb?: Maybe<Array<Maybe<AwsAlb>>>;
  ami?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  asg?: Maybe<Array<Maybe<AwsAsg>>>;
  availabilityZone?: Maybe<Scalars['String']>;
  cloudWatchMetricData?: Maybe<AwsEc2CloudWatchMetricsTimePeriods>;
  cpuCoreCount?: Maybe<Scalars['Int']>;
  cpuThreadsPerCore?: Maybe<Scalars['Int']>;
  dailyCost?: Maybe<AwsTotalBillingInfo>;
  deletionProtection?: Maybe<Scalars['String']>;
  ebs?: Maybe<Array<Maybe<AwsEbs>>>;
  ebsOptimized?: Maybe<Scalars['String']>;
  ecsContainer?: Maybe<Array<Maybe<AwsEcsContainer>>>;
  eip?: Maybe<Array<Maybe<AwsEip>>>;
  elasticIps?: Maybe<Scalars['String']>;
  emrInstance?: Maybe<Array<Maybe<AwsEmrInstance>>>;
  ephemeralBlockDevices?: Maybe<Array<Maybe<AwsEc2Blockdevice>>>;
  hibernation?: Maybe<Scalars['String']>;
  iamInstanceProfile?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instanceLifecycle?: Maybe<Scalars['String']>;
  instanceState?: Maybe<Scalars['String']>;
  instanceType?: Maybe<Scalars['String']>;
  ipv4PublicIp?: Maybe<Scalars['String']>;
  ipv6Addresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  keyPair?: Maybe<AwsEc2KeyPair>;
  launchTime?: Maybe<Scalars['DateTime']>;
  metadataOptions?: Maybe<AwsEc2MetadataOptions>;
  metadatasecurityGroupIdsOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  monitoring?: Maybe<Scalars['String']>;
  networkInterfaces?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  placementGroup?: Maybe<Scalars['String']>;
  platformDetails?: Maybe<Scalars['String']>;
  primaryNetworkInterface?: Maybe<Scalars['String']>;
  privateDns?: Maybe<Scalars['String']>;
  privateIps?: Maybe<Scalars['String']>;
  publicDns?: Maybe<Scalars['String']>;
  publicIpAddress?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  securityGroupIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  sourceDestCheck?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  tenancy?: Maybe<Scalars['String']>;
};

export type AwsEc2Blockdevice = {
  deviceName: Scalars['String'];
  ebs?: Maybe<BlockDeviceEbs>;
};

export type AwsEc2CloudWatchMetrics = {
  cpuUtilizationAverage?: Maybe<Scalars['Float']>;
  diskReadBytesAverage?: Maybe<Scalars['Float']>;
  diskReadOpsAverage?: Maybe<Scalars['Float']>;
  diskWriteBytesAverage?: Maybe<Scalars['Float']>;
  diskWriteOpsAverage?: Maybe<Scalars['Float']>;
  networkInAverage?: Maybe<Scalars['Float']>;
  networkOutAverage?: Maybe<Scalars['Float']>;
  networkPacketsInAverage?: Maybe<Scalars['Float']>;
  networkPacketsOutAverage?: Maybe<Scalars['Float']>;
  statusCheckFailedInstanceSum?: Maybe<Scalars['Float']>;
  statusCheckFailedSum?: Maybe<Scalars['Float']>;
  statusCheckFailedSystemSum?: Maybe<Scalars['Float']>;
};

export type AwsEc2CloudWatchMetricsTimePeriods = {
  last6Hours?: Maybe<AwsEc2CloudWatchMetrics>;
  last24Hours?: Maybe<AwsEc2CloudWatchMetrics>;
  lastMonth?: Maybe<AwsEc2CloudWatchMetrics>;
  lastWeek?: Maybe<AwsEc2CloudWatchMetrics>;
};

export type AwsEc2KeyPair = {
  fingerprint?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  type?: Maybe<Scalars['String']>;
};

export type AwsEc2MetadataOptions = {
  httpEndpoint: Scalars['String'];
  httpPutResponseHopLimit?: Maybe<Scalars['Int']>;
  httpTokens: Scalars['String'];
  state: Scalars['String'];
};

export type AwsEcr = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  encryptionConfig?: Maybe<AwsEcrEncryptionConfiguration>;
  id: Scalars['String'];
  imageScanOnPush?: Maybe<Scalars['Boolean']>;
  imageTagMutability?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  registryAccountId?: Maybe<Scalars['String']>;
  repositoryUri?: Maybe<Scalars['String']>;
  scanOnPush?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsEcrEncryptionConfiguration = {
  kmsKey?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsAttachment = {
  details?: Maybe<Array<Maybe<AwsEcsAttachmentDetail>>>;
  id: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsAttachmentDetail = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsAttribute = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  targetType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsAwsVpcConfiguration = {
  assignPublicIp?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  subnets?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsEcsCapacityProviderStrategyItem = {
  base?: Maybe<Scalars['Int']>;
  capacityProvider?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
};

export type AwsEcsCluster = {
  accountId: Scalars['String'];
  activeServicesCount?: Maybe<Scalars['Int']>;
  arn: Scalars['String'];
  attachments?: Maybe<Array<Maybe<AwsEcsAttachment>>>;
  attachmentsStatus?: Maybe<Scalars['String']>;
  capacityProviders?: Maybe<Array<Maybe<Scalars['String']>>>;
  clusterName?: Maybe<Scalars['String']>;
  configuration?: Maybe<AwsEcsClusterConfiguration>;
  defaultCapacityProviderStrategy?: Maybe<Array<Maybe<AwsEcsCapacityProviderStrategyItem>>>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  ecsTask?: Maybe<Array<Maybe<AwsEcsTask>>>;
  ecsTaskSet?: Maybe<Array<Maybe<AwsEcsTaskSet>>>;
  id: Scalars['String'];
  pendingTasksCount?: Maybe<Scalars['Int']>;
  registeredContainerInstancesCount?: Maybe<Scalars['Int']>;
  runningTasksCount?: Maybe<Scalars['Int']>;
  settings?: Maybe<Array<Maybe<AwsEcsClusterSettings>>>;
  statistics?: Maybe<Array<Maybe<AwsEcsStatistics>>>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsEcsClusterConfiguration = {
  executeCommandConfiguration?: Maybe<AwsEcsExecuteCommandConfiguration>;
  id: Scalars['String'];
};

export type AwsEcsClusterSettings = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsContainer = {
  accountId: Scalars['String'];
  agentConnected?: Maybe<Scalars['Boolean']>;
  agentUpdateStatus?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  attachments?: Maybe<Array<Maybe<AwsEcsAttachment>>>;
  attributes?: Maybe<Array<Maybe<AwsEcsAttribute>>>;
  capacityProviderName?: Maybe<Scalars['String']>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  ec2InstanceId?: Maybe<Scalars['String']>;
  ecsTask?: Maybe<Array<Maybe<AwsEcsTask>>>;
  id: Scalars['String'];
  pendingTasksCount?: Maybe<Scalars['Int']>;
  registeredAt?: Maybe<Scalars['String']>;
  registeredResources?: Maybe<Array<Maybe<AwsEcsResource>>>;
  remainingResources?: Maybe<Array<Maybe<AwsEcsResource>>>;
  runningTasksCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  statusReason?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  version?: Maybe<Scalars['Int']>;
  versionInfo?: Maybe<AwsEcsversionInfo>;
};

export type AwsEcsContainerDefinition = {
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  cpu?: Maybe<Scalars['Int']>;
  dependsOn?: Maybe<Array<Maybe<AwsEcsContainerDependency>>>;
  disableNetworking?: Maybe<Scalars['Boolean']>;
  dnsSearchDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  dnsServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  dockerLabels?: Maybe<Array<Maybe<AwsEcsDockerLabel>>>;
  dockerSecurityOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  entryPoint?: Maybe<Array<Maybe<Scalars['String']>>>;
  environment?: Maybe<Array<Maybe<AwsEcsEnvironmentVariables>>>;
  environmentFiles?: Maybe<Array<Maybe<AwsEcsEnvironmentFile>>>;
  essential?: Maybe<Scalars['Boolean']>;
  extraHosts?: Maybe<Array<Maybe<AwsEcsHostEntry>>>;
  firelensConfiguration?: Maybe<AwsEcsFirelensConfiguration>;
  healthCheck?: Maybe<AwsEcsHealthCheck>;
  hostname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  interactive?: Maybe<Scalars['Boolean']>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  linuxParameters?: Maybe<AwsEcsLinuxParameters>;
  logConfiguration?: Maybe<AwsEcsLogConfiguration>;
  memory?: Maybe<Scalars['Int']>;
  memoryReservation?: Maybe<Scalars['Int']>;
  mountPoints?: Maybe<Array<Maybe<AwsEcsMountPoint>>>;
  name?: Maybe<Scalars['String']>;
  portMappings?: Maybe<Array<Maybe<AwsEcsPortMapping>>>;
  privileged?: Maybe<Scalars['Boolean']>;
  pseudoTerminal?: Maybe<Scalars['Boolean']>;
  readonlyRootFilesystem?: Maybe<Scalars['Boolean']>;
  repositoryCredentials?: Maybe<AwsEcsRepositoryCredentials>;
  resourceRequirements?: Maybe<Array<Maybe<AwsEcsResourceRequirement>>>;
  secrets?: Maybe<Array<Maybe<AwsEcsSecret>>>;
  startTimeout?: Maybe<Scalars['Int']>;
  stopTimeout?: Maybe<Scalars['Int']>;
  systemControls?: Maybe<Array<Maybe<AwsEcsSystemControl>>>;
  ulimits?: Maybe<Array<Maybe<AwsEcsUlimit>>>;
  user?: Maybe<Scalars['String']>;
  volumesFrom?: Maybe<Array<Maybe<AwsEcsVolumeFrom>>>;
  workingDirectory?: Maybe<Scalars['String']>;
};

export type AwsEcsContainerDependency = {
  condition?: Maybe<Scalars['String']>;
  containerName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AwsEcsContainerOverride = {
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  cpu?: Maybe<Scalars['String']>;
  environment?: Maybe<Array<Maybe<AwsEcsEnvironmentVariables>>>;
  environmentFiles?: Maybe<Array<Maybe<AwsEcsEnvironmentFile>>>;
  id: Scalars['String'];
  memory?: Maybe<Scalars['Int']>;
  memoryReservation?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  resourceRequirements?: Maybe<Array<Maybe<AwsEcsResourceRequirement>>>;
};

export type AwsEcsDeployment = {
  capacityProviderStrategy?: Maybe<Array<Maybe<AwsEcsCapacityProviderStrategyItem>>>;
  createdAt?: Maybe<Scalars['String']>;
  desiredCount?: Maybe<Scalars['Int']>;
  failedTasks?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  launchType?: Maybe<Scalars['String']>;
  networkConfiguration?: Maybe<AwsEcsNetworkConfiguration>;
  pendingCount?: Maybe<Scalars['Int']>;
  platformVersion?: Maybe<Scalars['String']>;
  rolloutState?: Maybe<Scalars['String']>;
  rolloutStateReason?: Maybe<Scalars['String']>;
  runningCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  taskDefinition?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type AwsEcsDeploymentCircuitBreaker = {
  enable?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  rollback?: Maybe<Scalars['Boolean']>;
};

export type AwsEcsDeploymentConfiguration = {
  deploymentCircuitBreaker?: Maybe<AwsEcsDeploymentCircuitBreaker>;
  id: Scalars['String'];
  maximumPercent?: Maybe<Scalars['Int']>;
  minimumHealthyPercent?: Maybe<Scalars['Int']>;
};

export type AwsEcsDeploymentController = {
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsDevice = {
  containerPath?: Maybe<Scalars['String']>;
  hostPath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsEcsDockerLabel = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsDockerVolumeConfiguration = {
  autoprovision?: Maybe<Scalars['Boolean']>;
  driver?: Maybe<Scalars['String']>;
  driverOpts?: Maybe<Array<Maybe<AwsEcsStringMap>>>;
  labels?: Maybe<Array<Maybe<AwsEcsStringMap>>>;
  scope?: Maybe<Scalars['String']>;
};

export type AwsEcsEfsVolumeConfiguration = {
  authorizationConfig?: Maybe<AwsEfsEfsAuthorizationConfig>;
  fileSystemId?: Maybe<Scalars['String']>;
  rootDirectory?: Maybe<Scalars['String']>;
  transitEncryption?: Maybe<Scalars['String']>;
  transitEncryptionPort?: Maybe<Scalars['Int']>;
};

export type AwsEcsEnvironmentFile = {
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsEnvironmentVariables = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsEphemeralStorage = {
  sizeInGiB?: Maybe<Scalars['Int']>;
};

export type AwsEcsExecuteCommandConfiguration = {
  id: Scalars['String'];
  kmsKeyId?: Maybe<Scalars['String']>;
  logConfiguration?: Maybe<AwsEcsExecuteCommandLogConfiguration>;
  logging?: Maybe<Scalars['String']>;
};

export type AwsEcsFSxWindowsFileServerAuthorizationConfig = {
  credentialsParameter?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
};

export type AwsEcsFSxWindowsFileServerVolumeConfiguration = {
  authorizationConfig?: Maybe<AwsEcsFSxWindowsFileServerAuthorizationConfig>;
  fileSystemId?: Maybe<Scalars['String']>;
  rootDirectory?: Maybe<Scalars['String']>;
};

export type AwsEcsFirelensConfiguration = {
  options?: Maybe<Array<Maybe<AwsEcsFirelensConfigurationOption>>>;
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsFirelensConfigurationOption = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsHealthCheck = {
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  interval?: Maybe<Scalars['Int']>;
  retries?: Maybe<Scalars['Int']>;
  startPeriod?: Maybe<Scalars['Int']>;
  timeout?: Maybe<Scalars['Int']>;
};

export type AwsEcsHostEntry = {
  hostname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ipAddress?: Maybe<Scalars['String']>;
};

export type AwsEcsHostVolumeProperty = {
  sourcePath?: Maybe<Scalars['String']>;
};

export type AwsEcsInferenceAccelerator = {
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AwsEcsInferenceAcceleratorOverride = {
  deviceName?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AwsEcsKernelCapabilities = {
  add?: Maybe<Array<Maybe<Scalars['String']>>>;
  drop?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsEcsLinuxParameters = {
  capabilities?: Maybe<AwsEcsKernelCapabilities>;
  devices?: Maybe<Array<Maybe<AwsEcsDevice>>>;
  initProcessEnabled?: Maybe<Scalars['Boolean']>;
  maxSwap?: Maybe<Scalars['Int']>;
  sharedMemorySize?: Maybe<Scalars['Int']>;
  swappiness?: Maybe<Scalars['Int']>;
  tmpfs?: Maybe<Array<Maybe<AwsEcsTmpfs>>>;
};

export type AwsEcsLoadBalancer = {
  containerName?: Maybe<Scalars['String']>;
  containerPort?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  loadBalancerName?: Maybe<Scalars['String']>;
  targetGroupArn?: Maybe<Scalars['String']>;
};

export type AwsEcsLogConfiguration = {
  logDriver?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<AwsEcsLogConfigurationOption>>>;
  secretOptions?: Maybe<Array<Maybe<AwsEcsSecret>>>;
};

export type AwsEcsLogConfigurationOption = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsMountPoint = {
  containerPath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  readOnly?: Maybe<Scalars['Boolean']>;
  sourceVolume?: Maybe<Scalars['String']>;
};

export type AwsEcsNetworkConfiguration = {
  awsvpcConfiguration?: Maybe<AwsEcsAwsVpcConfiguration>;
};

export type AwsEcsPlacementConstraint = {
  expression?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsPlacementStrategy = {
  field?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsPortMapping = {
  containerPort?: Maybe<Scalars['Int']>;
  hostPort?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  protocol?: Maybe<Scalars['String']>;
};

export type AwsEcsProxyConfiguration = {
  containerName?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<AwsEcsProxyConfigurationProperty>>>;
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsProxyConfigurationProperty = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsRepositoryCredentials = {
  credentialsParameter?: Maybe<Scalars['String']>;
};

export type AwsEcsResource = {
  doubleValue?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  integerValue?: Maybe<Scalars['Int']>;
  longValue?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  stringSetValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsResourceRequirement = {
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsScale = {
  unit?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

export type AwsEcsSecret = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  valueFrom?: Maybe<Scalars['String']>;
};

export type AwsEcsService = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  capacityProviderStrategy?: Maybe<Array<Maybe<AwsEcsCapacityProviderStrategyItem>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  deploymentConfiguration?: Maybe<AwsEcsDeploymentConfiguration>;
  deploymentController?: Maybe<AwsEcsDeploymentController>;
  deployments?: Maybe<Array<Maybe<AwsEcsDeployment>>>;
  desiredCount?: Maybe<Scalars['Int']>;
  ecsCluster?: Maybe<Array<Maybe<AwsEcsCluster>>>;
  ecsTaskDefinition?: Maybe<Array<Maybe<AwsEcsTaskDefinition>>>;
  ecsTaskSet?: Maybe<Array<Maybe<AwsEcsTaskSet>>>;
  elb?: Maybe<Array<Maybe<AwsElb>>>;
  enableECSManagedTags?: Maybe<Scalars['Boolean']>;
  enableExecuteCommand?: Maybe<Scalars['Boolean']>;
  events?: Maybe<Array<Maybe<AwsEcsServiceEvent>>>;
  healthCheckGracePeriodSeconds?: Maybe<Scalars['Int']>;
  iamRoles?: Maybe<Array<Maybe<AwsIamRole>>>;
  id: Scalars['String'];
  launchType?: Maybe<Scalars['String']>;
  loadBalancers?: Maybe<Array<Maybe<AwsEcsLoadBalancer>>>;
  networkConfiguration?: Maybe<AwsEcsNetworkConfiguration>;
  pendingCount?: Maybe<Scalars['Int']>;
  placementConstraints?: Maybe<Array<Maybe<AwsEcsPlacementConstraint>>>;
  placementStrategy?: Maybe<Array<Maybe<AwsEcsPlacementStrategy>>>;
  platformVersion?: Maybe<Scalars['String']>;
  propagateTags?: Maybe<Scalars['String']>;
  roleArn?: Maybe<Scalars['String']>;
  runningCount?: Maybe<Scalars['Int']>;
  schedulingStrategy?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  serviceName?: Maybe<Scalars['String']>;
  serviceRegistries?: Maybe<Array<Maybe<AwsEcsServiceRegistry>>>;
  status?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsEcsServiceEvent = {
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type AwsEcsServiceRegistry = {
  containerName?: Maybe<Scalars['String']>;
  containerPort?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  port?: Maybe<Scalars['Int']>;
  registryArn?: Maybe<Scalars['String']>;
};

export type AwsEcsStatistics = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsStringMap = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsSystemControl = {
  id: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsEcsTask = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  attachments?: Maybe<Array<Maybe<AwsEcsAttachment>>>;
  attributes?: Maybe<Array<Maybe<AwsEcsAttribute>>>;
  availabilityZone?: Maybe<Scalars['String']>;
  capacityProviderName?: Maybe<Scalars['String']>;
  clusterArn?: Maybe<Scalars['String']>;
  connectivity?: Maybe<Scalars['String']>;
  connectivityAt?: Maybe<Scalars['String']>;
  containerInstanceArn?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  desiredStatus?: Maybe<Scalars['String']>;
  ecsCluster?: Maybe<Array<Maybe<AwsEcsCluster>>>;
  ecsContainer?: Maybe<Array<Maybe<AwsEcsContainer>>>;
  ecsTaskDefinition?: Maybe<Array<Maybe<AwsEcsTaskDefinition>>>;
  enableExecuteCommand?: Maybe<Scalars['Boolean']>;
  ephemeralStorage?: Maybe<AwsEcsEphemeralStorage>;
  executionStoppedAt?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  healthStatus?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  inferenceAccelerators?: Maybe<Array<Maybe<AwsEcsInferenceAccelerator>>>;
  lastStatus?: Maybe<Scalars['String']>;
  launchType?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  overrides?: Maybe<AwsEcsTaskOverride>;
  platformVersion?: Maybe<Scalars['String']>;
  pullStartedAt?: Maybe<Scalars['String']>;
  pullStoppedAt?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
  startedBy?: Maybe<Scalars['String']>;
  stopCode?: Maybe<Scalars['String']>;
  stoppedAt?: Maybe<Scalars['String']>;
  stoppedReason?: Maybe<Scalars['String']>;
  stoppingAt?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  version?: Maybe<Scalars['Int']>;
};

export type AwsEcsTaskDefinition = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  compatibilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  containerDefinitions?: Maybe<Array<Maybe<AwsEcsContainerDefinition>>>;
  cpu?: Maybe<Scalars['String']>;
  deregisteredAt?: Maybe<Scalars['String']>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  ecsTask?: Maybe<Array<Maybe<AwsEcsTask>>>;
  ecsTaskSet?: Maybe<Array<Maybe<AwsEcsTaskSet>>>;
  ephemeralStorage?: Maybe<AwsEcsEphemeralStorage>;
  executionRoleArn?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  inferenceAccelerators?: Maybe<Array<Maybe<AwsEcsInferenceAccelerator>>>;
  ipcMode?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  networkMode?: Maybe<Scalars['String']>;
  pidMode?: Maybe<Scalars['String']>;
  placementConstraints?: Maybe<Array<Maybe<AwsEcsTaskDefinitionPlacementConstraint>>>;
  proxyConfiguration?: Maybe<AwsEcsProxyConfiguration>;
  region?: Maybe<Scalars['String']>;
  registeredAt?: Maybe<Scalars['String']>;
  registeredBy?: Maybe<Scalars['String']>;
  requiresAttributes?: Maybe<Array<Maybe<AwsEcsAttribute>>>;
  requiresCompatibilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  revision?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  taskRoleArn?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<AwsEcsVolume>>>;
};

export type AwsEcsTaskDefinitionPlacementConstraint = {
  expression?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type AwsEcsTaskOverride = {
  containerOverrides?: Maybe<Array<Maybe<AwsEcsContainerOverride>>>;
  cpu?: Maybe<Scalars['String']>;
  ephemeralStorage?: Maybe<AwsEcsEphemeralStorage>;
  executionRoleArn?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  inferenceAcceleratorOverrides?: Maybe<Array<Maybe<AwsEcsInferenceAcceleratorOverride>>>;
  memory?: Maybe<Scalars['String']>;
  taskRoleArn?: Maybe<Scalars['String']>;
};

export type AwsEcsTaskSet = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  capacityProviderStrategy?: Maybe<Array<Maybe<AwsEcsCapacityProviderStrategyItem>>>;
  computedDesiredCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  ecsCluster?: Maybe<Array<Maybe<AwsEcsCluster>>>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  ecsTaskDefinition?: Maybe<Array<Maybe<AwsEcsTaskDefinition>>>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  launchType?: Maybe<Scalars['String']>;
  loadBalancers?: Maybe<Array<Maybe<AwsEcsLoadBalancer>>>;
  networkConfiguration?: Maybe<AwsEcsNetworkConfiguration>;
  pendingCount?: Maybe<Scalars['Int']>;
  platformVersion?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  runningCount?: Maybe<Scalars['Int']>;
  scale?: Maybe<AwsEcsScale>;
  serviceRegistries?: Maybe<Array<Maybe<AwsEcsServiceRegistry>>>;
  stabilityStatus?: Maybe<Scalars['String']>;
  stabilityStatusAt?: Maybe<Scalars['String']>;
  startedBy?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type AwsEcsTmpfs = {
  containerPath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mountOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  size?: Maybe<Scalars['Int']>;
};

export type AwsEcsUlimit = {
  hardLimit?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  softLimit?: Maybe<Scalars['Int']>;
};

export type AwsEcsVolume = {
  dockerVolumeConfiguration?: Maybe<AwsEcsDockerVolumeConfiguration>;
  efsVolumeConfiguration?: Maybe<AwsEcsEfsVolumeConfiguration>;
  fsxWindowsFileServerVolumeConfiguration?: Maybe<AwsEcsFSxWindowsFileServerVolumeConfiguration>;
  host?: Maybe<AwsEcsHostVolumeProperty>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type AwsEcsVolumeFrom = {
  id: Scalars['String'];
  readOnly?: Maybe<Scalars['Boolean']>;
  sourceContainer?: Maybe<Scalars['String']>;
};

export type AwsEcsversionInfo = {
  agentHash?: Maybe<Scalars['String']>;
  agentVersion?: Maybe<Scalars['String']>;
  dockerVersion?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AwsEfs = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  availabilityZoneId?: Maybe<Scalars['String']>;
  availabilityZoneName?: Maybe<Scalars['String']>;
  creationTime?: Maybe<Scalars['String']>;
  creationToken?: Maybe<Scalars['String']>;
  efsMountTarget?: Maybe<Array<Maybe<AwsEfsMountTarget>>>;
  encrypted?: Maybe<Scalars['Boolean']>;
  fileSystemId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  lifeCycleState?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberOfMountTargets?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['String']>;
  performanceMode?: Maybe<Scalars['String']>;
  provisionedThroughputInMibps?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  sizeInBytes?: Maybe<AwsEfsFileSystemSize>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  throughputMode?: Maybe<Scalars['String']>;
};

export type AwsEfsEfsAuthorizationConfig = {
  accessPointId?: Maybe<Scalars['String']>;
  iam?: Maybe<Scalars['String']>;
};

export type AwsEfsFileSystemSize = {
  timestamp?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int64']>;
  valueInIA?: Maybe<Scalars['Int64']>;
  valueInStandard?: Maybe<Scalars['Int64']>;
};

export type AwsEfsMountTarget = {
  accountId: Scalars['String'];
  availabilityZoneId?: Maybe<Scalars['String']>;
  availabilityZoneName?: Maybe<Scalars['String']>;
  efs?: Maybe<Array<Maybe<AwsEfs>>>;
  fileSystemId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ipAddress?: Maybe<Scalars['String']>;
  lifeCycleState?: Maybe<Scalars['String']>;
  networkInterface?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  ownerId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsEip = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  customerOwnedIp?: Maybe<Scalars['String']>;
  customerOwnedIpv4Pool?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  ec2InstanceAssociationId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instanceId?: Maybe<Scalars['String']>;
  networkBorderGroup?: Maybe<Scalars['String']>;
  networkInterface?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  networkInterfaceId?: Maybe<Scalars['String']>;
  networkInterfaceOwnerId?: Maybe<Scalars['String']>;
  privateIp?: Maybe<Scalars['String']>;
  publicIp?: Maybe<Scalars['String']>;
  publicIpv4Pool?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Scalars['String']>;
  vpcs?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsEksCertificate = {
  data?: Maybe<Scalars['String']>;
};

export type AwsEksCluster = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  certificateAuthority?: Maybe<AwsEksCertificate>;
  clientRequestToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  encryptionConfig?: Maybe<Array<Maybe<AwsEksEncryptionConfig>>>;
  endpoint?: Maybe<Scalars['String']>;
  iamRoles?: Maybe<Array<Maybe<AwsIamRole>>>;
  id: Scalars['String'];
  identity?: Maybe<AwsEksIdentity>;
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  kubernetesNetworkConfig?: Maybe<AwsEksKubernetesNetworkConfigResponse>;
  logging?: Maybe<AwsEksLogging>;
  name?: Maybe<Scalars['String']>;
  platformVersion?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  resourcesVpcConfig?: Maybe<AwsEksVpcConfigResponse>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  status?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  version?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsEksEncryptionConfig = {
  id: Scalars['String'];
  provider?: Maybe<AwsEksProvider>;
  resources?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsEksIdentity = {
  oidc?: Maybe<AwsEksOidc>;
};

export type AwsEksKubernetesNetworkConfigResponse = {
  serviceIpv4Cidr?: Maybe<Scalars['String']>;
};

export type AwsEksLogSetup = {
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsEksLogging = {
  clusterLogging?: Maybe<Array<Maybe<AwsEksLogSetup>>>;
};

export type AwsEksOidc = {
  issuer?: Maybe<Scalars['String']>;
};

export type AwsEksProvider = {
  keyArn?: Maybe<Scalars['String']>;
};

export type AwsEksVpcConfigResponse = {
  clusterSecurityGroupId?: Maybe<Scalars['String']>;
  endpointPrivateAccess?: Maybe<Scalars['Boolean']>;
  endpointPublicAccess?: Maybe<Scalars['Boolean']>;
  publicAccessCidrs?: Maybe<Array<Maybe<Scalars['String']>>>;
  securityGroupIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  subnetIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  vpcId?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheCloudWatchLogsDestinationDetails = {
  logGroup?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheCluster = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  atRestEncryptionEnabled?: Maybe<Scalars['Boolean']>;
  authTokenEnabled?: Maybe<Scalars['Boolean']>;
  authTokenLastModifiedDate?: Maybe<Scalars['String']>;
  autoMinorVersionUpgrade?: Maybe<Scalars['Boolean']>;
  cacheClusterCreateTime?: Maybe<Scalars['String']>;
  cacheClusterId?: Maybe<Scalars['String']>;
  cacheClusterStatus?: Maybe<Scalars['String']>;
  cacheNodeType?: Maybe<Scalars['String']>;
  cacheNodes?: Maybe<Array<Maybe<AwsElastiCacheNode>>>;
  cacheParameterGroup?: Maybe<AwsElastiCacheParameterGroupStatus>;
  cacheSecurityGroups?: Maybe<Array<Maybe<AwsElastiCacheSecurityGroupMembership>>>;
  cacheSubnetGroup?: Maybe<AwsCacheSubnetGroup>;
  clientDownloadLandingPage?: Maybe<Scalars['String']>;
  configurationEndpoint?: Maybe<AwsElastiCacheEndpoint>;
  engine?: Maybe<Scalars['String']>;
  engineVersion?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logDeliveryConfigurations?: Maybe<Array<Maybe<AwsElastiCacheLogDeliveryConfiguration>>>;
  notificationConfiguration?: Maybe<AwsElastiCacheNotificationConfiguration>;
  numCacheNodes?: Maybe<Scalars['Int']>;
  pendingModifiedValues?: Maybe<AwsElastiCachePendingModifiedValues>;
  preferredAvailabilityZone?: Maybe<Scalars['String']>;
  preferredMaintenanceWindow?: Maybe<Scalars['String']>;
  preferredOutpostArn?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  replicationGroupId?: Maybe<Scalars['String']>;
  replicationGroupLogDeliveryEnabled?: Maybe<Scalars['Boolean']>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  snapshotRetentionLimit?: Maybe<Scalars['Int']>;
  snapshotWindow?: Maybe<Scalars['String']>;
  subnets?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transitEncryptionEnabled?: Maybe<Scalars['Boolean']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsElastiCacheDestinationDetails = {
  cloudWatchLogsDetails?: Maybe<AwsElastiCacheCloudWatchLogsDestinationDetails>;
  kinesisFirehoseDetails?: Maybe<AwsElastiCacheKinesisFirehoseDestinationDetails>;
};

export type AwsElastiCacheEndpoint = {
  address?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
};

export type AwsElastiCacheGlobalReplicationGroupInfo = {
  globalReplicationGroupId?: Maybe<Scalars['String']>;
  globalReplicationGroupMemberRole?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheKinesisFirehoseDestinationDetails = {
  deliveryStream?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheLogDeliveryConfiguration = {
  destinationDetails?: Maybe<AwsElastiCacheDestinationDetails>;
  destinationType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logFormat?: Maybe<Scalars['String']>;
  logType?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheNode = {
  cacheNodeCreateTime?: Maybe<Scalars['String']>;
  cacheNodeId?: Maybe<Scalars['String']>;
  cacheNodeStatus?: Maybe<Scalars['String']>;
  customerAvailabilityZone?: Maybe<Scalars['String']>;
  customerOutpostArn?: Maybe<Scalars['String']>;
  endpoint?: Maybe<AwsElastiCacheEndpoint>;
  id: Scalars['String'];
  parameterGroupStatus?: Maybe<Scalars['String']>;
  sourceCacheNodeId?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheNodeGroup = {
  id: Scalars['String'];
  nodeGroupId?: Maybe<Scalars['String']>;
  nodeGroupMembers?: Maybe<Array<Maybe<AwsElastiCacheNodeGroupMember>>>;
  primaryEndpoint?: Maybe<AwsElastiCacheEndpoint>;
  readerEndpoint?: Maybe<AwsElastiCacheEndpoint>;
  slots?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheNodeGroupMember = {
  cacheClusterId?: Maybe<Scalars['String']>;
  cacheNodeId?: Maybe<Scalars['String']>;
  currentRole?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  preferredAvailabilityZone?: Maybe<Scalars['String']>;
  preferredOutpostArn?: Maybe<Scalars['String']>;
  readEndpoint?: Maybe<AwsElastiCacheEndpoint>;
};

export type AwsElastiCacheNotificationConfiguration = {
  topicArn?: Maybe<Scalars['String']>;
  topicStatus?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheParameterGroupStatus = {
  cacheNodeIdsToReboot?: Maybe<Array<Maybe<Scalars['String']>>>;
  cacheParameterGroupName?: Maybe<Scalars['String']>;
  parameterApplyStatus?: Maybe<Scalars['String']>;
};

export type AwsElastiCachePendingLogDeliveryConfiguration = {
  destinationDetails?: Maybe<AwsElastiCacheDestinationDetails>;
  destinationType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logFormat?: Maybe<Scalars['String']>;
  logType?: Maybe<Scalars['String']>;
};

export type AwsElastiCachePendingModifiedValues = {
  authTokenStatus?: Maybe<Scalars['String']>;
  cacheNodeIdsToRemove?: Maybe<Array<Maybe<Scalars['String']>>>;
  cacheNodeType?: Maybe<Scalars['String']>;
  engineVersion?: Maybe<Scalars['String']>;
  logDeliveryConfigurations?: Maybe<Array<Maybe<AwsElastiCachePendingLogDeliveryConfiguration>>>;
  numCacheNodes?: Maybe<Scalars['Int']>;
};

export type AwsElastiCacheReplicationGroup = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  atRestEncryptionEnabled?: Maybe<Scalars['Boolean']>;
  authTokenEnabled?: Maybe<Scalars['Boolean']>;
  authTokenLastModifiedDate?: Maybe<Scalars['String']>;
  automaticFailover?: Maybe<Scalars['String']>;
  cacheNodeType?: Maybe<Scalars['String']>;
  clusterEnabled?: Maybe<Scalars['Boolean']>;
  configurationEndpoint?: Maybe<AwsElastiCacheEndpoint>;
  description?: Maybe<Scalars['String']>;
  globalReplicationGroupInfo?: Maybe<AwsElastiCacheGlobalReplicationGroupInfo>;
  id: Scalars['String'];
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  logDeliveryConfigurations?: Maybe<Array<Maybe<AwsElastiCacheLogDeliveryConfiguration>>>;
  memberClusters?: Maybe<Array<Maybe<Scalars['String']>>>;
  memberClustersOutpostArns?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiAZ?: Maybe<Scalars['String']>;
  nodeGroups?: Maybe<Array<Maybe<AwsElastiCacheNodeGroup>>>;
  pendingModifiedValues?: Maybe<AwsElastiCacheReplicationGroupPendingModifiedValues>;
  region?: Maybe<Scalars['String']>;
  replicationGroupCreateTime?: Maybe<Scalars['String']>;
  replicationGroupId?: Maybe<Scalars['String']>;
  snapshotRetentionLimit?: Maybe<Scalars['Int']>;
  snapshotWindow?: Maybe<Scalars['String']>;
  snapshottingClusterId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transitEncryptionEnabled?: Maybe<Scalars['Boolean']>;
  userGroupIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsElastiCacheReplicationGroupPendingModifiedValues = {
  authTokenStatus?: Maybe<Scalars['String']>;
  automaticFailoverStatus?: Maybe<Scalars['String']>;
  logDeliveryConfigurations?: Maybe<Array<Maybe<AwsElastiCachePendingLogDeliveryConfiguration>>>;
  primaryClusterId?: Maybe<Scalars['String']>;
  resharding?: Maybe<AwsElastiCacheReshardingStatus>;
  userGroups?: Maybe<AwsElastiCacheUserGroupsUpdateStatus>;
};

export type AwsElastiCacheReshardingStatus = {
  slotMigration?: Maybe<AwsElastiCacheSlotMigration>;
};

export type AwsElastiCacheSecurityGroupMembership = {
  id: Scalars['String'];
  securityGroupId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsElastiCacheSlotMigration = {
  progressPercentage?: Maybe<Scalars['Float']>;
};

export type AwsElastiCacheUserGroupsUpdateStatus = {
  userGroupIdsToAdd?: Maybe<Array<Maybe<Scalars['String']>>>;
  userGroupIdsToRemove?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsElasticBeanstalkApp = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  elasticBeanstalkEnv?: Maybe<Array<Maybe<AwsElasticBeanstalkEnv>>>;
  id: Scalars['String'];
  name: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsElasticBeanstalkEnv = {
  accountId: Scalars['String'];
  applicationName?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  cname?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  elasticBeanstalkApp?: Maybe<Array<Maybe<AwsElasticBeanstalkApp>>>;
  endpointUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  platformArn?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  resources?: Maybe<Array<Maybe<AwsElasticBeanstalkEnvResource>>>;
  settings?: Maybe<Array<Maybe<AwsElasticBeanstalkEnvSetting>>>;
  solutionStackName?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  tier?: Maybe<Scalars['String']>;
  versionLabel?: Maybe<Scalars['String']>;
};

export type AwsElasticBeanstalkEnvResource = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsElasticBeanstalkEnvSetting = {
  id: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  optionName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsElb = {
  accessLogs?: Maybe<Scalars['String']>;
  accountId: Scalars['String'];
  arn: Scalars['String'];
  cloudfrontDistribution?: Maybe<Array<Maybe<AwsCloudfront>>>;
  createdAt?: Maybe<Scalars['String']>;
  crossZoneLoadBalancing?: Maybe<Scalars['String']>;
  dnsName?: Maybe<Scalars['String']>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  healthCheck?: Maybe<AwsElbHealthCheck>;
  hostedZone?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  idleTimeout?: Maybe<Scalars['String']>;
  instances?: Maybe<AwsElbInstances>;
  listeners?: Maybe<Array<Maybe<AwsElbListener>>>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  route53Record?: Maybe<Array<Maybe<AwsRoute53Record>>>;
  scheme?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  securityGroupsIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceSecurityGroup?: Maybe<AwsElbSourceSecurityGroup>;
  status?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  subnets?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  type?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
  vpcId?: Maybe<Scalars['String']>;
};

export type AwsElbHealthCheck = {
  healthyThreshold?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['String']>;
  target: Scalars['String'];
  timeout?: Maybe<Scalars['String']>;
  unhealthyThreshold?: Maybe<Scalars['Int']>;
};

export type AwsElbInstances = {
  connectionDraining?: Maybe<Scalars['String']>;
  connectionDrainingTimeout?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type AwsElbListener = {
  id: Scalars['String'];
  instancePort?: Maybe<Scalars['Int']>;
  instanceProtocol?: Maybe<Scalars['String']>;
  loadBalancerPort?: Maybe<Scalars['Int']>;
  loadBalancerProtocol?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AwsElbSourceSecurityGroup = {
  groupName: Scalars['String'];
  ownerAlias?: Maybe<Scalars['String']>;
};

export type AwsEmrCluster = {
  accountId: Scalars['String'];
  applications?: Maybe<Array<Maybe<AwsEmrClusterApplication>>>;
  arn: Scalars['String'];
  autoScalingRole?: Maybe<Scalars['String']>;
  autoTerminate?: Maybe<Scalars['Boolean']>;
  configurations?: Maybe<Array<Maybe<AwsEmrClusterConfiguration>>>;
  customAmiId?: Maybe<Scalars['String']>;
  ebsRootVolumeSize?: Maybe<Scalars['Int']>;
  ec2InstanceAttributes?: Maybe<AwsEmrClusterEc2InstanceAttributes>;
  id: Scalars['String'];
  instanceCollectionType?: Maybe<Scalars['String']>;
  kerberosAttributes?: Maybe<AwsEmrClusterKerberosAttributes>;
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  logEncryptionKmsKeyId?: Maybe<Scalars['String']>;
  logUri?: Maybe<Scalars['String']>;
  masterPublicDnsName?: Maybe<Scalars['String']>;
  normalizedInstanceHours?: Maybe<Scalars['Int']>;
  outpostArn?: Maybe<Scalars['String']>;
  placementGroups?: Maybe<Array<Maybe<AwsEmrClusterPlacementGroupConfig>>>;
  region: Scalars['String'];
  releaseLabel?: Maybe<Scalars['String']>;
  repoUpgradeOnBoot?: Maybe<Scalars['String']>;
  requestedAmiVersion?: Maybe<Scalars['String']>;
  runningAmiVersion?: Maybe<Scalars['String']>;
  scaleDownBehavior?: Maybe<Scalars['String']>;
  securityConfiguration?: Maybe<Scalars['String']>;
  serviceRole?: Maybe<Scalars['String']>;
  status?: Maybe<AwsEmrClusterStatus>;
  stepConcurrencyLevel?: Maybe<Scalars['Int']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  terminationProtected?: Maybe<Scalars['Boolean']>;
  visibleToAllUsers?: Maybe<Scalars['Boolean']>;
};

export type AwsEmrFailureDetails = {
  logFile?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
};

export type AwsEmrHadoopStepConfig = {
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  jar?: Maybe<Scalars['String']>;
  mainClass?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<AwsStringMap>>>;
};

export type AwsEmrInstance = {
  accountId: Scalars['String'];
  ebs?: Maybe<Array<Maybe<AwsEbs>>>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  ec2InstanceId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instanceFleetId?: Maybe<Scalars['String']>;
  instanceGroupId?: Maybe<Scalars['String']>;
  instanceType?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  privateDnsName?: Maybe<Scalars['String']>;
  privateIpAddress?: Maybe<Scalars['String']>;
  publicDnsName?: Maybe<Scalars['String']>;
  publicIpAddress?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  status?: Maybe<AwsEmrInstanceStatus>;
};

export type AwsEmrInstanceStateChangeReason = {
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type AwsEmrInstanceStatus = {
  state?: Maybe<Scalars['String']>;
  stateChangeReason?: Maybe<AwsEmrInstanceStateChangeReason>;
  timeline?: Maybe<AwsEmrInstanceTimeline>;
};

export type AwsEmrInstanceTimeline = {
  creationDateTime?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['String']>;
  readyDateTime?: Maybe<Scalars['String']>;
};

export type AwsEmrStep = {
  accountId: Scalars['String'];
  actionOnFailure?: Maybe<Scalars['String']>;
  config?: Maybe<AwsEmrHadoopStepConfig>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  region: Scalars['String'];
  status?: Maybe<AwsEmrStepStatus>;
};

export type AwsEmrStepStateChangeReason = {
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type AwsEmrStepStatus = {
  failureDetails?: Maybe<AwsEmrFailureDetails>;
  state?: Maybe<Scalars['String']>;
  stateChangeReason?: Maybe<AwsEmrStepStateChangeReason>;
  timeline?: Maybe<AwsEmrStepTimeline>;
};

export type AwsEmrStepTimeline = {
  creationDateTime?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['String']>;
};

export type AwsEnabledMetrics = {
  granularity?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  metric: Scalars['String'];
};

export type AwsFederatedAuthentication = {
  samlProviderArn?: Maybe<Scalars['String']>;
  selfServiceSamlProviderArn?: Maybe<Scalars['String']>;
};

export type AwsFlowLog = {
  accountId: Scalars['String'];
  creationTime?: Maybe<Scalars['String']>;
  deliverLogsErrorMessage?: Maybe<Scalars['String']>;
  deliverLogsPermissionArn?: Maybe<Scalars['String']>;
  deliverLogsStatus?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  destinationType?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  iamRole?: Maybe<Array<Maybe<AwsIamRole>>>;
  id: Scalars['String'];
  logStatus?: Maybe<Scalars['String']>;
  maxAggregationInterval?: Maybe<Scalars['Int']>;
  networkInterface?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  region: Scalars['String'];
  resourceId?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  trafficType?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsIamAccessKey = {
  accessKeyId: Scalars['String'];
  createDate?: Maybe<Scalars['String']>;
  lastRotated?: Maybe<Scalars['String']>;
  lastUsedDate?: Maybe<Scalars['String']>;
  lastUsedRegion?: Maybe<Scalars['String']>;
  lastUsedService?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsIamGroup = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  iamAttachedPolicies?: Maybe<Array<Maybe<AwsIamPolicy>>>;
  iamUsers?: Maybe<Array<Maybe<AwsIamUser>>>;
  id: Scalars['String'];
  inlinePolicies?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type AwsIamJsonPolicy = {
  id: Scalars['String'];
  statement?: Maybe<Array<Maybe<AwsIamJsonPolicyStatement>>>;
  version?: Maybe<Scalars['String']>;
};

export type AwsIamJsonPolicyCondition = {
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsIamJsonPolicyStatement = {
  action?: Maybe<Array<Maybe<Scalars['String']>>>;
  condition?: Maybe<Array<Maybe<AwsIamJsonPolicyCondition>>>;
  effect?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  principle?: Maybe<Scalars['String']>;
  resource?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsIamMfaDevice = {
  enableDate?: Maybe<Scalars['String']>;
  serialNumber: Scalars['String'];
};

export type AwsIamOpenIdConnectProvider = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  id: Scalars['String'];
};

export type AwsIamPasswordPolicy = {
  accountId: Scalars['String'];
  allowUsersToChangePassword?: Maybe<Scalars['Boolean']>;
  expirePasswords?: Maybe<Scalars['Boolean']>;
  hardExpiry?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  maxPasswordAge?: Maybe<Scalars['Int']>;
  minimumPasswordLength?: Maybe<Scalars['Int']>;
  passwordReusePrevention?: Maybe<Scalars['Int']>;
  requireLowercaseCharacters?: Maybe<Scalars['Boolean']>;
  requireNumbers?: Maybe<Scalars['Boolean']>;
  requireSymbols?: Maybe<Scalars['Boolean']>;
  requireUppercaseCharacters?: Maybe<Scalars['Boolean']>;
};

export type AwsIamPolicy = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  iamGroups?: Maybe<Array<Maybe<AwsIamGroup>>>;
  iamRoles?: Maybe<Array<Maybe<AwsIamRole>>>;
  iamUsers?: Maybe<Array<Maybe<AwsIamUser>>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  policyContent?: Maybe<AwsIamJsonPolicy>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsIamRole = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  assumeRolePolicy?: Maybe<AwsIamJsonPolicy>;
  cloudFormationStack?: Maybe<Array<Maybe<AwsCloudFormationStack>>>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  eksCluster?: Maybe<Array<Maybe<AwsEksCluster>>>;
  flowLogs?: Maybe<Array<Maybe<AwsFlowLog>>>;
  iamAttachedPolicies?: Maybe<Array<Maybe<AwsIamPolicy>>>;
  id: Scalars['String'];
  inlinePolicies?: Maybe<Array<Maybe<Scalars['String']>>>;
  maxSessionDuration?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsIamSamlProvider = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  createdDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  validUntil?: Maybe<Scalars['String']>;
};

export type AwsIamServerCertificate = {
  accountId?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  certificateId?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  uploadDate?: Maybe<Scalars['String']>;
};

export type AwsIamUser = {
  accessKeyData?: Maybe<Array<Maybe<AwsIamAccessKey>>>;
  accessKeysActive?: Maybe<Scalars['Boolean']>;
  accountId: Scalars['String'];
  arn: Scalars['String'];
  creationTime?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  iamAttachedPolicies?: Maybe<Array<Maybe<AwsIamPolicy>>>;
  iamGroups?: Maybe<Array<Maybe<AwsIamGroup>>>;
  id: Scalars['String'];
  inlinePolicies?: Maybe<Array<Maybe<Scalars['String']>>>;
  mfaActive?: Maybe<Scalars['Boolean']>;
  mfaDevices?: Maybe<Array<Maybe<AwsIamMfaDevice>>>;
  name?: Maybe<Scalars['String']>;
  passwordEnabled?: Maybe<Scalars['Boolean']>;
  passwordLastChanged?: Maybe<Scalars['String']>;
  passwordLastUsed?: Maybe<Scalars['String']>;
  passwordNextRotation?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsIgw = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  attachments?: Maybe<Array<Maybe<AwsIgwAttachment>>>;
  id: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsIgwAttachment = {
  state?: Maybe<Scalars['String']>;
  vpcId: Scalars['String'];
};

export type AwsIotAttribute = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsIotThingAttribute = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  attributes?: Maybe<Array<Maybe<AwsIotAttribute>>>;
  id: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  thingName?: Maybe<Scalars['String']>;
  thingTypeName?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type AwsKinesisFirehose = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  createTimestamp?: Maybe<Scalars['String']>;
  deliveryStreamStatus: Scalars['String'];
  deliveryStreamType: Scalars['String'];
  encryptionConfig?: Maybe<AwsKinesisFirehoseEncryptionConfig>;
  failureDescriptionDetails: Scalars['String'];
  failureDescriptionType: Scalars['String'];
  id: Scalars['String'];
  kinesisStream?: Maybe<Array<Maybe<AwsKinesisStream>>>;
  lastUpdateTimestamp?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  s3?: Maybe<Array<Maybe<AwsS3>>>;
  source?: Maybe<AwsKinesisFirehoseSource>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  versionId: Scalars['String'];
};

export type AwsKinesisFirehoseEncryptionConfig = {
  failureDescriptionDetails?: Maybe<Scalars['String']>;
  failureDescriptionType?: Maybe<Scalars['String']>;
  keyARN?: Maybe<Scalars['String']>;
  keyType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsKinesisFirehoseSource = {
  deliveryStartTimestamp?: Maybe<Scalars['String']>;
  kinesisStreamARN?: Maybe<Scalars['String']>;
  roleARN?: Maybe<Scalars['String']>;
};

export type AwsKinesisStream = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  encryptionType?: Maybe<Scalars['String']>;
  enhancedMonitoring: Array<AwsShardLevelMetrics>;
  id: Scalars['String'];
  keyId?: Maybe<Scalars['String']>;
  kinesisFirehose?: Maybe<Array<Maybe<AwsKinesisFirehose>>>;
  region: Scalars['String'];
  retentionPeriodHours: Scalars['Int'];
  shards: Array<Maybe<AwsShards>>;
  streamName: Scalars['String'];
  streamStatus: Scalars['String'];
};

export type AwsKms = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  cloudtrail?: Maybe<Array<Maybe<AwsCloudtrail>>>;
  cloudwatchLog?: Maybe<Array<Maybe<AwsCloudwatchLog>>>;
  creationDate?: Maybe<Scalars['String']>;
  customerMasterKeySpec?: Maybe<Scalars['String']>;
  deletionDate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  efs?: Maybe<Array<Maybe<AwsEfs>>>;
  eksCluster?: Maybe<Array<Maybe<AwsEksCluster>>>;
  elastiCacheReplicationGroup?: Maybe<Array<Maybe<AwsElastiCacheReplicationGroup>>>;
  emrCluster?: Maybe<Array<Maybe<AwsEmrCluster>>>;
  enabled?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  keyManager?: Maybe<Scalars['String']>;
  keyRotationEnabled?: Maybe<Scalars['String']>;
  keyState?: Maybe<Scalars['String']>;
  lambda?: Maybe<Array<Maybe<AwsLambda>>>;
  origin?: Maybe<Scalars['String']>;
  policy?: Maybe<AwsIamJsonPolicy>;
  redshiftCluster?: Maybe<Array<Maybe<AwsRedshiftCluster>>>;
  region?: Maybe<Scalars['String']>;
  sns?: Maybe<Array<Maybe<AwsSns>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  usage?: Maybe<Scalars['String']>;
  validTo?: Maybe<Scalars['String']>;
};

export type AwsLambda = {
  accountId: Scalars['String'];
  appSync?: Maybe<Array<Maybe<AwsAppSync>>>;
  arn: Scalars['String'];
  cognitoUserPool?: Maybe<Array<Maybe<AwsCognitoUserPool>>>;
  description?: Maybe<Scalars['String']>;
  environmentVariables?: Maybe<Array<Maybe<AwsLambdaEnvironmentVariable>>>;
  handler?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  kmsKeyArn?: Maybe<Scalars['String']>;
  lastModified?: Maybe<Scalars['String']>;
  memorySize?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  reservedConcurrentExecutions?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  sourceCodeSize?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  timeout?: Maybe<Scalars['Int']>;
  tracingConfig?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsLambdaEnvironmentVariable = {
  id: Scalars['String'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type AwsLaunchConfiguration = {
  associatePublicIpAddress?: Maybe<Scalars['String']>;
  blockDeviceMappings?: Maybe<Array<Maybe<AwsLcBlockDeviceMapping>>>;
  classicLinkVPCId?: Maybe<Scalars['String']>;
  classicLinkVPCSecurityGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  ebsOptimized?: Maybe<Scalars['String']>;
  iamInstanceProfile?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  instanceMonitoring?: Maybe<Scalars['String']>;
  instanceType?: Maybe<Scalars['String']>;
  kernelId?: Maybe<Scalars['String']>;
  keyName?: Maybe<Scalars['String']>;
  launchConfigurationARN?: Maybe<Scalars['String']>;
  launchConfigurationName?: Maybe<Scalars['String']>;
  metadataOptHttpEndpoint?: Maybe<Scalars['String']>;
  metadataOptHttpPutResponseHopLimit?: Maybe<Scalars['Int']>;
  metadataOptHttpTokens?: Maybe<Scalars['String']>;
  placementTenancy?: Maybe<Scalars['String']>;
  ramdiskId?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  spotPrice?: Maybe<Scalars['String']>;
  userData?: Maybe<Scalars['String']>;
};

export type AwsLaunchTemplateOverrides = {
  id: Scalars['String'];
  instanceType?: Maybe<Scalars['String']>;
  launchTemplateId?: Maybe<Scalars['String']>;
  launchTemplateName?: Maybe<Scalars['String']>;
  launchTemplateVersion?: Maybe<Scalars['String']>;
  weightedCapacity?: Maybe<Scalars['String']>;
};

export type AwsLcBlockDeviceMapping = {
  deviceName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  noDevice?: Maybe<Scalars['String']>;
  virtualName?: Maybe<Scalars['String']>;
};

export type AwsMetricFilter = {
  creationTime?: Maybe<Scalars['String']>;
  filterName?: Maybe<Scalars['String']>;
  filterPattern?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logGroupName?: Maybe<Scalars['String']>;
  metricTransformations?: Maybe<Array<Maybe<AwsMetricTransformation>>>;
};

export type AwsMetricTransformation = {
  defaultValue?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  metricName?: Maybe<Scalars['String']>;
  metricNamespace?: Maybe<Scalars['String']>;
  metricValue?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type AwsMixedInstancesPolicy = {
  instDistrOnDemandAllocationStrategy?: Maybe<Scalars['String']>;
  instDistrOnDemandBaseCapacity?: Maybe<Scalars['Int']>;
  instDistrOnDemandPercentageAboveBaseCapacity?: Maybe<Scalars['Int']>;
  instDistrSpotAllocationStrategy?: Maybe<Scalars['String']>;
  instDistrSpotInstancePools?: Maybe<Scalars['Int']>;
  instDistrSpotMaxPrice?: Maybe<Scalars['String']>;
  launchTemplateId?: Maybe<Scalars['String']>;
  launchTemplateName?: Maybe<Scalars['String']>;
  launchTemplateOverrides?: Maybe<Array<Maybe<AwsLaunchTemplateOverrides>>>;
  launchTemplateVersion?: Maybe<Scalars['String']>;
};

export type AwsNatGateway = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  createTime?: Maybe<Scalars['String']>;
  dailyCost?: Maybe<AwsTotalBillingInfo>;
  id: Scalars['String'];
  networkInterface?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsNetworkAcl = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  associatedSubnets?: Maybe<Array<Maybe<AwsNetworkAclAssociatedSubnet>>>;
  default?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  inboundRules?: Maybe<Array<Maybe<AwsNetworkAclRule>>>;
  outboundRules?: Maybe<Array<Maybe<AwsNetworkAclRule>>>;
  region: Scalars['String'];
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
  vpcId: Scalars['String'];
};

export type AwsNetworkAclAssociatedSubnet = {
  id: Scalars['String'];
  networkAclAssociationId?: Maybe<Scalars['String']>;
  subnetId?: Maybe<Scalars['String']>;
};

export type AwsNetworkAclRule = {
  allowOrDeny?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  fromPort?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  portRange?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  ruleNumber?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  toPort?: Maybe<Scalars['Int']>;
};

export type AwsNetworkInterface = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  attachment?: Maybe<AwsNetworkInterfaceAttachment>;
  availabilityZone?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  efsMountTarget?: Maybe<Array<Maybe<AwsEfsMountTarget>>>;
  eip?: Maybe<Array<Maybe<AwsEip>>>;
  flowLogs?: Maybe<Array<Maybe<AwsFlowLog>>>;
  id: Scalars['String'];
  interfaceType?: Maybe<Scalars['String']>;
  macAddress?: Maybe<Scalars['String']>;
  natGateway?: Maybe<Array<Maybe<AwsNatGateway>>>;
  privateDnsName?: Maybe<Scalars['String']>;
  privateIps?: Maybe<Array<Maybe<Scalars['String']>>>;
  region?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  subnetId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
  vpcId?: Maybe<Scalars['String']>;
};

export type AwsNetworkInterfaceAttachment = {
  attachmentId?: Maybe<Scalars['String']>;
  deleteOnTermination?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
};

export type AwsOrganization = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  availablePolicyTypes?: Maybe<Array<Maybe<AwsPolicyTypes>>>;
  featureSet?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  masterAccountArn?: Maybe<Scalars['String']>;
  masterAccountEmail?: Maybe<Scalars['String']>;
  masterAccountId?: Maybe<Scalars['String']>;
};

export type AwsPolicyTypes = {
  id: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AwsRawTag = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AwsRdsCluster = {
  accountId: Scalars['String'];
  allocatedStorage?: Maybe<Scalars['Int']>;
  appSync?: Maybe<Array<Maybe<AwsAppSync>>>;
  arn: Scalars['String'];
  backupRetentionPeriod?: Maybe<Scalars['Int']>;
  capacity?: Maybe<Scalars['Int']>;
  characterSetName?: Maybe<Scalars['String']>;
  cloneGroupId?: Maybe<Scalars['String']>;
  copyTagsToSnapshot?: Maybe<Scalars['Boolean']>;
  createdTime?: Maybe<Scalars['String']>;
  crossAccountClone?: Maybe<Scalars['Boolean']>;
  databaseName?: Maybe<Scalars['String']>;
  dbClusterIdentifier?: Maybe<Scalars['String']>;
  deletionProtection?: Maybe<Scalars['Boolean']>;
  encrypted?: Maybe<Scalars['Boolean']>;
  engine?: Maybe<Scalars['String']>;
  engineMode?: Maybe<Scalars['String']>;
  engineVersion?: Maybe<Scalars['String']>;
  globalWriteForwardingRequested?: Maybe<Scalars['Boolean']>;
  hostedZoneId?: Maybe<Scalars['String']>;
  httpEndpointEnabled?: Maybe<Scalars['Boolean']>;
  iamDbAuthenticationEnabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  instances?: Maybe<Array<Maybe<AwsRdsDbInstance>>>;
  kmsKey?: Maybe<Scalars['String']>;
  multiAZ?: Maybe<Scalars['Boolean']>;
  percentProgress?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  readerEndpoint?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  replicationSourceIdentifier?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  status?: Maybe<Scalars['String']>;
  subnets?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  username?: Maybe<Scalars['String']>;
};

export type AwsRdsDbInstance = {
  accountId: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  allocatedStorage?: Maybe<Scalars['Int']>;
  arn: Scalars['String'];
  autoMinorVersionUpgrade?: Maybe<Scalars['Boolean']>;
  availabilityZone?: Maybe<Scalars['String']>;
  certificateAuthority?: Maybe<Scalars['String']>;
  cluster?: Maybe<Array<Maybe<AwsRdsCluster>>>;
  copyTagsToSnapshot?: Maybe<Scalars['Boolean']>;
  createdTime?: Maybe<Scalars['String']>;
  dBInstanceIdentifier?: Maybe<Scalars['String']>;
  deletionProtection?: Maybe<Scalars['Boolean']>;
  encrypted?: Maybe<Scalars['Boolean']>;
  engine?: Maybe<Scalars['String']>;
  engineVersion?: Maybe<Scalars['String']>;
  failoverPriority?: Maybe<Scalars['Int']>;
  hostedZoneId?: Maybe<Scalars['String']>;
  iamDbAuthenticationEnabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  instanceClass?: Maybe<Scalars['String']>;
  kmsKey?: Maybe<Scalars['String']>;
  licenseModel?: Maybe<Scalars['String']>;
  multiAZ?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  optionsGroups?: Maybe<Scalars['String']>;
  parameterGroup?: Maybe<Scalars['String']>;
  performanceInsightsEnabled?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  publiclyAccessible?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  status?: Maybe<Scalars['String']>;
  storageType?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  subnetGroup?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  username?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsRedshiftCluster = {
  accountId: Scalars['String'];
  allowVersionUpgrade?: Maybe<Scalars['Boolean']>;
  arn: Scalars['String'];
  automatedSnapshotRetentionPeriod?: Maybe<Scalars['Int']>;
  availabilityZone?: Maybe<Scalars['String']>;
  clusterAvailabilityStatus?: Maybe<Scalars['String']>;
  clusterCreateTime?: Maybe<Scalars['String']>;
  clusterRevisionNumber?: Maybe<Scalars['String']>;
  clusterStatus?: Maybe<Scalars['String']>;
  clusterSubnetGroupName?: Maybe<Scalars['String']>;
  clusterVersion?: Maybe<Scalars['String']>;
  dBName?: Maybe<Scalars['String']>;
  encrypted?: Maybe<Scalars['Boolean']>;
  enhancedVpcRouting?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  manualSnapshotRetentionPeriod?: Maybe<Scalars['Int']>;
  masterUsername?: Maybe<Scalars['String']>;
  modifyStatus?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  numberOfNodes?: Maybe<Scalars['Int']>;
  preferredMaintenanceWindow?: Maybe<Scalars['String']>;
  publiclyAccessible?: Maybe<Scalars['Boolean']>;
  region: Scalars['String'];
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsRollbackConfigurationRollbackTrigger = {
  arn?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type AwsRoute = {
  destination?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  target: Scalars['String'];
};

export type AwsRoute53Alias = {
  evaluateTargetHealth?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  zoneId: Scalars['String'];
};

export type AwsRoute53HostedZone = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  delegationSetId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  route53Record?: Maybe<Array<Maybe<AwsRoute53Record>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsRoute53Record = {
  accountId: Scalars['String'];
  alb?: Maybe<Array<Maybe<AwsAlb>>>;
  alias?: Maybe<AwsRoute53Alias>;
  elb?: Maybe<Array<Maybe<AwsElb>>>;
  id: Scalars['String'];
  records?: Maybe<Array<Maybe<Scalars['String']>>>;
  restApi?: Maybe<Array<Maybe<AwsApiGatewayRestApi>>>;
  route53HostedZone?: Maybe<Array<Maybe<AwsRoute53HostedZone>>>;
  ttl?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  zoneId?: Maybe<Scalars['String']>;
};

export type AwsRouteTable = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  explicitlyAssociatedWithSubnets?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  mainRouteTable?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
  routes?: Maybe<Array<Maybe<AwsRoute>>>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  subnetAssociations?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transitGateway?: Maybe<Array<Maybe<AwsTransitGateway>>>;
  transitGatewayAttachment?: Maybe<Array<Maybe<AwsTransitGatewayAttachment>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
  vpcId?: Maybe<Scalars['String']>;
};

export type AwsS3 = {
  access?: Maybe<Scalars['String']>;
  accountId: Scalars['String'];
  arn: Scalars['String'];
  blockPublicAcls?: Maybe<Scalars['String']>;
  blockPublicPolicy?: Maybe<Scalars['String']>;
  bucketOwnerName?: Maybe<Scalars['String']>;
  bucketPolicies?: Maybe<Array<Maybe<AwsBucketPolicy>>>;
  cloudfrontDistribution?: Maybe<Array<Maybe<AwsCloudfront>>>;
  cloudtrail?: Maybe<Array<Maybe<AwsCloudtrail>>>;
  corsConfiguration?: Maybe<Scalars['String']>;
  crossRegionReplication?: Maybe<Scalars['String']>;
  encrypted?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ignorePublicAcls?: Maybe<Scalars['String']>;
  kinesisFirehose?: Maybe<Array<Maybe<AwsKinesisFirehose>>>;
  lifecycle?: Maybe<Scalars['String']>;
  logging?: Maybe<Scalars['String']>;
  mfa?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  requesterPays?: Maybe<Scalars['String']>;
  restrictPublicBuckets?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  staticWebsiteHosting?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  totalNumberOfObjectsInBucket?: Maybe<Scalars['String']>;
  transferAcceleration?: Maybe<Scalars['String']>;
  versioning?: Maybe<Scalars['String']>;
};

export type AwsSecretsManager = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  deletedDate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kmsKeyId?: Maybe<Scalars['String']>;
  lastAccessedDate?: Maybe<Scalars['String']>;
  lastChangedDate?: Maybe<Scalars['String']>;
  lastRotatedDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owningService?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  rotationEnabled?: Maybe<Scalars['Boolean']>;
  rotationLambdaARN?: Maybe<Scalars['String']>;
  rotationRules?: Maybe<AwsSecretsManagerRotationRule>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsSecretsManagerRotationRule = {
  automaticallyAfterDays?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type AwsSecurityGroup = {
  accountId: Scalars['String'];
  alb?: Maybe<Array<Maybe<AwsAlb>>>;
  arn: Scalars['String'];
  asg?: Maybe<Array<Maybe<AwsAsg>>>;
  clientVpnEndpoint?: Maybe<Array<Maybe<AwsClientVpnEndpoint>>>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  eksCluster?: Maybe<Array<Maybe<AwsEksCluster>>>;
  elastiCacheCluster?: Maybe<Array<Maybe<AwsElastiCacheCluster>>>;
  elb?: Maybe<Array<Maybe<AwsElb>>>;
  id: Scalars['String'];
  inboundRuleCount?: Maybe<Scalars['Int']>;
  inboundRules?: Maybe<Array<Maybe<AwsSgInboundRule>>>;
  lambda?: Maybe<Array<Maybe<AwsLambda>>>;
  name: Scalars['String'];
  outboundRuleCount?: Maybe<Scalars['Int']>;
  outboundRules?: Maybe<Array<Maybe<AwsSgOutboundRule>>>;
  owner?: Maybe<Scalars['String']>;
  rdsCluster?: Maybe<Array<Maybe<AwsRdsCluster>>>;
  rdsDbInstance?: Maybe<Array<Maybe<AwsRdsDbInstance>>>;
  region?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpcId?: Maybe<Scalars['String']>;
};

export type AwsServiceBillingInfo = {
  cost?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  formattedCost?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AwsSes = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  verificationStatus?: Maybe<Scalars['String']>;
};

export type AwsSgInboundRule = {
  description?: Maybe<Scalars['String']>;
  fromPort?: Maybe<Scalars['Int']>;
  groupName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  peeringStatus?: Maybe<Scalars['String']>;
  portRange?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  toPort?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type AwsSgOutboundRule = {
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  fromPort?: Maybe<Scalars['Int']>;
  groupName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  peeringStatus?: Maybe<Scalars['String']>;
  portRange?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  toPort?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type AwsShardLevelMetrics = {
  shardLevelMetrics?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AwsShards = {
  adjacentParentShardId?: Maybe<Scalars['String']>;
  hashKeyRangeEnding: Scalars['String'];
  hashKeyRangeStarting: Scalars['String'];
  parentShardId?: Maybe<Scalars['String']>;
  sequenceNumberRangeEnding?: Maybe<Scalars['String']>;
  sequenceNumberRangeStaring: Scalars['String'];
  shardId: Scalars['String'];
};

export type AwsSns = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  cloudFormationStack?: Maybe<Array<Maybe<AwsCloudFormationStack>>>;
  cloudtrail?: Maybe<Array<Maybe<AwsCloudtrail>>>;
  cloudwatch?: Maybe<Array<Maybe<AwsCloudwatch>>>;
  deliveryPolicy?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  policy?: Maybe<AwsIamJsonPolicy>;
  region: Scalars['String'];
  subscriptions?: Maybe<Array<Maybe<AwsSnsSubscription>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
};

export type AwsSnsSubscription = {
  arn?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  protocol?: Maybe<Scalars['String']>;
};

export type AwsSqs = {
  accountId: Scalars['String'];
  approximateNumberOfMessages?: Maybe<Scalars['Int']>;
  approximateNumberOfMessagesDelayed?: Maybe<Scalars['Int']>;
  approximateNumberOfMessagesNotVisible?: Maybe<Scalars['Int']>;
  arn: Scalars['String'];
  delaySeconds?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  maximumMessageSize?: Maybe<Scalars['Int']>;
  messageRetentionPeriod?: Maybe<Scalars['String']>;
  policy?: Maybe<AwsIamJsonPolicy>;
  queueType: Scalars['String'];
  queueUrl: Scalars['String'];
  receiveMessageWaitTimeSeconds?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  visibilityTimeout?: Maybe<Scalars['String']>;
};

export type AwsSubnet = {
  accountId: Scalars['String'];
  alb?: Maybe<Array<Maybe<AwsAlb>>>;
  arn: Scalars['String'];
  asg?: Maybe<Array<Maybe<AwsAsg>>>;
  autoAssignPublicIpv4Address?: Maybe<Scalars['String']>;
  autoAssignPublicIpv6Address?: Maybe<Scalars['String']>;
  availabilityZone?: Maybe<Scalars['String']>;
  availableIpV4Addresses?: Maybe<Scalars['Int']>;
  defaultForAz?: Maybe<Scalars['Boolean']>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  efsMountTarget?: Maybe<Array<Maybe<AwsEfsMountTarget>>>;
  eksCluster?: Maybe<Array<Maybe<AwsEksCluster>>>;
  elastiCacheCluster?: Maybe<Array<Maybe<AwsElastiCacheCluster>>>;
  elb?: Maybe<Array<Maybe<AwsElb>>>;
  emrCluster?: Maybe<Array<Maybe<AwsEmrCluster>>>;
  flowLogs?: Maybe<Array<Maybe<AwsFlowLog>>>;
  id: Scalars['String'];
  ipV4Cidr?: Maybe<Scalars['String']>;
  ipV6Cidr?: Maybe<Scalars['String']>;
  lambda?: Maybe<Array<Maybe<AwsLambda>>>;
  natGateway?: Maybe<Array<Maybe<AwsNatGateway>>>;
  networkInterface?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  rdsDbInstance?: Maybe<Array<Maybe<AwsRdsDbInstance>>>;
  region?: Maybe<Scalars['String']>;
  routeTable?: Maybe<Array<Maybe<AwsRouteTable>>>;
  state?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
};

export type AwsSupportedLoginProvider = {
  identityProvider?: Maybe<Scalars['String']>;
  identityProviderId: Scalars['String'];
};

export type AwsSuspendedProcess = {
  id: Scalars['String'];
  processName: Scalars['String'];
  suspensionReason?: Maybe<Scalars['String']>;
};

export type AwsTag = {
  alb?: Maybe<Array<Maybe<AwsAlb>>>;
  apiGatewayRestApi?: Maybe<Array<Maybe<AwsApiGatewayRestApi>>>;
  apiGatewayStage?: Maybe<Array<Maybe<AwsApiGatewayStage>>>;
  appSync?: Maybe<Array<Maybe<AwsAppSync>>>;
  asg?: Maybe<Array<Maybe<AwsAsg>>>;
  clientVpnEndpoint?: Maybe<Array<Maybe<AwsClientVpnEndpoint>>>;
  cloud9Environment?: Maybe<Array<Maybe<AwsCloud9Environment>>>;
  cloudFormationStack?: Maybe<Array<Maybe<AwsCloudFormationStack>>>;
  cloudFormationStackSet?: Maybe<Array<Maybe<AwsCloudFormationStackSet>>>;
  cloudfront?: Maybe<Array<Maybe<AwsCloudfront>>>;
  cloudtrail?: Maybe<Array<Maybe<AwsCloudtrail>>>;
  cloudwatch?: Maybe<Array<Maybe<AwsCloudwatch>>>;
  cognitoIdentityPool?: Maybe<Array<Maybe<AwsCognitoIdentityPool>>>;
  cognitoUserPool?: Maybe<Array<Maybe<AwsCognitoUserPool>>>;
  customerGateway?: Maybe<Array<Maybe<AwsCustomerGateway>>>;
  dynamodb?: Maybe<Array<Maybe<AwsDynamoDbTable>>>;
  ebs?: Maybe<Array<Maybe<AwsEbs>>>;
  ec2Instance?: Maybe<Array<Maybe<AwsEc2>>>;
  ecr?: Maybe<Array<Maybe<AwsEcr>>>;
  ecsCluster?: Maybe<Array<Maybe<AwsEcsCluster>>>;
  ecsContainer?: Maybe<Array<Maybe<AwsEcsContainer>>>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  ecsTask?: Maybe<Array<Maybe<AwsEcsTask>>>;
  efs?: Maybe<Array<Maybe<AwsEfs>>>;
  eip?: Maybe<Array<Maybe<AwsEip>>>;
  eksCluster?: Maybe<Array<Maybe<AwsEksCluster>>>;
  elastiCacheCluster?: Maybe<Array<Maybe<AwsElastiCacheCluster>>>;
  elastiCacheReplicationGroup?: Maybe<Array<Maybe<AwsElastiCacheReplicationGroup>>>;
  elasticBeanstalkApp?: Maybe<Array<Maybe<AwsElasticBeanstalkApp>>>;
  elasticBeanstalkEnv?: Maybe<Array<Maybe<AwsElasticBeanstalkEnv>>>;
  elb?: Maybe<Array<Maybe<AwsElb>>>;
  emrCluster?: Maybe<Array<Maybe<AwsEmrCluster>>>;
  flowLogs?: Maybe<Array<Maybe<AwsFlowLog>>>;
  iamPolicies?: Maybe<Array<Maybe<AwsIamPolicy>>>;
  iamRoles?: Maybe<Array<Maybe<AwsIamRole>>>;
  iamUsers?: Maybe<Array<Maybe<AwsIamUser>>>;
  id: Scalars['String'];
  igw?: Maybe<Array<Maybe<AwsIgw>>>;
  key: Scalars['String'];
  kinesisFirehose?: Maybe<Array<Maybe<AwsKinesisFirehose>>>;
  kms?: Maybe<Array<Maybe<AwsKms>>>;
  lambda?: Maybe<Array<Maybe<AwsLambda>>>;
  nacl?: Maybe<Array<Maybe<AwsNetworkAcl>>>;
  natGateway?: Maybe<Array<Maybe<AwsNatGateway>>>;
  networkInterface?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  rdsCluster?: Maybe<Array<Maybe<AwsRdsCluster>>>;
  rdsDbInstance?: Maybe<Array<Maybe<AwsRdsDbInstance>>>;
  redshiftClusters?: Maybe<Array<Maybe<AwsRedshiftCluster>>>;
  routeTable?: Maybe<Array<Maybe<AwsRouteTable>>>;
  s3?: Maybe<Array<Maybe<AwsS3>>>;
  secretsManager?: Maybe<Array<Maybe<AwsSecretsManager>>>;
  securityGroups?: Maybe<Array<Maybe<AwsSecurityGroup>>>;
  sns?: Maybe<Array<Maybe<AwsSns>>>;
  sqs?: Maybe<Array<Maybe<AwsSqs>>>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  transitGateway?: Maybe<Array<Maybe<AwsTransitGateway>>>;
  transitGatewayAttachment?: Maybe<Array<Maybe<AwsTransitGatewayAttachment>>>;
  value: Scalars['String'];
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
  vpnConnection?: Maybe<Array<Maybe<AwsVpnConnection>>>;
  vpnGateway?: Maybe<Array<Maybe<AwsVpnGateway>>>;
};

export type AwsTotalBillingInfo = {
  cost?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  formattedCost?: Maybe<Scalars['String']>;
};

export type AwsTransitGateway = {
  accountId: Scalars['String'];
  amazonSideAsn?: Maybe<Scalars['String']>;
  arn: Scalars['String'];
  associationDefaultRouteTableId?: Maybe<Scalars['String']>;
  autoAcceptSharedAttachments?: Maybe<Scalars['String']>;
  defaultRouteTableAssociation?: Maybe<Scalars['String']>;
  defaultRouteTablePropagation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dnsSupport?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ownerId: Scalars['String'];
  propagationDefaultRouteTableId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  routeTable?: Maybe<Array<Maybe<AwsRouteTable>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transitGatewayAttachment?: Maybe<Array<Maybe<AwsTransitGatewayAttachment>>>;
  vpnConnection?: Maybe<Array<Maybe<AwsVpnConnection>>>;
  vpnEcmpSupport?: Maybe<Scalars['String']>;
};

export type AwsTransitGatewayAttachment = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  creationTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  resourceOwnerId?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  routeTable?: Maybe<Array<Maybe<AwsRouteTable>>>;
  state?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transitGateway?: Maybe<Array<Maybe<AwsTransitGateway>>>;
  transitGatewayId?: Maybe<Scalars['String']>;
  transitGatewayOwnerId?: Maybe<Scalars['String']>;
  transitGatewayRouteTableId?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
  vpnConnection?: Maybe<Array<Maybe<AwsVpnConnection>>>;
};

export type AwsTunelOptions = {
  id: Scalars['String'];
  outsideIpAddress?: Maybe<Scalars['String']>;
  preSharedKey?: Maybe<Scalars['String']>;
  tunnelInsideCidr?: Maybe<Scalars['String']>;
};

export type AwsVgwTelemetry = {
  acceptedRouteCount?: Maybe<Scalars['Int']>;
  certificateArn?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastStatusChange?: Maybe<Scalars['String']>;
  outsideIpAddress?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type AwsVpc = {
  accountId: Scalars['String'];
  alb?: Maybe<Array<Maybe<AwsAlb>>>;
  arn: Scalars['String'];
  defaultVpc?: Maybe<Scalars['Boolean']>;
  dhcpOptionsSet?: Maybe<Scalars['String']>;
  ecsService?: Maybe<Array<Maybe<AwsEcsService>>>;
  efsMountTarget?: Maybe<Array<Maybe<AwsEfsMountTarget>>>;
  eip?: Maybe<Array<Maybe<AwsEip>>>;
  eksCluster?: Maybe<Array<Maybe<AwsEksCluster>>>;
  elastiCacheCluster?: Maybe<Array<Maybe<AwsElastiCacheCluster>>>;
  elb?: Maybe<Array<Maybe<AwsElb>>>;
  enableDnsHostnames?: Maybe<Scalars['Boolean']>;
  enableDnsSupport?: Maybe<Scalars['Boolean']>;
  flowLogs?: Maybe<Array<Maybe<AwsFlowLog>>>;
  id: Scalars['String'];
  igw?: Maybe<Array<Maybe<AwsIgw>>>;
  instanceTenancy?: Maybe<Scalars['String']>;
  ipV4Cidr?: Maybe<Scalars['String']>;
  ipV6Cidr?: Maybe<Scalars['String']>;
  lambda?: Maybe<Array<Maybe<AwsLambda>>>;
  nacl?: Maybe<Array<Maybe<AwsNetworkAcl>>>;
  natGateway?: Maybe<Array<Maybe<AwsNatGateway>>>;
  networkInterface?: Maybe<Array<Maybe<AwsNetworkInterface>>>;
  rdsDbInstance?: Maybe<Array<Maybe<AwsRdsDbInstance>>>;
  redshiftCluster?: Maybe<Array<Maybe<AwsRedshiftCluster>>>;
  region?: Maybe<Scalars['String']>;
  route53HostedZone?: Maybe<Array<Maybe<AwsRoute53HostedZone>>>;
  routeTable?: Maybe<Array<Maybe<AwsRouteTable>>>;
  state?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<AwsSubnet>>>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transitGatewayAttachment?: Maybe<Array<Maybe<AwsTransitGatewayAttachment>>>;
  vpnGateway?: Maybe<Array<Maybe<AwsVpnGateway>>>;
};

export type AwsVpnConnection = {
  accountId: Scalars['String'];
  arn: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  customerGateway?: Maybe<Array<Maybe<AwsCustomerGateway>>>;
  customerGatewayId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  options?: Maybe<AwsVpnConnectionOptions>;
  region?: Maybe<Scalars['String']>;
  routes?: Maybe<Array<Maybe<AwsVpnStaticRoute>>>;
  state?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  transitGateway?: Maybe<Array<Maybe<AwsTransitGateway>>>;
  transitGatewayAttachment?: Maybe<Array<Maybe<AwsTransitGatewayAttachment>>>;
  transitGatewayId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vgwTelemetry?: Maybe<Array<Maybe<AwsVgwTelemetry>>>;
  vpnGateway?: Maybe<Array<Maybe<AwsVpnGateway>>>;
  vpnGatewayId?: Maybe<Scalars['String']>;
};

export type AwsVpnConnectionOptions = {
  enableAcceleration?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  localIpv4NetworkCidr?: Maybe<Scalars['String']>;
  remoteIpv4NetworkCidr?: Maybe<Scalars['String']>;
  staticRoutesOnly?: Maybe<Scalars['Boolean']>;
  tunnelInsideIpVersion?: Maybe<Scalars['String']>;
  tunnelOptions?: Maybe<Array<Maybe<AwsTunelOptions>>>;
  type?: Maybe<Scalars['String']>;
};

export type AwsVpnGateway = {
  accountId: Scalars['String'];
  amazonSideAsn?: Maybe<Scalars['Int']>;
  arn: Scalars['String'];
  id: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AwsRawTag>>>;
  type?: Maybe<Scalars['String']>;
  vpc?: Maybe<Array<Maybe<AwsVpc>>>;
  vpcIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  vpnConnection?: Maybe<Array<Maybe<AwsVpnConnection>>>;
};

export type AwsVpnStaticRoute = {
  destinationCidrBlock?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type BlockDeviceEbs = {
  attachTime: Scalars['String'];
  deleteOnTermination: Scalars['Boolean'];
  status: Scalars['String'];
  volumeId: Scalars['String'];
};
