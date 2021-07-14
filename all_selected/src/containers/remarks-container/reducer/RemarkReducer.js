import { REQUEST_STATUS } from 'src/constants/CommonConstants';
import { REMARK_ACTIONS } from '../actions/RemarkActions';

const defaultRecord = () => ({
    currentRecord: {
        refId: '',
        text: '',
    },

    search: {
        data: [],
        currentPage: 0,
        pages: 0,
        count: 0,
    },

    insertReqStatus: null,
    searchReqStatus: null,
    removeReqStatus: null,
});

const initialState = () => ({
    // [refId]: {...defaultRecord}
});

export default (state = initialState(), action) => {
    const { refId, source } = action;
    const existingDataForRefId = state[refId] || defaultRecord();

    switch (action.type) {
        // SEARCH
        case REMARK_ACTIONS.REMARK_SEARCH: {
            return {
                ...state,
                [`${source}-${refId}`]: {
                    ...existingDataForRefId,
                    searchReqStatus: REQUEST_STATUS.PENDING,
                },
            };
        }
        case REMARK_ACTIONS.REMARK_SEARCH_SUCCESS: {
            return {
                ...state,
                [`${source}-${refId}`]: {
                    ...existingDataForRefId,
                    search: action.data,
                    searchReqStatus: REQUEST_STATUS.SUCCESS,
                },
            };
        }

        default:
            return state;
    }
};
