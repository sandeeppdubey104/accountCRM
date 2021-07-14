import JwtUtil from 'src/lib/jwt-util'

let jwtMaker: JwtUtil
export const intJwtMaker = (secret: string, expireIn: string) => {
  jwtMaker = new JwtUtil(secret, expireIn)
}

export const jwtSign = (data: any) => jwtMaker.sign(data)
export const isValidJwtToken = (token: string): any => jwtMaker.isValid(token)

export default {
  intJwtMaker,
  jwtSign,
  isValidJwtToken,
}
