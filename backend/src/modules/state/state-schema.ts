import mongoose from 'mongoose'

const { Schema } = mongoose

export const StateCollectionName: string = 'state'

export const StateSchema = new Schema({
  stateName: {
    type: String,
    trim: true,
    required: true,
  },
  capital: {
    type: String,
    trim: true,
    required: true,
  },
  isUt: {
    type: Boolean,
    default: false,
    required: true,
  },
})

export const StateModel = mongoose.model(`${StateCollectionName}`, StateSchema)

export default {
  StateModel,
  StateSchema,
  StateCollectionName,
}
