import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
import ActiveModel from '../common/model/active-model'
import DeleteModel from '../common/model/delete-model'
import StampModel from '../common/model/stamp-model'

const { Schema } = mongoose
export const FileCollectionName: string = 'file'

export const FileSchema = new Schema({
  mime: {
    type: String,
  },
  fileType: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
  },
  extension: {
    type: String,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  refId: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  },
  directory: {
    type: String,
  },
  s3Bucket: {
    type: String,
  },
  ...DeleteModel,
  ...ActiveModel,
  ...StampModel,
})

FileSchema.plugin(autopopulate)
export const FileModel = mongoose.model(FileCollectionName, FileSchema)

export default {
  FileModel,
  FileSchema,
  FileCollectionName,
}
