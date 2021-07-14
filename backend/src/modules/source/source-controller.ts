import { Connection } from "mongoose";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import { SourceModel, SourceSchema } from "./source-schema";

class SourceController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, SourceModel, SourceSchema);
  }
}

export default SourceController;
