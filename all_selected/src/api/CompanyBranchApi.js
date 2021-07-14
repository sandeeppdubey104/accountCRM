/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const companyBranchSearchAPI = function (data) {
    const url = `${config.baseUrl}company-branch/search`;
    return postRequest({
        url,
        data,
    });
};

export const companyBranchCreateAPI = function (data) {
    const url = `${config.baseUrl}company-branch`;
    return postRequest({
        url,
        data,
    });
};

export const companyBranchUpdateAPI = function ({
    companyBranchId,
    data,
}) {
    const url = `${config.baseUrl}company-branch/${companyBranchId}`;
    return putRequest({
        url,
        data,
    });
};
