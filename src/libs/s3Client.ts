
import { S3Client } from '@aws-sdk/client-s3'

// Create an Amazon S3 service client object.
export const s3 = new S3Client({ region: process.env.AWS_DEFAULT_REGION });

