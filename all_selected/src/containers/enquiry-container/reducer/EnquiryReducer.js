import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { EnquiryDefaultProps, CopyEnquiryDefaultProps } from '../../../../src/containers/enquiry-container/EnquiryPropTypes';
import { ENQUIRY_ACTIONS } from '../actions/EnquiryActions';

const initialState = () => ({
    currentRecord: { ...EnquiryDefaultProps },

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
        case ENQUIRY_ACTIONS.ENQUIRY_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case ENQUIRY_ACTIONS.ENQUIRY_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case ENQUIRY_ACTIONS.ENQUIRY_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case ENQUIRY_ACTIONS.ENQUIRY_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case ENQUIRY_ACTIONS.ENQUIRY_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case ENQUIRY_ACTIONS.ENQUIRY_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case ENQUIRY_ACTIONS.ENQUIRY_RESET: {
            return {
                ...state,
                currentRecord: { ...EnquiryDefaultProps },
            };
        }
        case ENQUIRY_ACTIONS.ENQUIRY_CUST_CHANGE: {
            return {
                ...state,
            };
        }
        case ENQUIRY_ACTIONS.ENQUIRY_CUST_CHANGE_SUCESS: {
            return {
                ...state,
                currentRecord: {
                    ...EnquiryDefaultProps,
                    customerDetails: action.data
                }
            };
        }

        default:
            return state;
    }
};
