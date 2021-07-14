import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { CityDefaultProps } from '../../../../src/containers/branch-container/CityPropTypes';
import { CITY_ACTIONS } from '../actions/CityActions';

const initialState = () => ({
    currentRecord: { ...CityDefaultProps },

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
        case CITY_ACTIONS.CITY_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case CITY_ACTIONS.CITY_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case CITY_ACTIONS.CITY_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case CITY_ACTIONS.CITY_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case CITY_ACTIONS.CITY_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case CITY_ACTIONS.CITY_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case CITY_ACTIONS.CITY_RESET: {
            return {
                ...state,
                currentRecord: { ...CityDefaultProps },
            };
        }

        default:
            return state;
    }
};
