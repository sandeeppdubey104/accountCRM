import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { PermissionsRolesModel, PermissionsRolesSchema } from './permissions-roles-schema'

class PermissionsRolesController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, PermissionsRolesModel, PermissionsRolesSchema)
  }
}

export default PermissionsRolesController
