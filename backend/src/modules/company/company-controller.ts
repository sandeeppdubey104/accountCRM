import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { CompanyModel, CompanySchema } from './company-schema'

class CompanyController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, CompanyModel, CompanySchema)
  }
}

export default CompanyController
