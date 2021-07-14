import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import arrayUniquePlugin from "mongoose-unique-array";
import ActiveModel from "../common/model/active-model";
import StampModel from "../common/model/stamp-model";
import { UserCollectionName } from "../user/user-schema";
import LocationInfoModel from "../common/model/location-info-model";
import { ActivityCollectionName } from "../activity/activity-schema";
import PricingModel from "../common/model/pricing-model";

const { Schema } = mongoose;

const {
  Types: { ObjectId },
} = Schema;

export const ClientCollectionName: string = "Client";

export const ClientSchema = new Schema({
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  clientDisplayName: {
    type: String,
    required: true,
    trim: true,
  },
  // email: {
  //   type: String,
  //   trim: true,
  //   unique: true,
  // },
  // phone: {
  //   type: String,
  //   trim: true,
  //   unique: true,
  // },
  authorizedPersonId: {
    type: ObjectId,
    ref: UserCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },
  address: LocationInfoModel,
  agreements: [
    {
      validFrom: Date,
      validTill: Date,
      signature: String,
      ...ActiveModel,
    },
  ],
  ...StampModel,
  ...ActiveModel,

  activities: [
    {
      activityId: {
        type: ObjectId,
        unique: false,
        ref: ActivityCollectionName,
        autopopulate: { maxDepth: 1 },
      },
      tat: {
        type: Number,
      },
      tatOgl: {
        type: Number,
      },

      ...ActiveModel,

      pricing: [PricingModel],
    },
  ],
});

ClientSchema.index(
  {
    _id: 1,
    "activities.activityId": 1,
  },
  { unique: true }
);

ClientSchema.plugin(autopopulate);
ClientSchema.plugin(arrayUniquePlugin);

export const ClientModel = mongoose.model(ClientCollectionName, ClientSchema);

export default {
  ClientModel,
  ClientSchema,
  ClientCollectionName,
};
