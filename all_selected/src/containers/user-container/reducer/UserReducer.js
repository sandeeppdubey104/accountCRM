import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { UserDefaultProps } from '../../../../src/containers/user-container/UserPropTypes';
import { USER_ACTIONS } from '../actions/UserActions';

const initialState = () => ({
    currentRecord: { ...UserDefaultProps },

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
        case USER_ACTIONS.USER_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case USER_ACTIONS.USER_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case USER_ACTIONS.USER_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case USER_ACTIONS.USER_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case USER_ACTIONS.USER_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case USER_ACTIONS.USER_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case USER_ACTIONS.USER_RESET: {
            return {
                ...state,
                currentRecord: { ...UserDefaultProps },
            };
        }

        default:
            return state;
    }
};
