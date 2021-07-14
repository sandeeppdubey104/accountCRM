import {
  isEmpty, isEqual, isObject, transform, trim,
} from 'lodash-es'
import mongoose from 'mongoose'
import moment from 'moment'

const {
  Types: {
    ObjectId,
  },
} = mongoose

export function generateOTP(length = 4) {
  // Declare a digits variable
  // which stores all digits
  const digits = '0123456789'
  let OTP = ''
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP
}

/**
 * Deep diff between two object, using lodash: https://gist.github.com/Yimiprod/7ee176597fef230d1451
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
export function differenceBetweenObjects(object: any, base: any) {
  function changes(object2: any, base2: any) {
    return transform(object2, (result: any, value: any, key: any) => {
      const value1 = value instanceof ObjectId ? value.toString() : value
      const value2 = base2[key] instanceof ObjectId ? base2[key].toString() : base2[key]

      if (!isEqual(value1, value2)) {
        // eslint-disable-next-line no-param-reassign
        result[key] = (isObject(value) && isObject(base2[key])) ? changes(value, base2[key]) : value
      }
    })
  }
  return changes(object, base)
}

export const validateEmail = (mail: string) => {
  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)) {
    return true
  }
  return false
}

export const isPositiveNumber = (value: any) => Number(value) > 0
export const isNumber = (value: any) => !Number.isNaN(Number(value))
export const isValidDate = (value: any, format: string = 'YYYY-MM-DD') => {
  if (typeof value === 'string') {
    return moment(value, format).isValid()
  }

  return moment(value).isValid()
}
export const isValidString = (value: any) => !isEmpty(trim(value))

export const getIST = (format: string = 'DD-MMM-YYYY hh:mm a') => moment().utcOffset('+05:30').format(format)

export default {
  generateOTP,
  differenceBetweenObjects,
  validateEmail,
  isPositiveNumber,
  isValidString,
  isValidDate,
  getIST,
}
