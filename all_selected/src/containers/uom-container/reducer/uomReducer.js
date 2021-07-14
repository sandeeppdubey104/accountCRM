import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { uomDefaultProps } from '../../../../src/containers/uom-container/uomPropTypes';
import { UOM_ACTIONS } from '../actions/uomActions';

const initialState = () => ({
    currentRecord: { ...uomDefaultProps },

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
        case UOM_ACTIONS.UOM_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case UOM_ACTIONS.UOM_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case UOM_ACTIONS.UOM_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case UOM_ACTIONS.UOM_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case UOM_ACTIONS.UOM_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case UOM_ACTIONS.UOM_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case UOM_ACTIONS.UOM_RESET: {
            return {
                ...state,
                currentRecord: { ...uomDefaultProps },
            };
        }

        default:
            return state;
    }
};
