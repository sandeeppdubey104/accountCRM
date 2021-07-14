/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const itemSearchAPI = function (data) {
    const url = `${config.baseUrl}item/search`;
    return postRequest({
        url,
        data,
    });
};

export const itemCreateAPI = function (data) {
    const url = `${config.baseUrl}item`;
    return postRequest({
        url,
        data,
    });
};

export const itemUpdateAPI = function ({
    itemId,
    data,
}) {
    const url = `${config.baseUrl}item/${itemId}`;
    return putRequest({
        url,
        data,
    });
};
