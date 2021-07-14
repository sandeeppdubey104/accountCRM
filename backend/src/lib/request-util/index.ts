import axios from 'axios'

const responseInterceptors: Set<Function> = new Set()
axios.interceptors.response.use((response) => response, (error: any) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const callback of responseInterceptors) {
    callback(error)
  }
  return Promise.reject(error)
})

export const addResponseInterceptor = ({ callback }: { callback: Function }) => {
  responseInterceptors.add(callback)
  return () => {
    responseInterceptors.delete(callback)
  }
}

export const setDefaultHeaders = (headers: any) => {
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    ...headers,
  }
}

export const getRequest = ({
  url,
  params,
  headers,
}: {
  url: string,
  params?: any,
  headers?: any,
}) => axios({
  method: 'get',
  url,
  params,
  headers,
})

export const postRequest = ({
  url,
  params,
  headers,
  data,
}
: {
  url: string,
  params?: any,
  headers?: any,
  data: any
}) => axios({
  method: 'post',
  url,
  params,
  headers,
  data,
})

export default {
  setDefaultHeaders,
  addResponseInterceptor,
  getRequest,
  postRequest,
}
