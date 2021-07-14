import { put, call } from 'redux-saga/effects';
import { SEARCH_RECORD_PAGE_LIMIT } from 'src/constants/CommonConstants';
import { headerShowAction } from 'src/containers/header-container/actions/HeaderActions';
import { takeFirstSagaUtil } from 'src/utils/ReduxSagaUtils';
import {
    remarkSearchAPI,
    remarkCreateAPI,
    remarkDeleteAPI,
} from 'src/api/RemarkApi';
import { buildSearchWithNoCase } from 'src/utils/CommonUtils';
import { REMARK_ACTIONS } from '../actions/RemarkActions';

function* search({
    where, currentPage = 0, autopopulate = true, fullTextSearch = true,
} = {}) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(remarkSearchAPI, {
            where: buildSearchWithNoCase({
                where,
                fullTextSearch,
            }),
            sortBy: 'ts',
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
            currentPage,
            autopopulate,
        });

        yield put({
            type: REMARK_ACTIONS.REMARK_SEARCH_SUCCESS,
            data: {
                ...data,
            },
            ...where,
        });

        return data;
    }
    catch (error) {
        console.error('LOG: function*search -> error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));
        return null;
    }
}

function* insert(payload) {
    try {
        yield call(remarkCreateAPI, payload);

        yield put(headerShowAction({
            data: 'Created',
        }));

        // show message
        yield put(headerShowAction({
            data: 'Remark Added',
        }));

        // refresh
        yield search({
            where: {
                refId: payload.refId,
                source: payload.source,
            },
            fullTextSearch: false,
        });
    }
    catch (error) {
        console.error('LOG: upsert error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));
    }
}

function* remove({
    remarkId,
    refId,
    source,
}) {
    try {
        // delete
        yield call(remarkDeleteAPI, {
            remarkId,
        });

        // show message
        yield put(headerShowAction({
            data: 'Deleted',
        }));

        // refresh
        yield search({
            where: {
                refId,
                source,
            },
        });
    }
    catch (error) {
        console.error('LOG: delete error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));
    }
}

export default [
    takeFirstSagaUtil(REMARK_ACTIONS.REMARK_SEARCH, search),
    takeFirstSagaUtil(REMARK_ACTIONS.REMARK_INSERT, insert),
    takeFirstSagaUtil(REMARK_ACTIONS.REMARK_REMOVE, remove),
];
