/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const citySearchAPI = function (data) {
    const url = `${config.baseUrl}city/search`;
    return postRequest({
        url,
        data,
    });
};

export const cityCreateAPI = function (data) {
    const url = `${config.baseUrl}city`;
    return postRequest({
        url,
        data,
    });
};

export const cityUpdateAPI = function ({
    cityId,
    data,
}) {
    const url = `${config.baseUrl}city/${cityId}`;
    return putRequest({
        url,
        data,
    });
};
