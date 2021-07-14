import mongoose from "mongoose";
import maintainHistoryOfSchema from "src/lib/mongoose/history-schema";
import LocationInfoModel from "src/modules/common/model/location-info-model";
import PersonalInfoModel from "src/modules/common/model/personal-info-model";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import StampModel from "../common/model/stamp-model";
import CompanyBranchCollectionName from "../company-branch/company-branch-schema";

export const UserCollectionName: string = "user";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const UserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    immutable: true,
    lowercase: true,
  },
  companyBranchId: {
    type: ObjectId,
    ref: CompanyBranchCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  userType: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  personalInfo: PersonalInfoModel,
  address: LocationInfoModel,
  password: {
    type: String,
  },
  ...ActiveModel,
  ...StampModel,
});

UserSchema.plugin(autopopulate);

export const UserModel = mongoose.model(`${UserCollectionName}`, UserSchema);

export default {
  UserModel,
  UserSchema,
  UserCollectionName,
};
