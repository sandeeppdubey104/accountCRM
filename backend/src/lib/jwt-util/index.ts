import jwt from 'jsonwebtoken'

export default class JwtUtil {
  constructor(private secret: string, private expiresIn: string) { }

  sign(data: any) {
    return jwt.sign({
      expiresIn: this.expiresIn,
      data,
    }, this.secret)
  }

  isValid(token: string) {
    return jwt.verify(token, this.secret)
  }
}
