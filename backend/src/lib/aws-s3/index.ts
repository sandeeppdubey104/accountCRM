import AWS from 'aws-sdk'

const s3 = new AWS.S3()

export default class AwsS3 {
  constructor(
    private bucketName: string,
    private region: string = 'ap-south-1',
    private apiVersion: string = '2006-03-01',
    private ACL: string = 'public-read',
  ) {
  }

  delete(keys: string[]) {
    const objects: any[] = []

    keys.forEach((key: string) => {
      objects.push({ Key: key })
    })

    if (!objects.length) {
      return Promise.resolve()
    }

    const options: any = {
      Bucket: this.bucketName,
      Delete: {
        Objects: objects,
      },
    }

    return new Promise((res: Function, rej: Function) => {
      s3.deleteObjects(options, (err: any, data: any) => {
        if (err) {
          rej(err)
        }
        res(data)
      })
    })
  }

  uploadFile({
    body,
    name,
  }: {
    body: any,
    name: string,
  }) {
    return new Promise((res: Function, rej: Function) => {
      // Setting up S3 upload parameters
      const params = {
        Bucket: this.bucketName,
        Key: name,
        Body: body,
        region: this.region,
        apiVersion: this.apiVersion,
        ACL: this.ACL,
      }

      // Uploading files to the bucket
      s3.upload(params, (err: any, data: any) => {
        if (err) {
          rej(err)
        }
        res(data)
      })
    })
  }
}
