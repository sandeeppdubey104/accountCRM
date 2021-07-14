import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { ItemDefaultProps } from '../../../../src/containers/item-container/ItemPropTypes';
import { ITEM_ACTIONS } from '../actions/ItemActions';

const initialState = () => ({
    currentRecord: { ...ItemDefaultProps },

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
        case ITEM_ACTIONS.ITEM_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case ITEM_ACTIONS.ITEM_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case ITEM_ACTIONS.ITEM_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case ITEM_ACTIONS.ITEM_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case ITEM_ACTIONS.ITEM_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case ITEM_ACTIONS.ITEM_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case ITEM_ACTIONS.ITEM_RESET: {
            return {
                ...state,
                currentRecord: { ...ItemDefaultProps },
            };
        }

        default:
            return state;
    }
};
