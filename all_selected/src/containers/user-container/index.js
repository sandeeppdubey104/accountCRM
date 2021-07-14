import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';

import { userEditAction, userSearchAction } from './actions/UserActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import UserForm from './UserForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.userManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.userSearch(),
    },
];
const routes = [
    {
        link: RoutingUtil.userManagerUrl(),
        component: UserForm,
    },
    {
        link: RoutingUtil.userSearch(),
        component: () => (
            <SearchContainer
                reducer="UserReducer"
                dataPath="search"
                editAction={userEditAction}
                redirectUrlOnEdit={RoutingUtil.userManagerUrl()}
                action={userSearchAction}
                hasEdit
                columns={{
                    userId: {
                        display: 'USER ID',
                    },
                    companyBranchId: {
                        display: 'Branch',
                        path: 'companyBranchId.branchName',
                    },
                    designation: {
                        display: 'DESIGNATION',
                    },
                    userType: {
                        display: 'USER TYPE',
                    },
                    personalInfo: [
                        {
                            display: 'FIRST NAME',
                            path: 'personalInfo.firstName',
                        },
                        {
                            display: 'LAST NAME',
                            path: 'personalInfo.lastName',
                        },
                        {
                            display: 'PHONE',
                            path: 'personalInfo.phone',
                        },
                        {
                            display: 'ALTERNATE NUMBERS',
                            path: 'personalInfo.alternateNo',
                        },
                        {
                            display: 'DOB',
                            path: 'personalInfo.dob',
                        },
                        {
                            display: 'EMAIL',
                            path: 'personalInfo.email',
                        },
                        {
                            display: 'GENDER',
                            path: 'personalInfo.gender',
                        },
                    ],

                    active: {
                        display: 'ACTIVE',
                    },
                    createdBy: {
                        display: 'CREATED BY',
                    },
                    ts: {
                        display: 'CREATED AT',
                    },
                    updatedBy: {
                        display: 'Updated By',
                        path: 'updatedBy.personalInfo.firstName',
                    },
                    updatedTs: {
                        display: 'UPDATED TS',
                        type: Date,
                        format: DATE_TIME_FORMAT.TIMEAGO,
                    },
                }}
            />
        ),
    },
];
const UserContainer = () => (
    <CrudLayoutContainer
        title="User Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


UserContainer.propTypes = {

};
//export default Tables;
export default UserContainer;
