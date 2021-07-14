import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import { ActivityCollectionName } from "../activity/activity-schema";
import { ClientBranchCollectionName } from "../client-branch/client-branch-schema";
import { ClientCollectionName } from "../client/client-schema";
import ActiveModel from "../common/model/active-model";
import { FieldModel } from "../common/model/field-model";
import LocationInfoModel from "../common/model/location-info-model";
import PersonalInfoModel from "../common/model/personal-info-model";
import StampModel from "../common/model/stamp-model";
import { ProductCollectionName } from "../product/product-schema";
import { UserCollectionName } from "../user/user-schema";
import PricingModel from "../common/model/pricing-model";
import { GeoModel } from "../common/model/geo-model";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

export const CaseCollectionName: string = "case";

export const CaseSchema = new Schema({
  clientId: {
    type: ObjectId,
    ref: ClientCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },

  branchId: {
    type: ObjectId,
    ref: ClientBranchCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },

  productId: {
    type: ObjectId,
    ref: ProductCollectionName,
    required: true,
    autopopulate: { maxDepth: 1 },
  },

  applicationNumber: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },

  caseDetails: {
    caseName: {
      type: String,
      trim: true,
      required: true,
    },
    caseCode: {
      type: String,
      trim: true,
      unique: true,
    },
    caseReceivedOn: {
      type: Date,
    },
    caseAppointedOn: {
      type: Date,
    },
    caseClosedOn: {
      type: Date,
    },
    caseStatus: {
      type: String,
      trim: true,
    },
  },

  applicants: [
    {
      personalInfo: PersonalInfoModel,

      presentAddressSameAsPermanentAddress: Boolean,
      presentAddress: LocationInfoModel,
      permanentAddress: LocationInfoModel,

      applicantType: {
        type: String,
        trim: true,
        required: true,
      },
      relation: {
        type: String,
        trim: true,
        required: true,
      },

      assignedActivities: [
        {
          fields: [
            {
              ...FieldModel,
              value: Schema.Types.Mixed,
            },
          ],

          geo: GeoModel,
          verifiedById: {
            type: ObjectId,
            ref: UserCollectionName,
            required: true,
            autopopulate: { maxDepth: 1 },
          },

          done: {
            type: Boolean,
            default: false,
          },

          verifierId: {
            type: ObjectId,
            ref: UserCollectionName,
            required: true,
            autopopulate: { maxDepth: 1 },
          },
          activityId: {
            type: ObjectId,
            ref: ActivityCollectionName,
            required: true,
            autopopulate: { maxDepth: 1 },
          },
          tatType: {
            type: String,
            required: true,
            trim: true,
          },
          payable: {
            type: Boolean,
            default: false,
          },
          receivable: {
            type: Boolean,
            default: false,
          },
          feedbackStatus: {
            type: String,
            trim: true,
          },
          extraCost: {
            type: Number,
            default: 0,
          },
          extraCostApproved: {
            type: Boolean,
            default: false,
          },
          extraCostApprovedReason: String,

          clientPricing: [PricingModel],
          verifierPricing: [PricingModel],

          ...ActiveModel,
          ...StampModel,
        },
      ],

      ...StampModel,
    },
  ],

  ...StampModel,
});

CaseSchema.plugin(autopopulate);

export const CaseModel = mongoose.model(CaseCollectionName, CaseSchema);

export default {
  CaseModel,
  CaseSchema,
  CaseCollectionName,
};
