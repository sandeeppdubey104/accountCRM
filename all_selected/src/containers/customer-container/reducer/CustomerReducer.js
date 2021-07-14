import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { CustomerDefaultProps } from '../../../../src/containers/customer-container/CustomerPropTypes';
import { CUSTOMER_ACTIONS } from '../actions/CustomerActions';

const initialState = () => ({
    currentRecord: { ...CustomerDefaultProps },

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
        case CUSTOMER_ACTIONS.CUSTOMER_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case CUSTOMER_ACTIONS.CUSTOMER_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case CUSTOMER_ACTIONS.CUSTOMER_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case CUSTOMER_ACTIONS.CUSTOMER_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case CUSTOMER_ACTIONS.CUSTOMER_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case CUSTOMER_ACTIONS.CUSTOMER_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case CUSTOMER_ACTIONS.CUSTOMER_RESET: {
            return {
                ...state,
                currentRecord: { ...CustomerDefaultProps },
            };
        }

        default:
            return state;
    }
};
