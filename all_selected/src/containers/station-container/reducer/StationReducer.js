import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { StationDefaultProps } from '../../../../src/containers/station-container/StationPropTypes';
import { STATION_ACTIONS } from '../actions/StationActions';

const initialState = () => ({
    currentRecord: { ...StationDefaultProps },

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
        case STATION_ACTIONS.STATION_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case STATION_ACTIONS.STATION_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case STATION_ACTIONS.STATION_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case STATION_ACTIONS.STATION_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case STATION_ACTIONS.STATION_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case STATION_ACTIONS.STATION_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case STATION_ACTIONS.STATION_RESET: {
            return {
                ...state,
                currentRecord: { ...StationDefaultProps },
            };
        }

        default:
            return state;
    }
};
