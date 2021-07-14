/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const companySearchAPI = function (data) {
    const url = `${config.baseUrl}company/search`;
    return postRequest({
        url,
        data,
    });
};

export const companyCreateAPI = function (data) {
    const url = `${config.baseUrl}company`;
    return postRequest({
        url,
        data,
    });
};

export const companyUpdateAPI = function ({
    companyId,
    data,
}) {
    const url = `${config.baseUrl}company/${companyId}`;
    return putRequest({
        url,
        data,
    });
};
