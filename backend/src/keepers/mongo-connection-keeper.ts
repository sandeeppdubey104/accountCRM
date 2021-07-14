import mongoose, { Connection } from 'mongoose'

let connection: Connection
export const initMongoConnection = (url: any) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection = mongoose.connection

  connection.on('error', console.error.bind(console, 'connection error:'))
  connection.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('connection open')
  })
  return connection
}

export const getMongoConnection = (): Connection => connection

export default {
  initMongoConnection,
  getMongoConnection,
}
