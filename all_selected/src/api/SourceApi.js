/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const sourceSearchAPI = function (data) {
    const url = `${config.baseUrl}source/search`;
    return postRequest({
        url,
        data,
    });
};

export const sourceCreateAPI = function (data) {
    const url = `${config.baseUrl}source`;
    return postRequest({
        url,
        data,
    });
};

export const sourceUpdateAPI = function ({
    sourceId,
    data,
}) {
    const url = `${config.baseUrl}source/${sourceId}`;
    return putRequest({
        url,
        data,
    });
};
