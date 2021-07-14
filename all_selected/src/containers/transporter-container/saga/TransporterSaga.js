import { put, call } from 'redux-saga/effects';
import { transporterCreateAPI, transporterSearchAPI, transporterUpdateAPI } from '../../../../src/api/TransporterApi';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../../../src/constants/CommonConstants';
import { headerShowAction } from '../../../../src/containers/header-container/actions/HeaderActions';
import { takeFirstSagaUtil } from '../../../../src/utils/ReduxSagaUtils';
import { buildSearchWithNoCase } from '../../../../src/utils/CommonUtils';
import { TRANSPORTER_ACTIONS } from '../actions/TransporterActions';

function* search({
    where, currentPage = 0, autopopulate = true, fullTextSearch = true,
} = {}) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(transporterSearchAPI, {
            where: buildSearchWithNoCase({
                where,
                fullTextSearch,
            }),
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
            currentPage,
            autopopulate,
        });

        yield put({
            type: TRANSPORTER_ACTIONS.TRANSPORTER_SEARCH_SUCCESS,
            data,
        });

        return data;
    }
    catch (error) {
        console.error('LOG: function*search -> error', error);
        yield put({
            type: TRANSPORTER_ACTIONS.TRANSPORTER_SEARCH_ERROR,
        });
        return null;
    }
}

function* edit({
    _id,
}) {
    try {
        const {
            data: {
                data: {
                    data,
                },
            },
        } = yield call(transporterSearchAPI, {
            where: {
                _id,
            },
            autopopulate: false,
        });

        if (!data || !data[0]) {
            // DATA NO FOUND
            yield put(headerShowAction({
                data: 'Unable to Edit, something when wrong',
            }));
        }
        // add in reducer
        yield put({
            type: TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT_SUCCESS,
            data: data[0],
        });
    }
    catch (error) {
        console.error('LOG: error', error);

        yield put(headerShowAction({
            data: error.response.data.data,
        }));

        yield put(headerShowAction({
            data: error.response.data.data,
        }));
    }
}

function* insert(payload) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(transporterCreateAPI, payload);

        yield put(headerShowAction({
            data: 'Created',
        }));

        // add in reducer
        yield put({
            type: TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT_SUCCESS,
            data: {
                ...payload,
                _id: data._id,
            },
        });
    }
    catch (error) {
        console.error('LOG: upsert error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));

        yield put({
            type: TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT_ERROR,
        });
    }
}

function* update(cityId, payload) {
    try {
        yield call(transporterUpdateAPI, {
            cityId,
            data: payload,
        });

        yield put(headerShowAction({
            data: 'Updated',
        }));

        yield edit({ _id: cityId });
    }
    catch (error) {
        console.error('LOG: upsert error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));

        yield put({
            type: TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT_ERROR,
        });
    }
}

function* upsert({
    _id,
    ...payload
}) {
    if (_id) {
        yield update(_id, payload);
    }
    else {
        yield insert(payload);
    }
}

export default [
    takeFirstSagaUtil(TRANSPORTER_ACTIONS.TRANSPORTER_SEARCH, search),
    takeFirstSagaUtil(TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT, upsert),
    takeFirstSagaUtil(TRANSPORTER_ACTIONS.TRANSPORTER_EDIT, edit),
];
