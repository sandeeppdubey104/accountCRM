/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const uomSearchAPI = function (data) {
    const url = `${config.baseUrl}uom/search`;
    return postRequest({
        url,
        data,
    });
};

export const uomCreateAPI = function (data) {
    const url = `${config.baseUrl}uom`;
    return postRequest({
        url,
        data,
    });
};

export const uomUpdateAPI = function ({
    uomId,
    data,
}) {
    const url = `${config.baseUrl}uom/${uomId}`;
    return putRequest({
        url,
        data,
    });
};
