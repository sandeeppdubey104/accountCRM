import { Request, Response } from 'express'
import { isValidJwtToken } from 'src/helpers/jwt-helper'
import { errorResponser } from 'src/lib/response-util/responser'
// import { isValidJwtToken } from 'src/helpers/jwt-helper'

export default async function AuthMiddleware(req: Request, res: Response, next: Function) {
  try {
    const token: any = req.headers.authorization

    if (token) {
      const decodedToken: any = isValidJwtToken(token)

      const userId = decodedToken?.data?.userId

      if (!userId) {
        throw ('User Id not found')
      }

      (req as any).by = userId

      next()
    }
    else {
      // eslint-disable-next-line no-new-wrappers
      throw ('Unauthenticated request')
    }
  }
  catch (error) {
    console.error(error)
    errorResponser({
      data: error,
      res,
      status: 401,
    })
  }
}
