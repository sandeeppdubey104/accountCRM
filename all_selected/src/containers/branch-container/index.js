import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { companyBranchEditAction, companyBranchSearchAction } from './actions/CompanyBranchActions';
import SearchContainer from '../search-container/SearchContainer';
import BranchForm from './BranchForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.branchManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.branchSearch(),
    },
];
const routes = [
    {
        link: RoutingUtil.branchManagerUrl(),
        component: BranchForm,
    },
    {
        link: RoutingUtil.branchSearch(),
        component: () => (
            <SearchContainer
                reducer="CompanyBranchReducer"
                dataPath="search"
                editAction={companyBranchEditAction}
                redirectUrlOnEdit={RoutingUtil.branchManagerUrl()}
                action={companyBranchSearchAction}
                hasEdit
                columns={{
                    branchName: {
                        display: 'BRANCH NAME',
                    },
                    branchDisplayName: {
                        display: 'BRANCH DISPLAY NAME',
                    },
                    authorizedPersonId: {
                        display: 'AUTHORIZED PERSON',
                        path: 'authorizedPersonId.personalInfo.firstName',
                    },
                    state: {
                        display: 'STATE',
                        path: 'address.stateId.stateName',
                    },
                    city: {
                        display: 'CITY',
                        path: 'address.cityId.cityName',
                    },
                    pincode: {
                        display: 'PIN CODE',
                        path: 'address.pincode',
                    },
                    gstin: {
                        display: 'GST NO',
                    },
                    area: {
                        display: 'AREA',
                        path: 'address.area'
                    },
                    email: {
                        display: 'EMAIL',
                    },
                    phone: {
                        display: 'PHONE',
                    },
                    createdBy: {
                        display: 'CREATED BY',
                        path: 'by.personalInfo.firstName'
                    },
                    active: {
                        display: 'STATUS',
                    },
                    action: {
                        display: 'ACTION',
                    }
                }}
            />
        ),
    },
];

const BranchContainer = () => (
    <CrudLayoutContainer
        title="Branch Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


BranchContainer.propTypes = {

};
//export default Tables;
export default BranchContainer;
