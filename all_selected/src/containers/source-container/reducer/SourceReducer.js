import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { SourceDefaultProps } from '../../../../src/containers/source-container/SourcePropTypes';
import { SOURCE_ACTIONS } from '../actions/SourceActions';

const initialState = () => ({
    currentRecord: { ...SourceDefaultProps },

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
        case SOURCE_ACTIONS.SOURCE_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case SOURCE_ACTIONS.SOURCE_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case SOURCE_ACTIONS.SOURCE_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case SOURCE_ACTIONS.SOURCE_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case SOURCE_ACTIONS.SOURCE_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case SOURCE_ACTIONS.SOURCE_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case SOURCE_ACTIONS.SOURCE_RESET: {
            return {
                ...state,
                currentRecord: { ...SourceDefaultProps },
            };
        }

        default:
            return state;
    }
};
