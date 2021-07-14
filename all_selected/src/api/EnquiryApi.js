/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';//'src/config';
import { postRequest, putRequest } from '../../src/utils/RequestUtil';

export const enquirySearchAPI = function (data) {
    const url = `${config.baseUrl}enquiry/search`;
    return postRequest({
        url,
        data,
    });
};

export const enquiryCreateAPI = function (data) {
    const url = `${config.baseUrl}enquiry`;
    return postRequest({
        url,
        data,
    });
};

export const enquiryUpdateAPI = function ({
    enquiryId,
    data,
}) {
    const url = `${config.baseUrl}enquiry/${enquiryId}`;
    return putRequest({
        url,
        data,
    });
};
