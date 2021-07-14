import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import CrudLayoutContainer from 'src/components/crud-layout-component/CrudLayoutContainer';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';

import { cityEditAction, citySearchAction } from './actions/CityActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import momForm from './momForm';

import {
    Row,
    Col,
    Table,
    Progress,
    Button,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Input,
    Label,
    Badge
} from "reactstrap";
import { Sparklines, SparklinesBars } from "react-sparklines";

import Widget from "../../components/Widget";
import s from "./Tables.modules.scss";

const tabs = [
    {
        title: 'Receipt Voucher',
        link: RoutingUtil.ReceiptVoucherManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.ReceiptVoucherSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.ReceiptVoucherManagerUrl(),
        component: momForm,
    },
    {
        link: RoutingUtil.ReceiptVoucherSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.ReceiptVoucherSearch()}
                action={citySearchAction}
                hasEdit
                columns={{
                    VoucherNo: {
                        display: 'VOUCHER NO.',
                    },
                    fullName: {
                        display: 'NAME',
                    },
                    mobile: {
                        display: 'MOBILE',
                    },
                    email: {
                        display: 'EMAIL',
                    },
                    productService: {
                        display: 'PRODUCT/SERVICE',
                    },
                    itemName: {
                        display: 'ITEM NAME',
                    },
                    amount: {
                        display: 'AMOUNT',
                    },
                    tranDate: {
                        display: 'TRANSACTION DATE',
                    },
                    PaymentMode: {
                        display: 'PAYMENT MODE',
                    },
                    BankName: {
                        display: 'BANK NAME',
                    },
                    PaymentMadeBy: {
                        display: 'PAYMENT MADE BY',
                    },
                    TransNo: {
                        display: 'TRANSACTION NO',
                    },
                    attachment: {
                        display: 'ATTACHMENT',
                    },
                    createdBy: {
                        display: 'CREATED BY',
                    },
                    ManagerApproval: {
                        display: 'MANAGER APPROVAL',
                    },
                    status: {
                        display: 'STATUS',
                    },
                    action: {
                        display: 'ACTION',
                    }
                }}
            />
        ),
    }
];

const FallowupContainer = () => (
    <CrudLayoutContainer
        title="Receipt Voucher"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


FallowupContainer.propTypes = {

};
//export default Tables;
export default FallowupContainer;
