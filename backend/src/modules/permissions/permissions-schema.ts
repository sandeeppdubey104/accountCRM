import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const { Schema } = mongoose

const PermissionsCollectionName: string = 'permissions'

export const PermissionsSchema = new Schema({
  scopes: Schema.Types.Mixed,
})

PermissionsSchema.plugin(autopopulate)

export const PermissionsModel = mongoose.model(PermissionsCollectionName, PermissionsSchema)

export default {
  PermissionsModel,
  PermissionsSchema,
  PermissionsCollectionName,
}
