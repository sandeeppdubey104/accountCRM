import {
  Request, Response,
} from 'express'
import { errorResponser, successResponser } from 'src/lib/response-util/responser'
import AbstractRoutes from 'src/lib/routing-util/abstract-routes'
import { getMongoConnection } from 'src/keepers/mongo-connection-keeper'
import CaseController from './case-controller'

const PATH_PREFIX: string = '/case'

export default class CaseRoutes extends AbstractRoutes {
  public route() {
    // CASE
    this.router.post(`${PATH_PREFIX}/search`, async (req: Request, res: Response) => {
      try {
        const controller = new CaseController((getMongoConnection()))

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
        const controller = new CaseController((getMongoConnection()))

        const input = {
          ...req.body,
          by: (req as any).by,
        }

        const data = await controller.insertNewCase({
          data: input,
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
        const controller = new CaseController((getMongoConnection()))

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

    // CASE >> APPLICANTS
    this.router.post(`${PATH_PREFIX}/:id/applicant`, async (req: Request, res: Response) => {
      try {
        const controller = new CaseController((getMongoConnection()))
        const data = await controller.addCaseApplicant({
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

    this.router.put(`${PATH_PREFIX}/:id/applicant/:applicantId`, async (req: Request, res: Response) => {
      try {
        const controller = new CaseController((getMongoConnection()))
        const data = await controller.updateCaseApplicant({
          data: {
            ...req.body,
            updatedBy: (req as any).by,
            updatedTs: new Date(),
          },
          where: {
            _id: req.params.id,
            applicantId: req.params.applicantId,
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

    // CASE >> APPLICANT >> ACTIVITY
    this.router.post(`${PATH_PREFIX}/:id/applicant/:applicantId/activity`, async (req: Request, res: Response) => {
      try {
        const controller = new CaseController((getMongoConnection()))
        const data = await controller.addCaseActivity({
          data: {
            ...req.body,
            by: (req as any).by,
          },
          where: {
            _id: req.params.id,
            applicantId: req.params.applicantId,
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

    this.router.put(`${PATH_PREFIX}/:id/applicant/:applicantId/activity/:activityId`, async (req: Request, res: Response) => {
      try {
        const controller = new CaseController((getMongoConnection()))
        const data = await controller.updateCaseActivity({
          data: {
            ...req.body,
            updatedBy: (req as any).by,
            updatedTs: new Date(),
          },
          where: {
            _id: req.params.id,
            applicantId: req.params.applicantId,
            activityId: req.params.activityId,
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

    // CASE >> APPLICANT>> ACTIVITY >> FIELDS
    this.router.post(`${PATH_PREFIX}/:id/applicant/:applicantId/activity/:activityId/field`, async (req: Request, res: Response) => {
      try {
        const controller = new CaseController((getMongoConnection()))
        const data = await controller.addCaseActivityField({
          data: {
            ...req.body,
            by: (req as any).by,
          },
          where: {
            _id: req.params.id,
            applicantId: req.params.applicantId,
            activityId: req.params.activityId,
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

    this.router.put(`${PATH_PREFIX}/:id/applicant/:applicantId/activity/:activityId/field/:fieldId`, async (req: Request, res: Response) => {
      try {
        const controller = new CaseController((getMongoConnection()))
        const data = await controller.updateCaseActivityField({
          data: {
            ...req.body,
            updatedBy: (req as any).by,
            updatedTs: new Date(),
          },
          where: {
            _id: req.params.id,
            applicantId: req.params.applicantId,
            activityId: req.params.activityId,
            fieldId: req.params.fieldId,
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
