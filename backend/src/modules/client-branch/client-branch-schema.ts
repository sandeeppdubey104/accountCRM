import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import { ClientCollectionName } from "../client/client-schema";
import ActiveModel from "../common/model/active-model";
import LocationInfoModel from "../common/model/location-info-model";
import ReachModel from "../common/model/reach-model";
import StampModel from "../common/model/stamp-model";
import { UserCollectionName } from "../user/user-schema";

const { Schema } = mongoose;
export const ClientBranchCollectionName: string = "clientBranch";

const {
  Types: { ObjectId },
} = Schema;

export const ClientBranchSchema = new Schema({
  clientId: {
    type: ObjectId,
    ref: ClientCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  branchName: {
    type: String,
    trim: true,
  },
  branchDisplayName: {
    type: String,
    trim: true,
  },
  // email: {
  //   type: String,
  //   trim: true,
  // },
  // phone: {
  //   type: String,
  //   trim: true,
  //   required: true,
  // },
  authorizedPersonId: {
    type: ObjectId,
    ref: UserCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
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
  refereedById: {
    type: ObjectId,
    ref: UserCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  commission: {
    type: Number,
    default: 0,
  },
  commissionType: {
    type: String,
    trim: true,
  },
  companyType: {
    type: String,
    trim: true,
  },
  billingSourceLocation: {
    type: String,
    trim: true,
  },
  address: LocationInfoModel,

  reach: [ReachModel],

  ...ActiveModel,
  ...StampModel,
});

ClientBranchSchema.plugin(autopopulate);
export const ClientBranchModel = mongoose.model(
  ClientBranchCollectionName,
  ClientBranchSchema
);

export default {
  ClientBranchModel,
  ClientBranchSchema,
  ClientBranchCollectionName,
};
