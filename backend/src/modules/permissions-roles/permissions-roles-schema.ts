import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
import ActiveModel from '../common/model/active-model'
import StampModel from '../common/model/stamp-model'

const { Schema } = mongoose
const PermissionsRolesCollectionName: string = 'PermissionsRoles'

const {
  Types: {
    ObjectId,
  },
} = Schema

export const PermissionsRolesSchema = new Schema({
  roleTitle: {
    type: String,
    required: true,
    trim: true,
  },
  permissions: {
    type: Schema.Types.Array,
    required: true,
  }, // {permission schema id: has access}
  ...ActiveModel,
  ...StampModel,
})

PermissionsRolesSchema.plugin(autopopulate)

export const PermissionsRolesModel = mongoose.model(PermissionsRolesCollectionName, PermissionsRolesSchema)

export default {
  PermissionsRolesModel,
  PermissionsRolesSchema,
  PermissionsRolesCollectionName,
}
