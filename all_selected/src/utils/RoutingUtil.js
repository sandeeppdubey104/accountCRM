import { get } from 'lodash-es';
import { allPossiblePathOfObject } from '../../src/utils/CommonUtils';

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

// BRANCH
const branchSearch = (data) => buildSearchUrl({
    prefix: 'app/branch/search',
    data,
});
const branchManagerUrl = () => '/app/branch/manage';

// PRODUCT
const productSearch = (data) => buildSearchUrl({
    prefix: 'app/items/search',
    data,
});
const productManagerUrl = () => '/app/items/manage';
const productPricingUrl = () => '/app/items/pricing';

// LEAD
// const leadSearch = (data) => buildSearchUrl({
//     prefix: 'lead/search',
//     data,
// });
// const leadManagerUrl = () => '/lead/manage';

// ACTIVITY
const activitySearch = (data) => buildSearchUrl({
    prefix: 'activity/search',
    data,
});
const activityManagerUrl = () => '/activity/manage';

// USER
const userSearch = (data) => buildSearchUrl({
    prefix: 'app/users/search',
    data,
});
const userManagerUrl = () => '/app/users/manage';
// Customer
const CustomerSearch = (data) => buildSearchUrl({
    prefix: 'app/customer/search',
    data,
});
const CustomerManagerUrl = () => '/app/customer/manage';
// enquiry
const enquirySearch = (data) => buildSearchUrl({
    prefix: 'app/enquiry/search',
    data,
});
const enquiryManagerUrl = () => '/app/enquiry/manage';
// LEAD
const leadSearch = (data) => buildSearchUrl({
    prefix: 'app/lead/search',
    data,
});
const leadManagerUrl = () => '/app/lead/manage';
// FoLLOWUP
const followupSearch = (data) => buildSearchUrl({
    prefix: 'app/followup/search',
    data,
});
const followupManagerUrl = () => '/app/followup/manage';
const scheduledSearchUrl = () => '/app/followup/meetings';
// Minuts of meeting
const momSearch = (data) => buildSearchUrl({
    prefix: 'app/mom/search',
    data,
});
const momManagerUrl = () => '/app/mom/manage';

// Allowance
const allowanceSearch = (data) => buildSearchUrl({
    prefix: 'app/mom/allowance/search',
    data,
});
const allowanceManagerUrl = () => '/app/mom/allowance/manage';

// Quotation
const quotationSearch = (data) => buildSearchUrl({
    prefix: 'app/mom/quotation/search',
    data,
});
const quotationManagerUrl = () => '/app/mom/quotation/manage';

// Sale Order
const SaleOrderSearch = (data) => buildSearchUrl({
    prefix: 'app/sale-order/search',
    data,
});
const SaleOrderManagerUrl = () => '/app/sale-order/manage';

// Sale Contract
const SaleContractSearch = (data) => buildSearchUrl({
    prefix: 'app/sale-contract/search',
    data,
});
const SaleContractManagerUrl = () => '/app/sale-contract/manage';

// Sale Invoice
const SaleInvoiceSearch = (data) => buildSearchUrl({
    prefix: 'app/sale-invoice/search',
    data,
});
const SaleInvoiceManagerUrl = () => '/app/sale-invoice/manage';
// Receipt Voucher
const ReceiptVoucherSearch = (data) => buildSearchUrl({
    prefix: 'app/receipt-voucher/search',
    data,
});
const ReceiptVoucherManagerUrl = () => '/app/receipt-voucher/manage';

// City Master
const CitySearch = (data) => buildSearchUrl({
    prefix: 'app/city/search',
    data,
});
const CityManagerUrl = () => '/app/city/manage';

// Transporter Master
const TransporterSearch = (data) => buildSearchUrl({
    prefix: 'app/transporter/search',
    data,
});
const TransporterManagerUrl = () => '/app/transporter/manage';

// Station Master
const StationSearch = (data) => buildSearchUrl({
    prefix: 'app/station/search',
    data,
});
const StationManagerUrl = () => '/app/station/manage';

// Group Category Master
const GroupCategorySearch = (data) => buildSearchUrl({
    prefix: 'app/group-category/search',
    data,
});
const GroupCategoryManagerUrl = () => '/app/group-category/manage';

//unit of masurement Master
const uomSearch = (data) => buildSearchUrl({
    prefix: 'app/uom/search',
    data,
});
const uomManagerUrl = () => '/app/uom/manage';

//unit of masurement Master
const sourceSearch = (data) => buildSearchUrl({
    prefix: 'app/source/search',
    data,
});
const sourceManagerUrl = () => '/app/source/manage';

export default {
    openInGoogleMap,
    branchSearch,
    branchManagerUrl,
    productSearch,
    productManagerUrl,
    productPricingUrl,
    leadSearch,
    leadManagerUrl,
    activitySearch,
    activityManagerUrl,
    userSearch,
    userManagerUrl,
    CustomerSearch,
    CustomerManagerUrl,
    enquirySearch,
    enquiryManagerUrl,
    followupSearch,
    followupManagerUrl,
    scheduledSearchUrl,
    momSearch,
    momManagerUrl,
    allowanceSearch,
    allowanceManagerUrl,
    quotationSearch,
    quotationManagerUrl,
    SaleOrderSearch,
    SaleOrderManagerUrl,
    SaleContractSearch,
    SaleContractManagerUrl,
    SaleInvoiceSearch,
    SaleInvoiceManagerUrl,
    ReceiptVoucherSearch,
    ReceiptVoucherManagerUrl,
    CitySearch,
    CityManagerUrl,
    TransporterSearch,
    TransporterManagerUrl,
    StationSearch,
    StationManagerUrl,
    GroupCategorySearch,
    GroupCategoryManagerUrl,
    uomSearch,
    uomManagerUrl,
    sourceSearch,
    sourceManagerUrl,

};
