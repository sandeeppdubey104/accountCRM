import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { cityEditAction, citySearchAction } from './actions/CityActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import CityForm from './CityForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.CityManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.CitySearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.CityManagerUrl(),
        component: CityForm,
    },
    {
        link: RoutingUtil.CitySearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.CityManagerUrl()}
                action={citySearchAction}
                hasEdit
                columns={{
                    stateId: {
                        display: 'State',
                        path: 'stateId.stateName',
                    },
                    cityType: {
                        display: 'City Type',
                    },
                    cityName: {
                        display: 'City Name',
                    },
                    reach: {
                        display: 'STATUS',
                    },
                    by: {
                        display: 'CREATED BY',
                        path: 'by.personalInfo.firstName',
                    },
                    updatedBy: {
                        display: 'Updated By',
                        path: 'updatedBy.personalInfo.firstName',
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
        title="City Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


ProductContainer.propTypes = {

};
//export default Tables;
export default ProductContainer;
