/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';
import { postRequest, deleteRequest } from '../../src/utils/RequestUtil';

export const fileSearchAPI = function (data) {
    const url = `${config.baseUrl}file/search`;
    return postRequest({
        url,
        data,
    });
};

export const fileCreateAPI = function (data) {
    const fd = new FormData();

    Object.keys(data).forEach((key) => {
        fd.append(key, data[key]);
    });

    const url = `${config.baseUrl}file`;

    return postRequest({
        url,
        data: fd,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const fileDeleteAPI = function ({
    fileId,
}) {
    const url = `${config.baseUrl}file/${fileId}`;
    return deleteRequest({
        url,
    });
};

export default {
    fileSearchAPI,
    fileCreateAPI,
    fileDeleteAPI,
};
