import mongoose, {
  Document, Model, Schema,
} from 'mongoose'

export default function maintainHistoryOfSchema({
  frame,
  collectionName,
  plugins,
}: {
  frame: any
  collectionName: String
  plugins: any[]
}): {
    schema: Schema,
    modelHistory: Model<Document<any>>,
    model: Model<Document<any>>
  } {
  const theSchema: Schema = new Schema(frame)

  plugins.forEach((plug) => {
    theSchema.plugin(plug)
  })

  theSchema.pre('updateOne', async function preUpdate() {
    const query: any = (this as any).getQuery()

    // eslint-disable-next-line no-use-before-define
    const existing: any = (await theModel.findOne(query))?.toJSON() || {}
    try {
      // eslint-disable-next-line no-underscore-dangle
      existing.historyId = existing._id
      // eslint-disable-next-line no-underscore-dangle
      delete existing._id
      // eslint-disable-next-line no-use-before-define
      await new TheHistoryModel(existing).save()
    }
    catch (error) {
      console.error('LOG: preUpdate -> error', error)
    }
  })

  const theModel = mongoose.model(`${collectionName}`, theSchema)
  const TheHistoryModel = mongoose.model(`${collectionName}History`, new Schema({}, { strict: false }))

  return {
    schema: theSchema,
    modelHistory: TheHistoryModel,
    model: theModel,
  }
}
