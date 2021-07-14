import { put, call } from 'redux-saga/effects';
import { enquiryCreateAPI, enquirySearchAPI, enquiryUpdateAPI } from '../../../../src/api/EnquiryApi';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../../../src/constants/CommonConstants';
import { headerShowAction } from '../../../../src/containers/header-container/actions/HeaderActions';
import { takeFirstSagaUtil } from '../../../../src/utils/ReduxSagaUtils';
import { buildSearchWithNoCase } from '../../../../src/utils/CommonUtils';
import { ENQUIRY_ACTIONS } from '../actions/EnquiryActions';
import { customerSearchAPI } from '../../../../src/api/CustomerApi';

function* search({
    where, currentPage = 0, autopopulate = true, fullTextSearch = true,
} = {}) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(enquirySearchAPI, {
            where: buildSearchWithNoCase({
                where,
                fullTextSearch,
            }),
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
            currentPage,
            autopopulate,
        });

        yield put({
            type: ENQUIRY_ACTIONS.ENQUIRY_SEARCH_SUCCESS,
            data,
        });

        return data;
    }
    catch (error) {
        console.error('LOG: function*search -> error', error);
        yield put({
            type: ENQUIRY_ACTIONS.ENQUIRY_SEARCH_ERROR,
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
        } = yield call(enquirySearchAPI, {
            where: {
                _id,
            },
            autopopulate: true,
        });

        if (!data || !data[0]) {
            // DATA NO FOUND
            yield put(headerShowAction({
                data: 'Unable to Edit, something when wrong',
            }));
        }

        // add in reducer
        yield put({
            type: ENQUIRY_ACTIONS.ENQUIRY_UPSERT_SUCCESS,
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
        } = yield call(enquiryCreateAPI, payload);

        yield put(headerShowAction({
            data: 'Created',
        }));

        // add in reducer
        yield put({
            type: ENQUIRY_ACTIONS.ENQUIRY_UPSERT_SUCCESS,
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
            type: ENQUIRY_ACTIONS.ENQUIRY_UPSERT_ERROR,
        });
    }
}

function* update(enquiryId, payload) {
    try {
        yield call(enquiryUpdateAPI, {
            enquiryId,
            data: payload,
        });

        yield put(headerShowAction({
            data: 'Updated',
        }));

        yield edit({ _id: enquiryId });
    }
    catch (error) {
        console.error('LOG: upsert error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));

        yield put({
            type: ENQUIRY_ACTIONS.ENQUIRY_UPSERT_ERROR,
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

function* custChange({
    _id,
}) {
    try {
        const {
            data: {
                data: {
                    data,
                },
            },
        } = yield call(customerSearchAPI, {
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
            type: ENQUIRY_ACTIONS.ENQUIRY_CUST_CHANGE_SUCESS,
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

export default [
    takeFirstSagaUtil(ENQUIRY_ACTIONS.ENQUIRY_SEARCH, search),
    takeFirstSagaUtil(ENQUIRY_ACTIONS.ENQUIRY_UPSERT, upsert),
    takeFirstSagaUtil(ENQUIRY_ACTIONS.ENQUIRY_EDIT, edit),
    takeFirstSagaUtil(ENQUIRY_ACTIONS.ENQUIRY_CUST_CHANGE, custChange),
];
