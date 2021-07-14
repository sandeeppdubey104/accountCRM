import SmsSender from 'src/lib/sms-lib'

export default class SmsHelper {
  smsSender: SmsSender

  constructor(private endpoint: string) {
    this.smsSender = new SmsSender(endpoint)
  }
}
