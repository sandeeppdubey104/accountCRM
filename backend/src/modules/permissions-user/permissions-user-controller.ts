import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { PermissionsUserModel, PermissionsUserSchema } from './permissions-user-schema'

class PermissionsUserController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, PermissionsUserModel, PermissionsUserSchema)
  }
}

export default PermissionsUserController
