/* eslint-disable prefer-promise-reject-errors */
import config from 'src/config';
import { getRequest } from 'src/utils/RequestUtil';

export const googleAddressSearchAPI = function ({
    address,
}) {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';

    return getRequest({
        url,
        params: {
            address,
            key: config.googleMapsApiKey,
        },
    });
};

export default {
    googleAddressSearchAPI,
};
