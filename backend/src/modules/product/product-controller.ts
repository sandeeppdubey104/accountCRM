import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { ProductModel, ProductSchema } from './product-schema'

class ProductController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, ProductModel, ProductSchema)
  }
}

export default ProductController
