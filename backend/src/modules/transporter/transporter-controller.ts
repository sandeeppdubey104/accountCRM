import { Connection } from "mongoose";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import { TransporterModel, TransporterSchema } from "./transporter-schema";

class CityController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, TransporterModel, TransporterSchema);
  }
}

export default CityController;
