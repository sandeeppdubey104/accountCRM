import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
import ActiveModel from '../common/model/active-model'
import StampModel from '../common/model/stamp-model'

const { Schema } = mongoose
const LeadCollectionName: string = 'Lead'

const {
  Types: {
    ObjectId,
  },
} = Schema

export const LeadSchema = new Schema({
  contactName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  designation: {
    type: String,
  },

  referredBy: {
    type: ObjectId,
    ref: 'user',
    autopopulate: { maxDepth: 1 },
  },

  ...ActiveModel,
  ...StampModel,
})

LeadSchema.plugin(autopopulate)

export const LeadModel = mongoose.model(LeadCollectionName, LeadSchema)

export default {
  LeadModel,
  LeadSchema,
  LeadCollectionName,
}
