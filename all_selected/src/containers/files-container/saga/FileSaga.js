import { put, call, takeEvery } from 'redux-saga/effects';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../../../src/constants/CommonConstants';
import { headerShowAction } from '../../../../src/containers/header-container/actions/HeaderActions';
import { takeFirstSagaUtil } from '../../../../src/utils/ReduxSagaUtils';
import {
    fileSearchAPI,
    fileCreateAPI,
    fileDeleteAPI,
} from '../../../../src/api/FileApi';
import { buildSearchWithNoCase } from '../../../../src/utils/CommonUtils';
import { FILE_ACTIONS } from '../actions/FileActions';

function* search({
    where,
    currentPage = 0,
    autopopulate = true,
    fullTextSearch = true,
} = {}) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(fileSearchAPI, {
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
            type: FILE_ACTIONS.FILE_SEARCH_SUCCESS,
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
        yield call(fileCreateAPI, payload);

        yield put(headerShowAction({
            data: 'Created',
        }));

        // show message
        yield put(headerShowAction({
            data: 'File Added',
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
    fileId,
    refId,
    source,
}) {
    try {
        // delete
        yield call(fileDeleteAPI, {
            fileId,
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
    takeEvery(FILE_ACTIONS.FILE_SEARCH, search),
    takeFirstSagaUtil(FILE_ACTIONS.FILE_INSERT, insert),
    takeFirstSagaUtil(FILE_ACTIONS.FILE_REMOVE, remove),
];
