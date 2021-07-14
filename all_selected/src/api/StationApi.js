/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const stationSearchAPI = function (data) {
    const url = `${config.baseUrl}station/search`;
    return postRequest({
        url,
        data,
    });
};

export const stationCreateAPI = function (data) {
    const url = `${config.baseUrl}station`;
    return postRequest({
        url,
        data,
    });
};

export const stationUpdateAPI = function ({
    stationId,
    data,
}) {
    const url = `${config.baseUrl}station/${stationId}`;
    return putRequest({
        url,
        data,
    });
};
