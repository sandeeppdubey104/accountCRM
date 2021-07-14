import {
  Request, Response,
} from 'express'
import { errorResponser, successResponser } from 'src/lib/response-util/responser'
import AbstractRoutes from 'src/lib/routing-util/abstract-routes'
import { getMongoConnection } from 'src/keepers/mongo-connection-keeper'
import multer from 'multer'
import FileController from './file-controller'

const upload = multer({ storage: multer.memoryStorage() })

const PATH_PREFIX: string = '/file'

export default class FileRoutes extends AbstractRoutes {
  public route() {
    this.router.post(`${PATH_PREFIX}/search`, async (req: Request, res: Response) => {
      try {
        const controller = new FileController((getMongoConnection()))

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

    this.router.post(`${PATH_PREFIX}`, [upload.array('files')], async (req: Request, res: Response) => {
      try {
        const controller = new FileController((getMongoConnection()))
        const data = await controller.upload({
          data: {
            ...req.body,
            by: (req as any).by,
          },
          files: (req as any).files,
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
        const controller = new FileController((getMongoConnection()))
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

    this.router.delete(`${PATH_PREFIX}/:id`, async (req: Request, res: Response) => {
      try {
        const controller = new FileController((getMongoConnection()))
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
