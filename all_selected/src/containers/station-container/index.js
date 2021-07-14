import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { stationEditAction, stationSearchAction } from './actions/StationActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import StationForm from './StationForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.StationManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.StationSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.StationManagerUrl(),
        component: StationForm,
    },
    {
        link: RoutingUtil.StationSearch(),
        component: () => (
            <SearchContainer
                reducer="StationReducer"
                dataPath="search"
                editAction={stationEditAction}
                redirectUrlOnEdit={RoutingUtil.StationManagerUrl()}
                action={stationSearchAction}
                hasEdit
                columns={{
                    StationName: {
                        display: 'STATION NAME',
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

const ProductContainer = () => (
    <CrudLayoutContainer
        title="Station Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


ProductContainer.propTypes = {

};
//export default Tables;
export default ProductContainer;
