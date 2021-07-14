import { get } from 'lodash-es';
import { allPossiblePathOfObject } from 'src/utils/CommonUtils';

export const openInGoogleMap = ({ lat, lon }) => `https://maps.google.com/?q=${lat},${lon}`;

const buildSearchUrl = ({
    prefix = '',
    data = {},
} = {}) => {
    const uri = `https://example.com/${prefix}`;
    const url = new URL(uri);

    if (data) {
        const paths = allPossiblePathOfObject(data);

        paths.forEach((path) => {
            const value = get(data, path);
            if (value) {
                url.searchParams.set(path, value);
            }
        });

        // for (const param in data) {
        //     if (Object.prototype.hasOwnProperty.call(data, param)) {
        //         if (data[param]) {
        //             url.searchParams.set(param, data[param]);
        //         }
        //     }
        // }
    }
    return url.pathname + url.search;
};

// CITY
const citySearch = (data) => buildSearchUrl({
    prefix: 'city/search',
    data,
});
const cityManagerUrl = () => '/city/manage';

// PRODUCT
const productSearch = (data) => buildSearchUrl({
    prefix: 'product/search',
    data,
});
const productManagerUrl = () => '/product/manage';

// LEAD
const leadSearch = (data) => buildSearchUrl({
    prefix: 'lead/search',
    data,
});
const leadManagerUrl = () => '/lead/manage';

// ACTIVITY
const activitySearch = (data) => buildSearchUrl({
    prefix: 'activity/search',
    data,
});
const activityManagerUrl = () => '/activity/manage';

// COMPANY
const companySearch = (data) => buildSearchUrl({
    prefix: 'company/search',
    data,
});
const companyManagerUrl = () => '/company/manage';

// COMPANY BRANCH
const companyBranchManagerUrl = (data) => buildSearchUrl({
    prefix: 'company/branch',
    data,
});

// USER
const userSearch = (data) => buildSearchUrl({
    prefix: 'user/search',
    data,
});
const userManagerUrl = () => '/user/manage';

// CLIENT
const clientSearch = (data) => buildSearchUrl({
    prefix: 'client/search',
    data,
});
const clientManagerUrl = () => '/client/manage';

// CASE
const caseSearch = (data) => buildSearchUrl({
    prefix: 'case/search',
    data,
});
const caseManagerUrl = () => '/case/manage';

export default {
    openInGoogleMap,
    citySearch,
    cityManagerUrl,
    productSearch,
    productManagerUrl,
    leadSearch,
    leadManagerUrl,
    activitySearch,
    activityManagerUrl,
    companySearch,
    companyManagerUrl,
    companyBranchManagerUrl,
    userSearch,
    userManagerUrl,
    clientSearch,
    clientManagerUrl,
    caseSearch,
    caseManagerUrl,
};
