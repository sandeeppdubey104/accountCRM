/* eslint-disable no-restricted-syntax */
import { bool } from 'aws-sdk/clients/signer'
import { get } from 'lodash-es'
import {
  Connection, Document, Model, Schema,
} from 'mongoose'
import MongooseErrorTransformer from '../mongoose/error-transformer'

class AbstractController {
  constructor(
    public connection: Connection,
    public Collection: Model<any>,
    public schema: Schema,
  ) { }

  validations(record: any) {
    const messages = []
    for (const key in this.schema.paths) {
      if (Object.prototype.hasOwnProperty.call(this.schema.paths, key)) {
        const path: any = this.schema.paths[key]
        if (path.isRequired && [undefined, ''].indexOf(get(record, key)) > -1) {
          messages.push(`${key} is isRequired`)
        }
      }
    }
    return messages
  }

  public async insert({
    data,
  }: {
    data: any
  }) {
    try {
      // validations
      const errors = this.validations(data)
      if (errors.length) {
        throw errors
      }

      const collection = new this.Collection(data)
      const response: Document = await collection.save()
      return response
    }
    catch (error) {
      console.error('LOG: AbstractController -> error', error)
      throw MongooseErrorTransformer(error)
    }
  }

  public async search({
    where = {},
    select = {},
    sortBy = '',
    sortOrder = -1, // 1:asc -1:desc
    pageLength = 10,
    currentPage = 0,
    autopopulate = true,
  }: {
    where: any,
    select?: any,
    sortBy?: string,
    sortOrder?: number,
    pageLength?: number,
    currentPage?: number,
    autopopulate?: bool
  }) {
    try {
      const sortInput: any = {}

      if (sortBy) {
        sortInput[sortBy] = sortOrder
      }

      const data: any = await (this.Collection as any)
        .find(where, null, { autopopulate })
        .select(select)
        .limit(pageLength)
        .skip(pageLength * currentPage)
        .sort(sortInput)
        .exec()

      const count = await this.Collection.find(where).count().exec()

      const pages = count / pageLength

      const result = {
        data,
        currentPage,
        pages: pages === Infinity ? 1 : pages,
        count,
      }

      return result
    }
    catch (error) {
      console.log('LOG: AbstractController -> error', error)
      throw MongooseErrorTransformer(error)
    }
  }

  public async delete({
    where = {},
  }: {
    where: any,
  }) {
    if (Object.keys(where).length < 1) {
      throw 'No Delete Query Provided'
    }

    try {
      const output = await this.Collection.remove(where)
      return output
    }
    catch (error) {
      return MongooseErrorTransformer(error)
    }
  }

  public async update({
    data,
    where,
  }: {
    data: any,
    where: any,
  }) {
    try {
      const response: any = await this.Collection.updateOne(where, data, { upsert: false })
      return response
    }
    catch (error) {
      console.log('LOG: AbstractController -> error', error)
      throw MongooseErrorTransformer(error)
    }
  }
}

export default AbstractController
