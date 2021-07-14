import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import StampModel from "../common/model/stamp-model";
import { StateCollectionName } from "../state/state-schema";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const CityCollectionName: string = "city";

export const CitySchema = new Schema({
  stateId: {
    type: ObjectId,
    ref: StateCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },
  cityName: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  cityType: {
    type: String,
    trim: true,
    required: true,
  },
  flatNo: {
    type: String,
    trim: true,
  },
  buildingNo: {
    type: String,
    trim: true,
  },
  area: {
    type: String,
    trim: true,
  },
  lat: {
    type: Number,
    trim: true,
  },
  lng: {
    type: Number,
    trim: true,
  },
  reach: {
    type: Boolean,
    trim: true,
    default: true,
  },

  ...StampModel,
});

CitySchema.plugin(autopopulate);

export const CityModel = mongoose.model(`${CityCollectionName}`, CitySchema);

export default {
  CityModel,
  CitySchema,
  CityCollectionName,
};
