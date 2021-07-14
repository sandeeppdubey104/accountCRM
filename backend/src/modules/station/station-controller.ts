import { Connection } from "mongoose";
import AbstractController from "src/lib/mongoose-abstract-lib/abstract-controller";
import { StationModel, StationSchema } from "./station-schema";

class CityController extends AbstractController {
  constructor(connection: Connection) {
    super(connection, StationModel, StationSchema);
  }
}

export default CityController;
