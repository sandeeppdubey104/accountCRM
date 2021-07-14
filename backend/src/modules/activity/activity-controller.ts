import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { ActivityModel, ActivitySchema } from './activity-schema'

class ActivityController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, ActivityModel, ActivitySchema)
  }
}

export default ActivityController
