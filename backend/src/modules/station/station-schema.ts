import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import StampModel from "../common/model/stamp-model";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const StationCollectionName: string = "station";

export const StationSchema = new Schema({
  StationName: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  AliasName: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    trim: true,
    default: true,
  },

  ...StampModel,
});

StationSchema.plugin(autopopulate);

export const StationModel = mongoose.model(
  `${StationCollectionName}`,
  StationSchema
);

export default {
  StationModel,
  StationSchema,
  StationCollectionName,
};
