import { Connection } from "mongoose";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import { CustomerModel, CustomerSchema } from "./customer-schema";

class CustomerController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, CustomerModel, CustomerSchema);
  }
}

export default CustomerController;
