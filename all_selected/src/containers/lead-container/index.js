import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';

import { cityEditAction, citySearchAction } from './actions/CityActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import enquiryForm from './EnquiryForm';
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
        title: 'Search',
        link: RoutingUtil.leadSearch(),
    },
    {
        title: 'Manage',
        link: RoutingUtil.leadManagerUrl(),
    },
    {
        title: 'Search Follow Up',
        link: RoutingUtil.followupSearch(),
    },
];
const routes = [
    {
        link: RoutingUtil.leadSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.leadManagerUrl()}
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
                    assigned: {
                        display: 'ASSIGNED',
                    },
                    description: {
                        description: 'DESCRIPTION',
                    },
                    status: {
                        display: 'STATUS',
                    },
                    createdBy: {
                        display: 'CREATED BY',
                    },
                    createdAt: {
                        display: 'CREATED AT',
                    },
                    updatedBy: {
                        display: 'Updated By',
                        path: 'updatedBy.personalInfo.firstName',
                    },
                    updatedTs: {
                        display: 'Updated Ts',
                        type: Date,
                        format: DATE_TIME_FORMAT.TIMEAGO,
                    },
                }}
            />
        ),
    },
    {
        link: RoutingUtil.followupSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.leadManagerUrl()}
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
                    assigned: {
                        display: 'ASSIGNED',
                    },
                    description: {
                        description: 'DESCRIPTION',
                    },
                    status: {
                        display: 'STATUS',
                    },
                    createdBy: {
                        display: 'CREATED BY',
                    },
                    createdAt: {
                        display: 'CREATED AT',
                    },
                    updatedBy: {
                        display: 'Updated By',
                        path: 'updatedBy.personalInfo.firstName',
                    },
                    updatedTs: {
                        display: 'Updated Ts',
                        type: Date,
                        format: DATE_TIME_FORMAT.TIMEAGO,
                    },
                }}
            />
        ),
    },
    {
        link: RoutingUtil.leadManagerUrl(),
        component: enquiryForm,//
    },
];
const UserContainer = () => (
    <CrudLayoutContainer
        title="Lead Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


UserContainer.propTypes = {

};
//export default Tables;
export default UserContainer;
