import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { TransporterDefaultProps } from '../../../../src/containers/transporter-container/TransporterPropTypes';
import { TRANSPORTER_ACTIONS } from '../actions/TransporterActions';

const initialState = () => ({
    currentRecord: { ...TransporterDefaultProps },

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
        case TRANSPORTER_ACTIONS.TRANSPORTER_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case TRANSPORTER_ACTIONS.TRANSPORTER_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case TRANSPORTER_ACTIONS.TRANSPORTER_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case TRANSPORTER_ACTIONS.TRANSPORTER_RESET: {
            return {
                ...state,
                currentRecord: { ...TransporterDefaultProps },
            };
        }

        default:
            return state;
    }
};
