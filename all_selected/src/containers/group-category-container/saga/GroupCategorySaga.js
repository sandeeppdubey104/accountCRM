import { put, call } from 'redux-saga/effects';
import { groupCategoryCreateAPI, groupCategorySearchAPI, groupCategoryUpdateAPI } from '../../../../src/api/GroupCategoryApi';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../../../src/constants/CommonConstants';
import { headerShowAction } from '../../../../src/containers/header-container/actions/HeaderActions';
import { takeFirstSagaUtil } from '../../../../src/utils/ReduxSagaUtils';
import { buildSearchWithNoCase } from '../../../../src/utils/CommonUtils';
import { GROUP_CATEGORY_ACTIONS } from '../actions/GroupCategoryActions';

function* search({
    where, currentPage = 0, autopopulate = true, fullTextSearch = true,
} = {}) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(groupCategorySearchAPI, {
            where: buildSearchWithNoCase({
                where,
                fullTextSearch,
            }),
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
            currentPage,
            autopopulate,
        });

        yield put({
            type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_SEARCH_SUCCESS,
            data,
        });

        return data;
    }
    catch (error) {
        console.error('LOG: function*search -> error', error);
        yield put({
            type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_SEARCH_ERROR,
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
        } = yield call(groupCategorySearchAPI, {
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
            type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT_SUCCESS,
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
        } = yield call(groupCategoryCreateAPI, payload);

        yield put(headerShowAction({
            data: 'Created',
        }));

        // add in reducer
        yield put({
            type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT_SUCCESS,
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
            type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT_ERROR,
        });
    }
}

function* update(groupCategoryId, payload) {
    try {
        yield call(groupCategoryUpdateAPI, {
            groupCategoryId,
            data: payload,
        });

        yield put(headerShowAction({
            data: 'Updated',
        }));

        yield edit({ _id: groupCategoryId });
    }
    catch (error) {
        console.error('LOG: upsert error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));

        yield put({
            type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT_ERROR,
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
    takeFirstSagaUtil(GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_SEARCH, search),
    takeFirstSagaUtil(GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT, upsert),
    takeFirstSagaUtil(GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_EDIT, edit),
];
