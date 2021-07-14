import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { CompanyBranchDefaultProps } from '../../../../src/containers/branch-container/CompanyBranchPropTypes';
import { COMPANY_BRANCH_ACTIONS } from '../actions/CompanyBranchActions';

const initialState = () => ({
    currentRecord: { ...CompanyBranchDefaultProps },

    search: {
        data: [],
        currentPage: 0,
        pages: 0,
        count: 0,
    },

    upsertReqStatus: null,
    searchReqStatus: null,
});

export default (state = initialState(), action) => {
    switch (action.type) {
        // SEARCH
        case COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_RESET: {
            return {
                ...state,
                currentRecord: { ...CompanyBranchDefaultProps },
            };
        }

        default:
            return state;
    }
};
