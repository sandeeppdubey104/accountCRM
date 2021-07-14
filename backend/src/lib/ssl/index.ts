/* eslint-disable no-console */
import fs from 'fs'
import http from 'http'
import https from 'https'
import { Application } from 'express'

export default function setupHttpsDevServer({
  key, cert, app, httpPort, httpsPort,
}: { key?: string, cert?: string, app: Application, httpPort: number, httpsPort?: number }) {
  const httpServer = http.createServer(app)

  const listenerHttp: any = httpServer.listen(httpPort, () => {
    const host = listenerHttp.address().address
    const { port } = listenerHttp.address()
    console.log('HTTP app listening at http://%s:%s', host, port)
  }).on('error', (err) => {
    console.log('main app not started', err)
  })

  // if key and cert is provided then enable https
  if (key && cert) {
    const privateKey = fs.readFileSync(key, 'utf8')
    const certificate = fs.readFileSync(cert, 'utf8')
    const credentials = {
      key: privateKey,
      cert: certificate,
    }

    const httpsServer = https.createServer(credentials, app)
    const listenerHttps: any = httpsServer.listen(httpsPort, () => {
      const host: any = listenerHttps.address().address
      const { port }: any = listenerHttps.address()
      console.log('HTTPS app listening at http://%s:%s', host, port)
    }).on('error', (err) => {
      console.log('main app not started', err)
    })
  }
}
