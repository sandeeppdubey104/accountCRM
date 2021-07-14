import ActiveModel from "./active-model";
import mongoose from "mongoose";
import { ProductCollectionName } from "../../product/product-schema";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const ItemModel = {
  itemId: {
    type: ObjectId,
    ref: ProductCollectionName,
    autopopulate: { maxDepth: 1 },
  },
  ...ActiveModel,
};

export default {
  ItemModel,
};
