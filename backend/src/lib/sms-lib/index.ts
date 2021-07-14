import { getRequest } from 'src/lib/request-util'

export default class SmsSender {
  constructor(private url: string) {
  }

  async send({
    phones,
    body,
  }: {
    phones: string[] | string,
    body: string
  }) {
    const response = await getRequest({
      url: this.url,
      params: {
        number: Array.isArray(phones) ? Array.from(new Set(phones)).join(',') : phones,
        message: body,
      },
    })

    return response
  }
}
