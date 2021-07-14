import {
  Application,
  Request, Response, Router,
} from 'express'

export default function HealthRoutes(app:Application) {
  const router:Router = Router()

  router.get('/health', (req: Request, res: Response) => {
    res.send('Jai Mata Di')
  })

  app.use(router)
}
