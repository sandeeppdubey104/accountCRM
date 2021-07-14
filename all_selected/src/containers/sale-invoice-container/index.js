import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import CrudLayoutContainer from 'src/components/crud-layout-component/CrudLayoutContainer';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';

import { cityEditAction, citySearchAction } from './actions/CityActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import InvoiceForm from './InvoiceForm';

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
        title: 'Sale Invoice',
        link: RoutingUtil.SaleInvoiceManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.SaleInvoiceSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.SaleInvoiceManagerUrl(),
        component: InvoiceForm,
    },
    {
        link: RoutingUtil.SaleInvoiceSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.SaleInvoiceSearch()}
                action={citySearchAction}
                hasEdit
                columns={{
                    InvoiceNo: {
                        display: 'INVOICE NO.',
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
                    state: {
                        display: 'STATE',
                    },
                    city: {
                        display: 'CITY',
                    },
                    address: {
                        display: 'ADDRESS',
                    },
                    pincode: {
                        display: 'PINCODE',
                    },
                    source: {
                        display: 'SOURCE',
                    },
                    productService: {
                        display: 'PRODUCT/SERVICE',
                    },
                    itemName: {
                        display: 'ITEM NAME',
                    },
                    Description: {
                        display: 'DESCRIPTION',
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
        title="Sale Invoice"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


FallowupContainer.propTypes = {

};
//export default Tables;
export default FallowupContainer;