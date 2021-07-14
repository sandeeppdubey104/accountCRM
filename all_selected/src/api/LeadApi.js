/* eslint-disable prefer-promise-reject-errors */
import config from 'src/config';
import { postRequest, putRequest } from 'src/utils/RequestUtil';

export const leadSearchAPI = function (data) {
    const url = `${config.baseUrl}lead/search`;
    return postRequest({
        url,
        data,
    });
};

export const leadCreateAPI = function (data) {
    const url = `${config.baseUrl}lead`;
    return postRequest({
        url,
        data,
    });
};

export const leadUpdateAPI = function ({
    leadId,
    data,
}) {
    const url = `${config.baseUrl}lead/${leadId}`;
    return putRequest({
        url,
        data,
    });
};
