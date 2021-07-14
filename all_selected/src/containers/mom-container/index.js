import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import CrudLayoutContainer from 'src/components/crud-layout-component/CrudLayoutContainer';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';

import { cityEditAction, citySearchAction } from './actions/CityActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import momForm from './momForm';

import allowanceForm from './allowanceForm';
import quotationForm from './quotationForm';
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
        title: 'MOM',
        link: RoutingUtil.momManagerUrl(),
    },
    {
        title: 'MOM Search',
        link: RoutingUtil.momSearch(),
    },
    {
        title: 'Allowance',
        link: RoutingUtil.allowanceManagerUrl(),
    },
    {
        title: 'Allowance Search',
        link: RoutingUtil.allowanceSearch(),
    },
    {
        title: 'Quotation',
        link: RoutingUtil.quotationManagerUrl(),
    },
    {
        title: 'Quotation Search',
        link: RoutingUtil.quotationSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.momManagerUrl(),
        component: momForm,
    },
    {
        link: RoutingUtil.momSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.momManagerUrl()}
                action={citySearchAction}
                hasEdit
                columns={{
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
                    status: {
                        display: 'STATUS',
                    },
                    action: {
                        display: 'ACTION',
                    }
                }}
            />
        ),
    },
    {
        link: RoutingUtil.allowanceManagerUrl(),
        component: allowanceForm,
    },
    {
        link: RoutingUtil.allowanceSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.allowanceSearch()}
                action={citySearchAction}
                hasEdit
                columns={{
                    description: {
                        display: 'DESCRIPTION',
                    },
                    amount: {
                        display: 'AMOUNT',
                    },
                    createdBy: {
                        display: 'CREATED BY',
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
    },
    {
        link: RoutingUtil.quotationManagerUrl(),
        component: quotationForm,
    },
    {
        link: RoutingUtil.quotationSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.quotationSearch()}
                action={citySearchAction}
                hasEdit
                columns={{
                    description: {
                        display: 'DESCRIPTION',
                    },
                    attachment: {
                        display: 'ATTACHMENT',
                    },
                    createdBy: {
                        display: 'CREATED BY',
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
        title="Minutes Of Meeting Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


FallowupContainer.propTypes = {

};
//export default Tables;
export default FallowupContainer;
