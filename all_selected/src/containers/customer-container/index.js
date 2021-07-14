import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { customerEditAction, customerSearchAction } from './actions/CustomerActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import CustomerForm from './CustomerForm';

const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.CustomerManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.CustomerSearch(),
    },
];
const routes = [
    {
        link: RoutingUtil.CustomerManagerUrl(),
        component: CustomerForm,//
    },
    {
        link: RoutingUtil.CustomerSearch(),
        component: () => (
            <SearchContainer
                reducer="CustomerReducer"
                dataPath="search"
                editAction={customerEditAction}
                queryParamsAsWhere
                redirectUrlOnEdit={RoutingUtil.CustomerManagerUrl()}
                action={customerSearchAction}
                hasEdit
                columns={{
                    firstName: {
                        display: 'first Name',
                    },
                    lastName: {
                        display: 'last Name',
                    },
                    phone: {
                        display: 'phone',
                    },
                    alternateNo: {
                        display: 'STATE',
                    },
                    email: {
                        display: 'CITY',
                    },
                    gender: {
                        display: 'ADDRESS',
                    },
                    gstin: {
                        display: 'PINCODE',
                    },
                    billingName: {
                        display: 'ADDRESS',
                    },
                    creditPeriod: {
                        display: 'PINCODE',
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
                        display: 'UPDATED BY',
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
];
const CustomerContainer = () => (
    <CrudLayoutContainer
        title="Customer Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


CustomerContainer.propTypes = {

};
//export default Tables;
export default CustomerContainer;
