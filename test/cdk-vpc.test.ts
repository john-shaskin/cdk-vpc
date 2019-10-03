import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import CdkVpc = require('../lib/cdk-vpc-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkVpc.CdkVpcStack(app, 'MyTestStack', {
      vpcCidr: '172.1.0.0/16'
    } as CdkVpc.CdkVpcStackProps);
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
