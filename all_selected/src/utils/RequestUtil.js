import axios from 'axios';

const responseInterceptors = new Set();
axios.interceptors.response.use((response) => response, (error) => {
    for (const callback of responseInterceptors) {
        callback(error);
    }
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    return Promise.reject(error);
});

export const addResponseInterceptor = ({ callback }) => {
    responseInterceptors.add(callback);
    return () => {
        responseInterceptors.delete(callback);
    };
};

export const setDefaultHeaders = (headers) => {
    axios.defaults.headers.common = {
        ...axios.defaults.headers.common,
        ...headers,
    };
};

export const getRequest = ({
    url,
    params,
    headers,
}) => axios({
    method: 'get',
    url,
    params,
    headers,
});

export const postRequest = ({
    url,
    params,
    headers,
    data,
}) => axios({
    method: 'post',
    url,
    params,
    headers,
    data,
});

export const putRequest = ({
    url,
    params,
    headers,
    data,
}) => axios({
    method: 'put',
    url,
    params,
    headers,
    data,
});

export const deleteRequest = ({
    url,
    params,
    headers,
    data,
}) => axios({
    method: 'delete',
    url,
    params,
    headers,
    data,
});

export default {
    setDefaultHeaders,
    addResponseInterceptor,
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
};
