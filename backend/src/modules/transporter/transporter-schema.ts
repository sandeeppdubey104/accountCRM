import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import StampModel from "../common/model/stamp-model";
import LocationInfoModel from "../common/model/location-info-model";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const TransporterCollectionName: string = "transporter";

export const TransporterSchema = new Schema({
  TransporterName: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  AliasName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  gstin: {
    type: String,
    trim: true,
  },
  ContactPerson: {
    type: String,
    trim: true,
  },
  PanNo: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    trim: true,
    default: true,
  },
  address: LocationInfoModel,
  ...StampModel,
});

TransporterSchema.plugin(autopopulate);

export const TransporterModel = mongoose.model(
  `${TransporterCollectionName}`,
  TransporterSchema
);

export default {
  TransporterModel,
  TransporterSchema,
  TransporterCollectionName,
};
