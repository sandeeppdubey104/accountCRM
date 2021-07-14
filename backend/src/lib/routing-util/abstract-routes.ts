import {
  Application, Router, RequestHandler,
} from 'express'

export default abstract class AbstractRoutes {
  router: any

  constructor(private prefix: string, private app: Application, private middlewareList: RequestHandler[] = []) {
    this.router = Router()
    this.app.use(this.prefix, middlewareList, this.router)
  }
}
