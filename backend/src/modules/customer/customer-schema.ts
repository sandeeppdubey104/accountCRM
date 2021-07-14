import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import StampModel from "../common/model/stamp-model";
import BankInfoModel from "src/modules/common/model/bank-info-model";
import LocationInfoModel from "src/modules/common/model/location-info-model";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const CustomerCollectionName: string = "customer";

export const CustomerSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },

  alternateNo: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  gstin: {
    type: String,
    trim: true,
  },
  billingName: {
    type: String,
    trim: true,
  },
  creditPeriod: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    trim: true,
    default: true,
  },
  bankInfo: BankInfoModel,
  address: LocationInfoModel,
  ...StampModel,
});

CustomerSchema.plugin(autopopulate);

export const CustomerModel = mongoose.model(
  `${CustomerCollectionName}`,
  CustomerSchema
);

export default {
  CustomerModel,
  CustomerSchema,
  CustomerCollectionName,
};
