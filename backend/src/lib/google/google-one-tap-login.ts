import { getRequest } from '../request-util'
import { IGoogleOneTapResponse } from './igoogle-one-tap-response'

export default class GoogleOneTapLogin {
  constructor(private token: string) { }

  async getUserInfo(): Promise<IGoogleOneTapResponse> {
    const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${this.token}`
    try {
      const {
        data,
      } = await getRequest({
        url,
      })
      return data
    } catch (error) {
      console.error(error)

      throw error.data ? error.data : error
    }
  }
}
