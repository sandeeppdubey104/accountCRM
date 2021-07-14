import { Application, Request, Response } from 'express'

export default class CommonRoutes {
  static route(app: Application) {
    app.all('*', (req: Request, res: Response) => {
      res.status(404).send({
        error: true,
        message: 'Check your URL please',
      })
    })
  }
}
