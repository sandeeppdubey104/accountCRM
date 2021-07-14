/* eslint-disable no-await-in-loop */
import { v4 as uuidv4 } from 'uuid'
import fileExtension from 'file-extension'
import { Connection } from 'mongoose'
import AwsS3 from 'src/lib/aws-s3'
import { isPositiveNumber } from 'src/lib/common-functions'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { FileModel, FileSchema } from './file-schema'

class FileController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, FileModel, FileSchema)
  }

  async upload({
    files,
    data,
  }:{
    files: any[],
    data: any,
  }) {
    const {
      deletePreviousAll,
      ...record
    } = data

    // validations
    const errors = this.validations(record)
    if (errors.length) {
      throw errors
    }

    if (!Array.isArray(files) || !isPositiveNumber(files.length)) {
      throw ('No files found')
    }

    const result = []

    const s3Bucket = (process as any).env.awsS3AssetsBucket

    const s3 = new AwsS3(s3Bucket)

    // delete previous if user has asked for it
    let hasDeletedPreviousAll = false
    if (Number(deletePreviousAll) === 1) {
      const recordsToBeDeleted: {data:any[]} = await this.search({
        where: {
          refId: record.refId,
        },
      })
      if (recordsToBeDeleted.data.length) {
        // eslint-disable-next-line no-console
        console.log('deleting files for ', record.refId)

        // delete from dbF
        await this.delete({
          where: {
            refId: record.refId,
          },
        })

        // delete s3 bucket files
        try {
          s3.delete(recordsToBeDeleted.data.map((r: any) => r.name))
        }
        catch (error) {
          console.error('deleting assets from s3 error: ', error)
        }
      }

      hasDeletedPreviousAll = true
    }

    // upload files
    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      const extension = fileExtension(file.originalname)
      const uniqueName = uuidv4()
      let fileName = `${uniqueName}.${extension}`
      if (record.directory) {
        fileName = `${record.directory}/${fileName}`
      }

      const response: any = await s3.uploadFile({
        body: file.buffer,
        name: fileName,
      })

      const input = {
        ...record,
        mime: file.mimetype,
        name: response.Key,
        extension,
        url: response.Location,
        s3Bucket,
      }

      const output = await this.insert({
        data: input,
      })

      result.push(output)
    }

    return {
      ...result,
      hasDeletedPreviousAll,
    }
  }
}

export default FileController
