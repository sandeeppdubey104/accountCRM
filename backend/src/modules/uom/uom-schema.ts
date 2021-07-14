import mongoose from "mongoose";
import StampModel from "../common/model/stamp-model";

const { Schema } = mongoose;

export const UomCollectionName: string = "uom";

export const UomSchema = new Schema({
  uomName: {
    type: String,
    trim: true,
    required: true,
  },
  AliasName: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: Boolean,
    trim: true,
    default: true,
  },
  ...StampModel,
});

export const UomModel = mongoose.model(`${UomCollectionName}`, UomSchema);

export default {
  UomModel,
  UomSchema,
  UomCollectionName,
};
