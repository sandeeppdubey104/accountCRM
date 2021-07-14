import { Connection } from 'mongoose'
import AbstractController from 'src/lib/mongoose-abstract-lib/abstract-controller'
import { set } from 'lodash'
import { CaseModel, CaseSchema } from './case-schema'

class CaseController extends AbstractController {
  // CASE >> APPLICANT
  async updateCaseApplicant({
    data,
    where: {
      _id,
      applicantId,
    },
  }: {
    data: any;
    where: {
      _id: string;
      applicantId: string
    }
  }) {
    const response: any = await this.Collection.updateOne({
      _id,
      'applicants._id': applicantId,
    }, {
      $set: {
        'applicants.$[]': data,
      },
    }, { upsert: false })
    return response
  }

  async addCaseApplicant({
    data,
    where: {
      _id,
    },
  }: {
    data: any;
    where: {
      _id: string
    }
  }) {
    const response: any = await this.Collection.updateOne({
      _id,
    }, {
      $push: {
        applicants: data,
      },
    },
    { upsert: false })
    return response
  }

  //  CASE >> APPLICANT >> ACTIVITY
  async updateCaseActivity({
    data,
    where: {
      _id,
      activityId,
      applicantId,
    },
  }: {
    data: any;
    where: {
      _id: string;
      activityId: string;
      applicantId: string;
    }
  }) {
    const response: any = await this.Collection.updateOne({
      _id,
      'applicants._id': applicantId,
      'applicants.assignedActivities._id': activityId,
    }, {
      $set: {
        'applicants.assignedActivities.$[]': data,
      },
    }, { upsert: false })
    return response
  }

  async addCaseActivity({
    data,
    where: {
      _id,
      applicantId,
    },
  }: {
    data: any;
    where: {
      _id: string,
      applicantId: string
    }
  }) {
    const response: any = await this.Collection.updateOne({
      _id,
      'applicants._id': applicantId,
    }, {
      $push: {
        assignedActivities: data,
      },
    },
    { upsert: false })
    return response
  }

  // CASE >> APPLICANT >> ACTIVITY >> FIELDS
  async updateCaseActivityField({
    data,
    where: {
      _id,
      activityId,
      fieldId,
      applicantId,
    },
  }: {
    data: any;
    where: {
      _id: string;
      activityId: string;
      fieldId: string;
      applicantId: string;
    }
  }) {
    const response: any = await this.Collection.updateOne({
      _id,
      'applicants._id': applicantId,
      'applicants.assignedActivities._id': activityId,
      'applicants.assignedActivities.fields._id': fieldId,
    }, {
      $set: {
        'applicants.assignedActivities.fields.$[]': data,
      },
    }, { upsert: false })
    return response
  }

  async addCaseActivityField({
    data,
    where: {
      _id,
      activityId,
      applicantId,
    },
  }: {
    data: any;
    where: {
      _id: string;
      activityId: string;
      applicantId: string;
    }
  }) {
    const response: any = await this.Collection.updateOne({
      _id,
      'applicants._id': applicantId,
      'applicants.assignedActivities._id': activityId,
    }, {
      $push: {
        fields: data,
      },
    },
    { upsert: false })
    return response
  }

  // CASE
  async insertNewCase({
    data,
  }: {
    data: any
  }) {
    const count: number = await (this.Collection as any).count({})

    set(data, 'caseDetails.caseCode', 1000000 + count + 1)

    return this.insert({
      data,
    })
  }

  constructor(connection: Connection) {
    super(connection, CaseModel, CaseSchema)
  }
}

export default CaseController
