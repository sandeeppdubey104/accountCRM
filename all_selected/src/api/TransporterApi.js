/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const transporterSearchAPI = function (data) {
    const url = `${config.baseUrl}transporter/search`;
    return postRequest({
        url,
        data,
    });
};

export const transporterCreateAPI = function (data) {
    const url = `${config.baseUrl}transporter`;
    return postRequest({
        url,
        data,
    });
};

export const transporterUpdateAPI = function ({
    transporterId,
    data,
}) {
    const url = `${config.baseUrl}transporter/${transporterId}`;
    return putRequest({
        url,
        data,
    });
};
