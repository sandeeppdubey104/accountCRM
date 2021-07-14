import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { ClientBranchModel, ClientBranchSchema } from './client-branch-schema'

class ClientBranchController extends AbstractController {
  async updateReach({
    data,
    where: {
      _id,
      reachId,
    },
  }: { data: any; where: { _id: string; reachId: string } }) {
    const response: any = await this.Collection.updateOne(
      {
        _id,
        'reach._id': reachId,
      },
      {
        $set: {
          'reach.$[]': data,
        },
      },
      {
        upsert: false,
      },
    )
    return response
  }

  async addReach({
    data, where,
  }: { data: any; where: { _id: string } }) {
    const response: any = await this.Collection.updateOne(
      where,
      {
        $push: {
          reach: data,
        },
      },
      {
        upsert: false,
      },
    )
    return response
  }

  constructor(connection: Connection) {
    super(connection, ClientBranchModel, ClientBranchSchema)
  }
}

export default ClientBranchController
