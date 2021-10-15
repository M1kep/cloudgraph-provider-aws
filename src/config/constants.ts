import environment from './environment'

export const MAX_FAILED_AWS_REQUEST_RETRIES = 5
export const BASE_CUSTOM_RETRY_DELAY = 100
export const API_GATEWAY_CUSTOM_DELAY = 200
export const ALB_CUSTOM_DELAY = 750
export const ASG_CUSTOM_DELAY = 200
export const CLOUDWATCH_CUSTOM_DELAY = 200
export const ROUTE_53_CUSTOM_DELAY = 200
export const IAM_CUSTOM_DELAY = 1000
export const CLOUDFORMATION_STACK_CUSTOM_DELAY = 1000
export const POLICY_SCOPE = environment.NODE_ENV === 'test' ? 'Local' : 'All'
export const MESSAGE_INTERVAL = 45000
