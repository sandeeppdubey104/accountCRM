import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
import ActiveModel from '../common/model/active-model'
import StampModel from '../common/model/stamp-model'

const { Schema } = mongoose
const TaxCollectionName: string = 'Tax'

export const TaxSchema = new Schema({
  cgst: {
    type: Number,
    default: 0,
  },
  sgst: {
    type: Number,
    default: 0,
  },
  igst: {
    type: Number,
    default: 0,
  },
  effectiveData: {
    type: Date,
    required: true,
  },

  ...ActiveModel,
  ...StampModel,
})
TaxSchema.plugin(autopopulate)
export const TaxModel = mongoose.model(TaxCollectionName, TaxSchema)

export default {
  TaxModel,
  TaxSchema,
  TaxCollectionName,
}
