import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { ClientModel, ClientSchema } from './client-schema'

class ClientController extends AbstractController {
  // CLIENT >> AGREEMENT
  async updateAgreement({
    data,
    where: {
      _id,
      agreementsId,
    },
  }:
  {
    data: any,
    where:
    {
      _id: string;
      agreementsId: string
    }
  }) {
    const response: any = await this.Collection.updateOne({
      _id,
      'agreements._id': agreementsId,
    }, {
      $set: {
        'agreements.$[]': data,
      },
    }, { upsert: false })
    return response
  }

  async addAgreement({
    data,
    where,
  }: {
    data: any,
    where:{
      _id: string;
    }
  }) {
    const response: any = await this.Collection.updateOne(where, {
      $push: {
        agreements: data,
      },
    }, { upsert: false })
    return response
  }

  constructor(connection: Connection) {
    super(connection, ClientModel, ClientSchema)
  }

  // REMOVED BELOW TO NEW COLLECTION
  // CLIENT >> PRODUCT >> ACTIVITY >> PRICE
  // async updateProductActivityPrice({
  //   data,
  //   where: {
  //     _id,
  //     productId,
  //     activityId,
  //     priceId,
  //   },
  // }: {
  //   data: any;
  //   where: {
  //     _id: string;
  //     productId: string;
  //     activityId: string;
  //     priceId: string
  //   }
  // }) {
  //   const response: any = await this.Collection.updateOne({
  //     _id,
  //     'products._id': productId,
  //     'products.activities._id': activityId,
  //     'products.activities.pricing._id': priceId,
  //   }, {
  //     $set: {
  //       'products.activities.pricing.$[]': data,
  //     },
  //   }, { upsert: false })
  //   return response
  // }

  // async addProductActivityPrice({
  //   data,
  //   where: {
  //     _id,
  //     productId,
  //     activityId,
  //   },
  // }: {
  //   data: any;
  //   where: {
  //     _id: string;
  //     productId: string;
  //     activityId: string
  //   }
  // }) {
  //   const response: any = await this.Collection.updateOne({
  //     _id,
  //     'products._id': productId,
  //     'products.activities._id': activityId,
  //   }, {
  //     $push: {
  //       pricing: data,
  //     },
  //   },
  //   { upsert: false })
  //   return response
  // }

  // CLIENT >> PRODUCT >> ACTIVITY
  // async updateProductActivity({
  //   data,
  //   where: {
  //     _id,
  //     productId,
  //     activityId,
  //   },
  // }:
  // {
  //   data: any;
  //   where:{
  //     _id: string;
  //     productId: string;
  //     activityId: string
  //   }
  // }) {
  //   const response: any = await this.Collection.updateOne({
  //     _id,
  //     'products._id': productId,
  //     'products.activities._id': activityId,
  //   }, {
  //     $set: {
  //       'products.activities.$[]': data,
  //     },
  //   }, { upsert: false })
  //   return response
  // }

  // async addProductActivity({
  //   data,
  //   where: {
  //     _id,
  //     productId,
  //   },
  // }:
  // {
  //   data: any;
  //   where: {
  //     _id: string;
  //     productId: string
  //   }
  // }) {
  //   const response: any = await this.Collection.updateOne({
  //     _id,
  //     'products._id': productId,
  //   }, {
  //     $push: {
  //       products: data,
  //     },
  //   },
  //   { upsert: false })
  //   return response
  // }

  // // CLIENT >> PRODUCT
  // async updateProduct({
  //   data,
  //   where: {
  //     _id,
  //     productId,
  //   },
  // }:
  // {
  //   data: any;
  //   where: {
  //     _id: string;
  //     productId: string
  //   }
  // }) {
  //   const response: any = await this.Collection.updateOne({
  //     _id,
  //     'products._id': productId,
  //   }, {
  //     $set: {
  //       'products.$[]': data,
  //     },
  //   }, { upsert: false })
  //   return response
  // }

  // async addProduct({
  //   data,
  //   where,
  // }:
  // {
  //   data: any;
  //   where: {
  //     _id: string
  //   }
  // }) {
  //   const response: any = await this.Collection.updateOne(where, {
  //     $push: {
  //       products: data,
  //     },
  //   }, { upsert: false })
  //   return response
  // }
}

export default ClientController
