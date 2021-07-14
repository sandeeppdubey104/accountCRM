/* eslint-disable no-restricted-syntax */
function transformUniqueKeyBreach(error: any) {
  const messages = []
  if (error.keyValue) {
    for (const key in error.keyValue) {
      if (Object.hasOwnProperty.call(error.keyValue, key)) {
        const element = error.keyValue[key]
        messages.push(`${element} value already exits as ${key}`)
      }
    }
    return messages
  }

  return error
}

function transformErrorList(errors: any) {
  const messages = []
  if (errors) {
    for (const key in errors) {
      if (Object.hasOwnProperty.call(errors, key)) {
        const element = errors[key]
        if (element.message) {
          messages.push(element.message)
        }
        else if (element.kind === 'ObjectId') {
          messages.push(`Invalid ObjectId for ${key}`)
        }
        else {
          messages.push(element)
        }
      }
    }
    return messages
  }

  return errors
}

export default function MongooseErrorTransformer(error: any) {
  const { code, errors } = error
  if (code) {
    switch (code) {
      case 11000:
        return transformUniqueKeyBreach(error)
      default:
        return error
    }
  }
  else if (errors) {
    return transformErrorList(errors)
  }

  return error
}
