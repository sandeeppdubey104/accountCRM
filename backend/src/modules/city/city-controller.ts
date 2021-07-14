import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { CityModel, CitySchema } from './city-schema'

class CityController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, CityModel, CitySchema)
  }
}

export default CityController
