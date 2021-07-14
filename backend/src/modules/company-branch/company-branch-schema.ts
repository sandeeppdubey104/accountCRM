import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import LocationInfoModel from "../common/model/location-info-model";
import StampModel from "../common/model/stamp-model";
import { UserCollectionName } from "../user/user-schema";
import { CompanyCollectionName } from "../company/company-schema";

const { Schema } = mongoose;
const CompanyBranchCollectionName: string = "companyBranch";

const {
  Types: { ObjectId },
} = Schema;

export const CompanyBranchSchema = new Schema({
  companyId: {
    type: ObjectId,
    ref: CompanyCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },
  branchName: {
    type: String,
    required: true,
    trim: true,
  },
  branchDisplayName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  // authorizedPersonId: {
  //   type: ObjectId,
  //   ref: "users",
  //   autopopulate: { maxDepth: 1 },
  // },
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

  address: LocationInfoModel,

  ...ActiveModel,
  ...StampModel,
});
CompanyBranchSchema.plugin(autopopulate);
export const CompanyBranchModel = mongoose.model(
  CompanyBranchCollectionName,
  CompanyBranchSchema
);

export default {
  CompanyBranchModel,
  CompanyBranchSchema,
  CompanyBranchCollectionName,
};
