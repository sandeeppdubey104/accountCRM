import { put, call } from 'redux-saga/effects';
import { userCreateAPI, userSearchAPI, userUpdateAPI } from '../../../../src/api/UserApi';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../../../src/constants/CommonConstants';
import { headerShowAction } from '../../../../src/containers/header-container/actions/HeaderActions';
import { takeFirstSagaUtil } from '../../../../src/utils/ReduxSagaUtils';
import { buildSearchWithNoCase } from '../../../../src/utils/CommonUtils';
import { USER_ACTIONS } from '../actions/UserActions';

function* search({
    where, currentPage = 0, autopopulate = true, fullTextSearch = true,
} = {}) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(userSearchAPI, {
            where: buildSearchWithNoCase({
                where,
                fullTextSearch,
            }),
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
            currentPage,
            autopopulate,
        });

        yield put({
            type: USER_ACTIONS.USER_SEARCH_SUCCESS,
            data,
        });

        return data;
    }
    catch (error) {
        console.error('LOG: function*search -> error', error);
        yield put({
            type: USER_ACTIONS.USER_SEARCH_ERROR,
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
        } = yield call(userSearchAPI, {
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
            type: USER_ACTIONS.USER_UPSERT_SUCCESS,
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
        } = yield call(userCreateAPI, payload);

        yield put(headerShowAction({
            data: 'Created',
        }));

        // add in reducer
        yield put({
            type: USER_ACTIONS.USER_UPSERT_SUCCESS,
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
            type: USER_ACTIONS.USER_UPSERT_ERROR,
        });
    }
}

function* update(userId, payload) {
    try {
        yield call(userUpdateAPI, {
            userId,
            data: payload,
        });

        yield put(headerShowAction({
            data: 'Updated',
        }));

        yield edit({ _id: userId });
    }
    catch (error) {
        console.error('LOG: upsert error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));

        yield put({
            type: USER_ACTIONS.USER_UPSERT_ERROR,
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
    takeFirstSagaUtil(USER_ACTIONS.USER_SEARCH, search),
    takeFirstSagaUtil(USER_ACTIONS.USER_UPSERT, upsert),
    takeFirstSagaUtil(USER_ACTIONS.USER_EDIT, edit),
];
