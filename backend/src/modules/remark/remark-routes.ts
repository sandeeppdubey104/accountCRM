import {
  Request, Response,
} from 'express'
import { errorResponser, successResponser } from 'src/lib/response-util/responser'
import AbstractRoutes from 'src/lib/routing-util/abstract-routes'
import { getMongoConnection } from 'src/keepers/mongo-connection-keeper'
import RemarkController from './remark-controller'

const PATH_PREFIX: string = '/remark'

export default class RemarkRoutes extends AbstractRoutes {
  public route() {
    this.router.post(`${PATH_PREFIX}/search`, async (req: Request, res: Response) => {
      try {
        const controller = new RemarkController((getMongoConnection()))

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
        const controller = new RemarkController((getMongoConnection()))
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
        const controller = new RemarkController((getMongoConnection()))
        const data = await controller.update({
          data: req.body,
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

    this.router.delete(`${PATH_PREFIX}/:id`, async (req: Request, res: Response) => {
      try {
        const controller = new RemarkController((getMongoConnection()))
        const data = await controller.update({
          data: {
            deleted: true,
            deletedTs: new Date(),
            deletedBy: (req as any).by,
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
  }
}
