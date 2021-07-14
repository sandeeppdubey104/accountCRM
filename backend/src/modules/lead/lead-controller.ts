import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { LeadModel, LeadSchema } from './lead-schema'

class LeadController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, LeadModel, LeadSchema)
  }
}

export default LeadController
