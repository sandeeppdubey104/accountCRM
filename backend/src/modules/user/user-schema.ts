import { Schema } from "mongoose";
import maintainHistoryOfSchema from "src/lib/mongoose/history-schema";
import LocationInfoModel from "src/modules/common/model/location-info-model";
import PersonalInfoModel from "src/modules/common/model/personal-info-model";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import StampModel from "../common/model/stamp-model";
export const UserCollectionName: string = "user";

const {
  Types: { ObjectId },
} = Schema;

const frame = {
  userId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    immutable: true,
    lowercase: true,
  },
  // companyBranchId: {
  //   type: ObjectId,
  //   ref: "companybranches",
  //   autopopulate: { maxDepth: 1 },
  // },
  employmentType: {
    type: String,
  },
  userType: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  reportingManagerId: {
    type: ObjectId,
    ref: UserCollectionName,
    autopopulate: { maxDepth: 1 },
  },

  personalInfo: PersonalInfoModel,
  address: LocationInfoModel,
  password: {
    type: String,
  },
  role: {
    type: ObjectId,
    ref: "PermissionsRoles",
    autopopulate: { maxDepth: 1 },
  },
  ...ActiveModel,
  ...StampModel,
};

const { schema, modelHistory, model } = maintainHistoryOfSchema({
  frame,
  collectionName: UserCollectionName,
  plugins: [autopopulate],
});

// indexes
schema.index(
  {
    "personalInfo.mobile": 1,
  },
  { unique: true }
);

export const UserSchema = schema;
export const UserModelHistoryModel = modelHistory;
export const UserModel = model;

export default {
  UserSchema,
  UserModelHistoryModel,
  UserModel,
  UserCollectionName,
};
