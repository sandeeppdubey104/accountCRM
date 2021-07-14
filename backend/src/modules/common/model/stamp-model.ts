import { Schema } from 'mongoose'

const {
  Types: {
    ObjectId,
  },
} = Schema

const StampModel = {
  by: {
    type: ObjectId,
    ref: 'user',
    required: true,
    autopopulate: { maxDepth: 1 },
  },
  ts: {
    type: Date,
    default: Date.now,
  },
  updatedBy: {
    type: ObjectId,
    ref: 'user',
    autopopulate: { maxDepth: 1 },
  },
  updatedTs: {
    type: Date,
    default: Date.now,
  },
}

export default StampModel
