import ActiveModel from "./active-model";

export const FieldModel = {
  itemId: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  ...ActiveModel,
};

export default {
  FieldModel,
};
