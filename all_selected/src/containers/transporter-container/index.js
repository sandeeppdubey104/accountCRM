import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { transporterEditAction, transporterSearchAction } from './actions/TransporterActions';
import SearchContainer from '../search-container/SearchContainer';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import TransporterForm from './TransporterForm';
const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.TransporterManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.TransporterSearch(),
    }
];
const routes = [
    {
        link: RoutingUtil.TransporterManagerUrl(),
        component: TransporterForm,
    },
    {
        link: RoutingUtil.TransporterSearch(),
        component: () => (
            <SearchContainer
                reducer="TransporterReducer"
                dataPath="search"
                editAction={transporterEditAction}
                redirectUrlOnEdit={RoutingUtil.TransporterManagerUrl()}
                action={transporterSearchAction}
                hasEdit
                columns={{
                    TransporterName: {
                        display: 'TRANSPORTER NAME',
                    },
                    AliasName: {
                        display: 'ALIAS NAME',
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
                    area: {
                        display: 'AREA',
                        path: 'address.area'
                    },
                    ContactPerson: {
                        display: 'CONTACT PERSON',
                    },
                    phone: {
                        display: 'PHONE NO',
                    },
                    email: {
                        display: 'EMAIL ID',
                    },
                    PanNo: {
                        display: 'PAN NO',
                    },
                    gstin: {
                        display: 'GST',
                    },
                    status: {
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
        title="Transporter Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


ProductContainer.propTypes = {

};
//export default Tables;
export default ProductContainer;
