import {
  Request, Response,
} from 'express'
import { errorResponser, successResponser } from 'src/lib/response-util/responser'
import AbstractRoutes from 'src/lib/routing-util/abstract-routes'
import { getMongoConnection } from 'src/keepers/mongo-connection-keeper'
import ClientController from './client-controller'

const PATH_PREFIX: string = '/client'

export default class ClientRoutes extends AbstractRoutes {
  public route() {
    // CLIENT
    this.router.post(`${PATH_PREFIX}/search`, async (req: Request, res: Response) => {
      try {
        const controller = new ClientController((getMongoConnection()))

        const data = await controller.search({
          ...req.body,
        })

        successResponser({
          data,
          res,
        })
      }
      catch (err) {
        console.error(err)

        errorResponser({
          data: err,
          res,
        })
      }
    })

    this.router.post(`${PATH_PREFIX}`, async (req: Request, res: Response) => {
      try {
        const controller = new ClientController((getMongoConnection()))
        const data = await controller.insert({
          data: {
            ...req.body,
            by: (req as any).by,
          },
        })
        successResponser({
          data,
          res,
        })
      }
      catch (err) {
        console.error(err)

        errorResponser({
          data: err,
          res,
        })
      }
    })

    this.router.put(`${PATH_PREFIX}/:id`, async (req: Request, res: Response) => {
      try {
        const controller = new ClientController((getMongoConnection()))
        const data = await controller.update({
          data: {
            ...req.body,
            updatedBy: (req as any).by,
            updatedTs: new Date(),
          },
          where: {
            _id: req.params.id,
          },
        })
        successResponser({
          data,
          res,
        })
      }
      catch (err) {
        console.error(err)

        errorResponser({
          data: err,
          res,
        })
      }
    })

    // CLIENT >> AGREEMENT
    this.router.post(`${PATH_PREFIX}/:id/agreement`, async (req: Request, res: Response) => {
      try {
        const controller = new ClientController((getMongoConnection()))
        const data = await controller.addAgreement({
          data: {
            ...req.body,
            by: (req as any).by,
          },
          where: {
            _id: req.params.id,
          },
        })
        successResponser({
          data,
          res,
        })
      }
      catch (err) {
        console.error(err)

        errorResponser({
          data: err,
          res,
        })
      }
    })

    this.router.put(`${PATH_PREFIX}/:id/agreement/:agreementsId`, async (req: Request, res: Response) => {
      try {
        const controller = new ClientController((getMongoConnection()))
        const data = await controller.updateAgreement({
          data: {
            ...req.body,
            updatedBy: (req as any).by,
            updatedTs: new Date(),
          },
          where: {
            _id: req.params.id,
            agreementsId: req.params.agreementsId,
          },
        })
        successResponser({
          data,
          res,
        })
      }
      catch (err) {
        console.error(err)

        errorResponser({
          data: err,
          res,
        })
      }
    })

    // REMOVED BELOW TO NEW COLLECTION
    // // CLIENT >> PRODUCT
    // this.router.post(`${PATH_PREFIX}/:id/product`, async (req: Request, res: Response) => {
    //   try {
    //     const controller = new ClientController((getMongoConnection()))
    //     const data = await controller.addProduct({
    //       data: {
    //         ...req.body,
    //         by: (req as any).by,
    //       },
    //       where: {
    //         _id: req.params.id,
    //       },
    //     })
    //     successResponser({
    //       data,
    //       res,
    //     })
    //   }
    //   catch (err) {
    //     console.error(err)

    //     errorResponser({
    //       data: err,
    //       res,
    //     })
    //   }
    // })

    // this.router.put(`${PATH_PREFIX}/:id/product/:productId`, async (req: Request, res: Response) => {
    //   try {
    //     const controller = new ClientController((getMongoConnection()))
    //     const data = await controller.updateProduct({
    //       data: {
    //         ...req.body,
    //         updatedBy: (req as any).by,
    //         updatedTs: new Date(),
    //       },
    //       where: {
    //         _id: req.params.id,
    //         productId: req.params.productId,
    //       },
    //     })
    //     successResponser({
    //       data,
    //       res,
    //     })
    //   }
    //   catch (err) {
    //     console.error(err)

    //     errorResponser({
    //       data: err,
    //       res,
    //     })
    //   }
    // })

    // // CLIENT >> PRODUCT >> ACTIVITIES
    // this.router.post(`${PATH_PREFIX}/:id/product/:productId/activity`, async (req: Request, res: Response) => {
    //   try {
    //     const controller = new ClientController((getMongoConnection()))
    //     const data = await controller.addProductActivity({
    //       data: {
    //         ...req.body,
    //         by: (req as any).by,
    //       },
    //       where: {
    //         _id: req.params.id,
    //         productId: req.params.productId,
    //       },
    //     })
    //     successResponser({
    //       data,
    //       res,
    //     })
    //   }
    //   catch (err) {
    //     console.error(err)

    //     errorResponser({
    //       data: err,
    //       res,
    //     })
    //   }
    // })

    // this.router.put(`${PATH_PREFIX}/:id/product/:productId/activity/:activityId`, async (req: Request, res: Response) => {
    //   try {
    //     const controller = new ClientController((getMongoConnection()))
    //     const data = await controller.updateProductActivity({
    //       data: {
    //         ...req.body,
    //         updatedBy: (req as any).by,
    //         updatedTs: new Date(),
    //       },
    //       where: {
    //         _id: req.params.id,
    //         productId: req.params.productId,
    //         activityId: req.params.activityId,
    //       },
    //     })
    //     successResponser({
    //       data,
    //       res,
    //     })
    //   }
    //   catch (err) {
    //     console.error(err)

    //     errorResponser({
    //       data: err,
    //       res,
    //     })
    //   }
    // })

    // // CLIENT >> PRODUCT >> ACTIVITIES >> PRICING
    // this.router.post(`${PATH_PREFIX}/:id/product/:productId/activity/:activityId/price`, async (req: Request, res: Response) => {
    //   try {
    //     const controller = new ClientController((getMongoConnection()))
    //     const data = await controller.addProductActivityPrice({
    //       data: {
    //         ...req.body,
    //         by: (req as any).by,
    //       },
    //       where: {
    //         _id: req.params.id,
    //         productId: req.params.productId,
    //         activityId: req.params.activityId,
    //       },
    //     })
    //     successResponser({
    //       data,
    //       res,
    //     })
    //   }
    //   catch (err) {
    //     console.error(err)

    //     errorResponser({
    //       data: err,
    //       res,
    //     })
    //   }
    // })

    // this.router.put(`${PATH_PREFIX}/:id/product/:productId/activity/:activityId/price/:priceId`, async (req: Request, res: Response) => {
    //   try {
    //     const controller = new ClientController((getMongoConnection()))
    //     const data = await controller.updateProductActivityPrice({
    //       data: {
    //         ...req.body,
    //         updatedBy: (req as any).by,
    //         updatedTs: new Date(),
    //       },
    //       where: {
    //         _id: req.params.id,
    //         productId: req.params.productId,
    //         activityId: req.params.activityId,
    //         priceId: req.params.priceId,
    //       },
    //     })
    //     successResponser({
    //       data,
    //       res,
    //     })
    //   }
    //   catch (err) {
    //     console.error(err)

    //     errorResponser({
    //       data: err,
    //       res,
    //     })
    //   }
    // })
  }
}
