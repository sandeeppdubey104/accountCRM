/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const groupCategorySearchAPI = function (data) {
    const url = `${config.baseUrl}group-category/search`;
    return postRequest({
        url,
        data,
    });
};

export const groupCategoryCreateAPI = function (data) {
    const url = `${config.baseUrl}group-category`;
    return postRequest({
        url,
        data,
    });
};

export const groupCategoryUpdateAPI = function ({
    groupCategoryId,
    data,
}) {
    const url = `${config.baseUrl}group-category/${groupCategoryId}`;
    return putRequest({
        url,
        data,
    });
};
