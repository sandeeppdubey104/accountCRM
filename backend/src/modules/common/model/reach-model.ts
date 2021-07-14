import { Schema } from 'mongoose'
import { CityCollectionName } from 'src/modules/city/city-schema'
import { StateCollectionName } from 'src/modules/state/state-schema'
import ActiveModel from './active-model'
import StampModel from './stamp-model'

const {
  Types: {
    ObjectId,
  },
} = Schema

const ReachModel = {
  stateId: {
    type: ObjectId,
    ref: StateCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },
  cityId: {
    type: ObjectId,
    ref: CityCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },
  pincode: String,
  ...ActiveModel,
  ...StampModel,
}

export default ReachModel
