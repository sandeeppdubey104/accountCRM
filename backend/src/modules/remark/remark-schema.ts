import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
import DeleteModel from '../common/model/delete-model'
import StampModel from '../common/model/stamp-model'
import { UserCollectionName } from '../user/user-schema'

const { Schema } = mongoose
const {
  Types: {
    ObjectId,
  },
} = Schema

const RemarkCollectionName: string = 'remark'

export const RemarkSchema = new Schema({
  refId: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    trim: true,
    required: true,
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
  ...DeleteModel,
  ...StampModel,
})
RemarkSchema.plugin(autopopulate)
export const RemarkModel = mongoose.model(`${RemarkCollectionName}`, RemarkSchema)

export default {
  RemarkModel,
  RemarkSchema,
  RemarkCollectionName,
}
