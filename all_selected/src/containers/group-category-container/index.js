import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { groupCategoryEditAction, groupCategorySearchAction } from './actions/GroupCategoryActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import GroupCategoryForm from './GroupCategoryForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.GroupCategoryManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.GroupCategorySearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.GroupCategoryManagerUrl(),
        component: GroupCategoryForm,
    },
    {
        link: RoutingUtil.GroupCategorySearch(),
        component: () => (
            <SearchContainer
                reducer="GroupCategoryReducer"
                dataPath="search"
                editAction={groupCategoryEditAction}
                redirectUrlOnEdit={RoutingUtil.GroupCategoryManagerUrl()}
                action={groupCategorySearchAction}
                hasEdit
                columns={{
                    categoryType: {
                        display: 'CATEGORY TYPE',
                    },
                    groupCategory: {
                        display: 'GROUP CATEGORY',
                    },
                    status: {
                        display: 'STATUS',
                    },
                    by: {
                        display: 'CREATED BY',
                        path: 'by.personalInfo.firstName',
                    },
                    ts: {
                        display: 'Ts',
                        type: Date,
                        format: DATE_TIME_FORMAT.TIMEAGO,
                    },
                    updatedTs: {
                        display: 'Updated Ts',
                        type: Date,
                        format: DATE_TIME_FORMAT.TIMEAGO,
                    },
                    action: {
                        display: 'ACTION',
                    }
                }}
            />
        ),
    }
];

const ProductContainer = () => (
    <CrudLayoutContainer
        title="Group Category Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


ProductContainer.propTypes = {

};
//export default Tables;
export default ProductContainer;
