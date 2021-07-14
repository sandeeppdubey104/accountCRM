import { all } from 'redux-saga/effects';
import CitySaga from '../src/containers/city-container/saga/CitySaga';
import CompanyBranchSaga from '../src/containers/branch-container/saga/CompanyBranchSaga';
import TransporterSaga from '../src/containers/transporter-container/saga/TransporterSaga';
import StationSaga from '../src/containers/station-container/saga/StationSaga';
import CustomerSaga from '../src/containers/customer-container/saga/CustomerSaga';
import GroupCategorySaga from '../src/containers/group-category-container/saga/GroupCategorySaga';
import ItemSaga from '../src/containers/item-container/saga/ItemSaga';
import FileSaga from './containers/files-container/saga/FileSaga';
import uomSaga from '../src/containers/uom-container/saga/uomSaga';
import UserSaga from '../src/containers/user-container/saga/UserSaga';

import SourceSaga from '../src/containers/source-container/saga/SourceSaga';
import EnquirySaga from '../src/containers/enquiry-container/saga/EnquirySaga';

export default function* sagas() {
    yield all([
        ...CitySaga,
        ...CompanyBranchSaga,
        ...TransporterSaga,
        ...StationSaga,
        ...CustomerSaga,
        ...GroupCategorySaga,
        ...ItemSaga,
        ...FileSaga,
        ...uomSaga,
        ...UserSaga,
        ...SourceSaga,
        ...EnquirySaga,
    ]);
}
