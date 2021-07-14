import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { StateModel, StateSchema } from './state-schema'

class StateController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, StateModel, StateSchema)
  }
}

export default StateController
