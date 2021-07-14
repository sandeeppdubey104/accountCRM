import { Schema } from 'mongoose'

export const GeoModel = {
  accuracy: Schema.Types.Mixed,
  altitude: Schema.Types.Mixed,
  altitudeAccuracy: Schema.Types.Mixed,
  heading: Schema.Types.Mixed,
  lat: {
    type: Number,
    default: 0,
  },
  lng: {
    type: Number,
    default: 0,
  },
  speed: Schema.Types.Mixed,
}

export default { GeoModel }
