import { Connection } from "mongoose";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import { UomModel, UomSchema } from "./uom-schema";

class UomController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, UomModel, UomSchema);
  }
}

export default UomController;
