#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkVpcStack, CdkVpcStackProps } from '../lib/cdk-vpc-stack';

const app = new cdk.App();
new CdkVpcStack(app, 'MyCdkVpcStack', {} as CdkVpcStackProps);
