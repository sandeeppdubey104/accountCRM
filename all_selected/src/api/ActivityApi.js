/* eslint-disable prefer-promise-reject-errors */
import config from 'src/config';
import { postRequest, putRequest } from 'src/utils/RequestUtil';

export const activitySearchAPI = function (data) {
    const url = `${config.baseUrl}activity/search`;
    return postRequest({
        url,
        data,
    });
};

export const activityCreateAPI = function (data) {
    const url = `${config.baseUrl}activity`;
    return postRequest({
        url,
        data,
    });
};

export const activityUpdateAPI = function ({
    activityId,
    data,
}) {
    const url = `${config.baseUrl}activity/${activityId}`;
    return putRequest({
        url,
        data,
    });
};
