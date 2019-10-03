# Provision a VPC with CDK

This little app is intended to allow you to provision your own VPC via CDK.

More to come as this develops.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Create VPC via AWS Console Defaults

 * VPC options
   * DNS resolution: enabled
   * DNS hostnames (ie. public hostnames): disabled
 * No subnets
 * Default route for all internal VPC traffic: VPC CIDR -> local
 * No internet gateway
 * DHCP options: set up Amazon provided DNS
 * No NAT gateway
 * Default ACL granting all access for inbound/outbound (IPv6 addresses included if specified in the initial setup)
 * Default Security group granting all access outbound, and ingress only from within the security group
