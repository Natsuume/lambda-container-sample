#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaContainerSampleStack } from '../lib/lambda-container-sample-stack';

const app = new cdk.App();
new LambdaContainerSampleStack(app, 'LambdaContainerSampleStack');
