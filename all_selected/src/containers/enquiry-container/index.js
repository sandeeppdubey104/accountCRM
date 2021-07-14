import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { enquiryEditAction, enquirySearchAction } from './actions/EnquiryActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import enquiryForm from './EnquiryForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.enquiryManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.enquirySearch(),
    },
];
const routes = [
    {
        link: RoutingUtil.enquiryManagerUrl(),
        component: enquiryForm,//
    },
    {
        link: RoutingUtil.enquirySearch(),
        component: () => (
            <SearchContainer
                reducer="EnquiryReducer"
                dataPath="search"
                queryParamsAsWhere
                editAction={enquiryEditAction}
                redirectUrlOnEdit={RoutingUtil.enquiryManagerUrl()}
                action={enquirySearchAction}
                hasEdit
                columns={{
                    customerDetails: [
                        {
                            display: 'FIRST NAME',
                            path: 'customerDetails.firstName',
                        },
                        {
                            display: 'LAST NAME',
                            path: 'customerDetails.lastName',
                        },
                        {
                            display: 'PHONE',
                            path: 'customerDetails.phone',
                        },
                        {
                            display: 'ALTERNATE NUMBERS',
                            path: 'customerDetails.alternateNo',
                        },
                        {
                            display: 'EMAIL',
                            path: 'customerDetails.email',
                        },
                        {
                            display: 'GENDER',
                            path: 'customerDetails.gender',
                        },
                    ],
                    source: {
                        display: 'SOURCE',
                        path: 'source.SourceName',
                    },
                    categoryType: {
                        display: 'CATEGORY TYPE',
                    },
                    groupCategory: {
                        display: 'GROUP CATEGORY',
                        path: 'groupCategory.groupCategory',
                    },
                    item: {
                        display: 'ITEM',
                        path: 'item.itemName',
                    },
                    description: {
                        display: 'DESCRIPTION',
                    },
                    active: {
                        display: 'STATUS',
                    },
                    ts: {
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
];
const EnquiryContainer = () => (
    <CrudLayoutContainer
        title="Enquiry Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


EnquiryContainer.propTypes = {

};
//export default Tables;
export default EnquiryContainer;
