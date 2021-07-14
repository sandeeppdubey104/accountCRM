import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import StampModel from "../common/model/stamp-model";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const GroupCategoryCollectionName: string = "groupcategory";

export const GroupCategorySchema = new Schema({
  categoryType: {
    type: String,
    trim: true,
    required: true,
  },
  groupCategory: {
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

GroupCategorySchema.plugin(autopopulate);

export const GroupCategoryModel = mongoose.model(
  `${GroupCategoryCollectionName}`,
  GroupCategorySchema
);

export default {
  GroupCategoryModel,
  GroupCategorySchema,
  GroupCategoryCollectionName,
};
