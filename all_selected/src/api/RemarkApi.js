/* eslint-disable prefer-promise-reject-errors */
import config from 'src/config';
import { postRequest, deleteRequest } from 'src/utils/RequestUtil';

export const remarkSearchAPI = function (data) {
    const url = `${config.baseUrl}remark/search`;
    return postRequest({
        url,
        data,
    });
};

export const remarkCreateAPI = function (data) {
    const url = `${config.baseUrl}remark`;
    return postRequest({
        url,
        data,
    });
};

export const remarkDeleteAPI = function ({
    remarkId,
}) {
    const url = `${config.baseUrl}remark/${remarkId}`;
    return deleteRequest({
        url,
    });
};

export default {
    remarkSearchAPI,
    remarkCreateAPI,
    remarkDeleteAPI,
};
