/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const customerSearchAPI = function (data) {
    const url = `${config.baseUrl}customer/search`;
    return postRequest({
        url,
        data,
    });
};

export const customerCreateAPI = function (data) {
    const url = `${config.baseUrl}customer`;
    return postRequest({
        url,
        data,
    });
};

export const customerUpdateAPI = function ({
    customerId,
    data,
}) {
    const url = `${config.baseUrl}customer/${customerId}`;
    return putRequest({
        url,
        data,
    });
};
