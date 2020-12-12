import { DockerImageCode, DockerImageFunction } from "@aws-cdk/aws-lambda";
import * as cdk from "@aws-cdk/core";
import { Duration } from "@aws-cdk/core";

export class LambdaContainerSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new DockerImageFunction(this, "jumanpp-lambda", {
      code: DockerImageCode.fromImageAsset("./docker", {
        cmd: ["/var/task/jumanpp-lambda.jumanppHandler"],
        entrypoint: ["/lambda-entrypoint.sh"],
      }),
      timeout: Duration.seconds(30),
    });
  }
}
