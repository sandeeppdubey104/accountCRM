const PersonalInfoModel = {
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  alternateNo: {
    type: String,
    trim: true,
  },
  dob: Date,
  gender: {
    type: String,
    trim: true,
  },
};

export default PersonalInfoModel;
