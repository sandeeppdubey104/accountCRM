import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import BankInfoModel from "../common/model/bank-info-model";
import LocationInfoModel from "../common/model/location-info-model";
import StampModel from "../common/model/stamp-model";
import { UserCollectionName } from "../user/user-schema";

const { Schema } = mongoose;
export const CompanyCollectionName: string = "Company";

const {
  Types: { ObjectId },
} = Schema;

export const CompanySchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  companyDisplayName: {
    type: String,
    required: true,
    trim: true,
  },
  companyType: {
    type: String,
    trim: true,
  },
  cin: {
    type: String,
    trim: true,
  },
  llpn: {
    type: String,
    trim: true,
  },
  pan: {
    type: String,
    trim: true,
  },
  gstin: {
    type: String,
    trim: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // phone: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  authorizedPersonId: {
    type: ObjectId,
    ref: UserCollectionName,
    autopopulate: { maxDepth: 1 },
  },

  bankInfo: BankInfoModel,
  address: LocationInfoModel,

  ...ActiveModel,
  ...StampModel,
});

CompanySchema.plugin(autopopulate);
export const CompanyModel = mongoose.model(
  CompanyCollectionName,
  CompanySchema
);

export default {
  CompanyModel,
  CompanySchema,
  CompanyCollectionName,
};
