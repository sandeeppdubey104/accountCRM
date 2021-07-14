import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import ActiveModel from "../common/model/active-model";
import StampModel from "../common/model/stamp-model";

const { Schema } = mongoose;
const PermissionsUserCollectionName: string = "PermissionsUser";

const {
  Types: { ObjectId },
} = Schema;

export const PermissionsUserSchema = new Schema({
  _id: ObjectId,
  userId: {
    type: ObjectId,
    ref: "user",
    required: true,
    autopopulate: { maxDepth: 1 },
  },
  permissions: Schema.Types.Mixed, // {permission schema id: has access}
  ...ActiveModel,
  ...StampModel,
});

PermissionsUserSchema.plugin(autopopulate);

export const PermissionsUserModel = mongoose.model(
  PermissionsUserCollectionName,
  PermissionsUserSchema
);

export default {
  PermissionsUserModel,
  PermissionsUserSchema,
  PermissionsUserCollectionName,
};
