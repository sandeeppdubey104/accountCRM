/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const productSearchAPI = function (data) {
    const url = `${config.baseUrl}product/search`;
    return postRequest({
        url,
        data,
    });
};

export const productCreateAPI = function (data) {
    const url = `${config.baseUrl}product`;
    return postRequest({
        url,
        data,
    });
};

export const productUpdateAPI = function ({
    productId,
    data,
}) {
    const url = `${config.baseUrl}product/${productId}`;
    return putRequest({
        url,
        data,
    });
};
