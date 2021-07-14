import ActiveModel from './active-model'

const PricingModel = {
  kmFrom: {
    type: Number,
    required: true,
  },
  kmTill: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  conveyancePerKm: {
    type: Number,
    required: true,
  },
}

export default PricingModel
