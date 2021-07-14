import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { PermissionsModel, PermissionsSchema } from './permissions-schema'

class PermissionsController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, PermissionsModel, PermissionsSchema)
  }
}

export default PermissionsController
