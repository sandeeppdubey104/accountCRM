/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const userSearchAPI = function (data) {
    const url = `${config.baseUrl}user/search`;
    return postRequest({
        url,
        data,
    });
};

export const userCreateAPI = function (data) {
    const url = `${config.baseUrl}user`;
    return postRequest({
        url,
        data,
    });
};

export const userUpdateAPI = function ({
    userId,
    data,
}) {
    const url = `${config.baseUrl}user/${userId}`;
    return putRequest({
        url,
        data,
    });
};
