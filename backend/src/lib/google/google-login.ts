import { getRequest } from '../request-util'
import { IGoogleLoginResponse } from './igoogle-response'

export default class GoogleLogin {
  constructor(private token: string, private googleId: string) { }

  async getUserInfo(): Promise<IGoogleLoginResponse> {
    const url = `https://people.googleapis.com/v1/people/${this.googleId}?personFields=names,emailAddresses`
    try {
      const {
        data,
      } = await getRequest({
        url,
        headers: {
          authorization: `Bearer ${this.token}`,
        },
      })
      return data
    } catch (error) {
      console.error(error)
      throw error.data ? error.data : error
    }
  }
}
