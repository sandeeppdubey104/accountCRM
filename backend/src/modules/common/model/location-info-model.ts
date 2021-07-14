import { GeoModel } from "./geo-model";
import { CityCollectionName } from "src/modules/city/city-schema";
import { StateCollectionName } from "src/modules/state/state-schema";

const LocationInfoModel = {
  area: {
    type: String,
    trim: true,
  },
  stateId: {
    type: String,
    trim: true,
    ref: StateCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  cityId: {
    type: String,
    trim: true,
    ref: CityCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  pincode: {
    type: String,
    trim: true,
  },
  ...GeoModel,
};

export default LocationInfoModel;
