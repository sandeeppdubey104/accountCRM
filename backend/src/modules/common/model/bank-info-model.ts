import mongoose from "mongoose";

const BankInfoModel = {
  pancard: {
    type: String,
    trim: true,
  },
  accountNumber: {
    type: String,
    trim: true,
  },
  ifisc: {
    type: String,
    trim: true,
  },
  bankName: {
    type: String,
    trim: true,
  },
};

export default BankInfoModel;
