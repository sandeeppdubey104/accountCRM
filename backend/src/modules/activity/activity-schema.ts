import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import { FieldModel } from "../common/model/field-model";
import PricingModel from "../common/model/pricing-model";
import StampModel from "../common/model/stamp-model";

const { Schema } = mongoose;

export const ActivityCollectionName: string = "activity";

export const ActivitySchema = new Schema({
  activityName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },

  fields: [FieldModel],

  pricing: [PricingModel],

  ...ActiveModel,
  ...StampModel,
});

ActivitySchema.plugin(autopopulate);
export const ActivityModel = mongoose.model(
  ActivityCollectionName,
  ActivitySchema
);

export default {
  ActivityModel,
  ActivitySchema,
  ActivityCollectionName,
};
