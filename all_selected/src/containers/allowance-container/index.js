import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import CrudLayoutContainer from 'src/components/crud-layout-component/CrudLayoutContainer';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';

import { cityEditAction, citySearchAction } from './actions/CityActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import fallowupForm from './fallowupForm';
import Test from '../../../src/Test'
// import Register from '../pages/register';
// import App from '../../../src/components/App';
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
        title: 'Manage',
        link: RoutingUtil.momManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.momSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.momManagerUrl(),
        component: fallowupForm,
    },
    {
        link: RoutingUtil.momSearch(),
        component: () => (
            <SearchContainer
                reducer="CityReducer"
                dataPath="search"
                editAction={cityEditAction}
                redirectUrlOnEdit={RoutingUtil.momManagerUrl()}
                action={citySearchAction}
                hasEdit
                columns={{
                    fallowupStatus: {
                        display: 'FALLOWUP STATUS',
                    },
                    remarks: {
                        display: 'REMARKS',
                    },
                    fallowupAction: {
                        display: 'FALLOWUP ACTION',
                    },
                    ActionDate: {
                        display: 'ACTION DATE',
                    },
                    meetingAssignTo: {
                        display: 'MEETING ASSIGN TO',
                    },
                    createdBy: {
                        display: 'CREATED BY',
                    },
                    status: {
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

const FallowupContainer = () => (
    <CrudLayoutContainer
        title="Minutes Of Meeting Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


FallowupContainer.propTypes = {

};
//export default Tables;
export default FallowupContainer;
