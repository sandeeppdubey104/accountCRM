import { Schema } from 'mongoose'
import { UserCollectionName } from 'src/modules/user/user-schema'

const {
  Types: {
    ObjectId,
  },
} = Schema

const DeleteModel = {
  deleted: {
    type: Boolean,
    default: false,
  },
  deletedTs: {
    type: Date,
    default: null,
  },
  deletedBy: {
    type: ObjectId,
    ref: UserCollectionName,
    autopopulate: { maxDepth: 1 },
  },
}

export default DeleteModel
