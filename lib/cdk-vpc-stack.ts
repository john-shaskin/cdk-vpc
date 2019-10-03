import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2');

export interface CdkVpcStackProps extends cdk.StackProps {
  vpcCidr?: string
}

export class CdkVpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: CdkVpcStackProps) {
    super(scope, id, props);

    new ec2.Vpc(this, 'Vpc', {
      cidr: props.vpcCidr
    });
  }
}
