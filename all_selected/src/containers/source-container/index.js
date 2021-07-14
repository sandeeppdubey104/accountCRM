import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { sourceEditAction, sourceSearchAction } from './actions/SourceActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import SourceForm from './SourceForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.sourceManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.sourceSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.sourceManagerUrl(),
        component: SourceForm,
    },
    {
        link: RoutingUtil.sourceSearch(),
        component: () => (
            <SearchContainer
                reducer="SourceReducer"
                dataPath="search"
                editAction={sourceEditAction}
                redirectUrlOnEdit={RoutingUtil.sourceManagerUrl()}
                action={sourceSearchAction}
                hasEdit
                columns={{
                    SourceName: {
                        display: 'SOURCE NAME',
                    },
                    AliasName: {
                        display: 'ALIAS NAME',
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

const SourceContainer = () => (
    <CrudLayoutContainer
        title="Source Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


SourceContainer.propTypes = {

};
//export default Tables;
export default SourceContainer;
