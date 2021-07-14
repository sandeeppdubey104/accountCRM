import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { RemarkModel, RemarkSchema } from './remark-schema'

class RemarkController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, RemarkModel, RemarkSchema)
  }
}

export default RemarkController
