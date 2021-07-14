import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import StampModel from "../common/model/stamp-model";
import recurringPrice from "../common/model/recurring-price-model";
import { GroupCategoryCollectionName } from "../group-category/group-category-schema";
import { UomCollectionName } from "../uom/uom-schema";

const { Schema } = mongoose;

export const ProductCollectionName: string = "item";

const {
  Types: { ObjectId },
} = Schema;

export const ProductSchema = new Schema({
  categoryType: {
    type: String,
    required: true,
    trim: true,
  },
  groupCategory: {
    type: ObjectId,
    ref: GroupCategoryCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  uom: {
    type: ObjectId,
    ref: UomCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  gstRate: {
    type: Number,
    required: true,
    trim: true,
  },
  hsnCode: {
    type: String,
    required: true,
    trim: true,
  },
  isRecurringPrice: {
    type: Boolean,
    default: false,
  },
  recurringPrice: recurringPrice,
  ...ActiveModel,
  ...StampModel,
});
ProductSchema.plugin(autopopulate);
export const ProductModel = mongoose.model(
  `${ProductCollectionName}`,
  ProductSchema
);

export default {
  ProductModel,
  ProductSchema,
  ProductCollectionName,
};
