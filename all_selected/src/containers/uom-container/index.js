import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { uomEditAction, uomSearchAction } from './actions/uomActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import UomForm from './UomForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.uomManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.uomSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.uomManagerUrl(),
        component: UomForm,
    },
    {
        link: RoutingUtil.uomSearch(),
        component: () => (
            <SearchContainer
                reducer="uomReducer"
                dataPath="search"
                editAction={uomEditAction}
                redirectUrlOnEdit={RoutingUtil.uomManagerUrl()}
                action={uomSearchAction}
                hasEdit
                columns={{
                    uomName: {
                        display: 'UNIT OF MEASUREMENT',
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

const uomContainer = () => (
    <CrudLayoutContainer
        title="Unit Of Measurement Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


uomContainer.propTypes = {

};
//export default Tables;
export default uomContainer;
