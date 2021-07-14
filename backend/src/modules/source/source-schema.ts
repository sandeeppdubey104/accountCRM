import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import StampModel from "../common/model/stamp-model";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const SourceCollectionName: string = "source";

export const SourceSchema = new Schema({
  SourceName: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  AliasName: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    trim: true,
    default: true,
  },

  ...StampModel,
});

SourceSchema.plugin(autopopulate);

export const SourceModel = mongoose.model(
  `${SourceCollectionName}`,
  SourceSchema
);

export default {
  SourceModel,
  SourceSchema,
  SourceCollectionName,
};
