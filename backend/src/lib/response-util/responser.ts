import { Response } from 'express'

export const responser = ({
  data,
  status,
  msg,
  res,
}: {
  data: any
  status: number
  msg: string
  res: any
}) => (res
  .status(status)
  .send({
    data,
    status,
    msg,
  }))

export const successResponser = ({
  data,
  status,
  msg,
  res,
}: {
  data?: any,
  status?: number,
  msg?: string,
  res: Response,
}) => {
  responser({
    data,
    status: status || 200,
    msg: msg || 'Success',
    res,
  })
}

export const errorResponser = ({
  data,
  status,
  msg,
  res,
}: {
  data?: any,
  status?: number,
  msg?: string,
  res: Response,
}) => {
  responser({
    data,
    status: status || 500,
    msg: !msg && typeof data === 'string' ? data : (msg || 'Error'),
    res,
  })
}

export default {
  successResponser,
  errorResponser,
}
