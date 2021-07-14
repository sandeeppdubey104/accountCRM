import { combineReducers } from 'redux';
import CityReducer from '../src/containers/city-container/reducer/CityReducer';
import CompanyBranchReducer from '../src/containers/branch-container/reducer/CompanyBranchReducer';
import TransporterReducer from '../src/containers/transporter-container/reducer/TransporterReducer';
import StationReducer from '../src/containers/station-container/reducer/StationReducer';
import CustomerReducer from '../src/containers/customer-container/reducer/CustomerReducer';
import GroupCategoryReducer from '../src/containers/group-category-container/reducer/GroupCategoryReducer';
import FileReducer from './containers/files-container/reducer/FileReducer';
import ItemReducer from '../src/containers/item-container/reducer/ItemReducer';
import uomReducer from '../src/containers/uom-container/reducer/uomReducer';
import UserReducer from '../src/containers/user-container/reducer/UserReducer';
import SourceReducer from '../src/containers/source-container/reducer/SourceReducer';
import EnquiryReducer from '../src/containers/enquiry-container/reducer/EnquiryReducer';

import auth from '../src/reducers/auth';
import navigation from '../src/reducers/navigation';
import alerts from '../src/reducers/alerts';
import register from '../src/reducers/register';


export default combineReducers({
    CityReducer,
    alerts,
    auth,
    navigation,
    register,
    CompanyBranchReducer,
    TransporterReducer,
    StationReducer,
    CustomerReducer,
    GroupCategoryReducer,
    ItemReducer,
    FileReducer,
    uomReducer,
    UserReducer,
    SourceReducer,
    EnquiryReducer,
});
