import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { TaxModel, TaxSchema } from './tax-schema'

class TaxController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, TaxModel, TaxSchema)
  }
}

export default TaxController
