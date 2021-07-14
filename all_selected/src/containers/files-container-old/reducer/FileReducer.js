import { REQUEST_STATUS } from 'src/constants/CommonConstants';
import { FILE_ACTIONS } from '../actions/FileActions';

const defaultRecord = () => ({
    currentRecord: {
        refId: '',
        source: '',
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
        case FILE_ACTIONS.FILE_SEARCH: {
            return {
                ...state,
                [`${source}-${refId}`]: {
                    ...existingDataForRefId,
                    searchReqStatus: REQUEST_STATUS.PENDING,
                },
            };
        }
        case FILE_ACTIONS.FILE_SEARCH_SUCCESS: {
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
