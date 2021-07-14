/* eslint-disable prefer-promise-reject-errors */
import config from 'src/config';
import { postRequest, putRequest } from 'src/utils/RequestUtil';

export const clientBranchSearchAPI = function (data) {
    const url = `${config.baseUrl}client-branch/search`;
    return postRequest({
        url,
        data,
    });
};

export const clientBranchCreateAPI = function (data) {
    const url = `${config.baseUrl}client-branch`;
    return postRequest({
        url,
        data,
    });
};

export const clientBranchUpdateAPI = function ({
    clientBranchId,
    data,
}) {
    const url = `${config.baseUrl}client-branch/${clientBranchId}`;
    return putRequest({
        url,
        data,
    });
};
