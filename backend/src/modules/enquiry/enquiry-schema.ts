import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import StampModel from "../common/model/stamp-model";
import { CustomerCollectionName } from "../customer/customer-schema";
import { SourceCollectionName } from "../source/source-schema";
import { ProductCollectionName } from "../product/product-schema";
import { UserCollectionName } from "../user/user-schema";
import { ItemModel } from "../common/model/item-model";

const { Schema } = mongoose;

export const EnquiryCollectionName: string = "enquiry";

const {
  Types: { ObjectId },
} = Schema;

export const EnquirySchema = new Schema({
  customerDetails: {
    type: ObjectId,
    ref: CustomerCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  source: {
    type: ObjectId,
    ref: SourceCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  items: [ItemModel],
  assignedTo: {
    type: ObjectId,
    ref: UserCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  ...ActiveModel,
  ...StampModel,
});
EnquirySchema.plugin(autopopulate);
export const EnquiryModel = mongoose.model(
  `${EnquiryCollectionName}`,
  EnquirySchema
);

export default {
  EnquiryModel,
  EnquirySchema,
  EnquiryCollectionName,
};
