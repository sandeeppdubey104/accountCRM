import { put, call } from 'redux-saga/effects';
import { companyBranchCreateAPI, companyBranchSearchAPI, companyBranchUpdateAPI } from '../../../../src/api/CompanyBranchApi';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../../../src/constants/CommonConstants';
import { headerShowAction } from '../../../../src/containers/header-container/actions/HeaderActions';
import { takeFirstSagaUtil } from '../../../../src/utils/ReduxSagaUtils';
import { buildSearchWithNoCase } from '../../../../src/utils/CommonUtils';
import { COMPANY_BRANCH_ACTIONS } from '../actions/CompanyBranchActions';

function* search({
    where, currentPage = 0, autopopulate = true, fullTextSearch = true,
} = {}) {
    try {
        const {
            data: {
                data,
            },
        } = yield call(companyBranchSearchAPI, {
            where: buildSearchWithNoCase({
                where,
                fullTextSearch,
            }),
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
            currentPage,
            autopopulate,
        });

        yield put({
            type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_SEARCH_SUCCESS,
            data,
        });

        return data;
    }
    catch (error) {
        console.error('LOG: function*search -> error', error);
        yield put({
            type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_SEARCH_ERROR,
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
        } = yield call(companyBranchSearchAPI, {
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
            type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT_SUCCESS,
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
        } = yield call(companyBranchCreateAPI, payload);

        yield put(headerShowAction({
            data: 'Created',
        }));

        // add in reducer
        yield put({
            type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT_SUCCESS,
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
            type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT_ERROR,
        });
    }
}

function* update(companyBranchId, payload) {
    try {
        yield call(companyBranchUpdateAPI, {
            companyBranchId,
            data: payload,
        });

        yield put(headerShowAction({
            data: 'Updated',
        }));

        yield edit({ _id: companyBranchId });
    }
    catch (error) {
        console.error('LOG: upsert error', error);
        yield put(headerShowAction({
            data: error.response.data.data,
        }));

        yield put({
            type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT_ERROR,
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
    takeFirstSagaUtil(COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_SEARCH, search),
    takeFirstSagaUtil(COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT, upsert),
    takeFirstSagaUtil(COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_EDIT, edit),
];
