import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { CompanyBranchModel, CompanyBranchSchema } from './company-branch-schema'

class CompanyBranchController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, CompanyBranchModel, CompanyBranchSchema)
  }
}

export default CompanyBranchController
