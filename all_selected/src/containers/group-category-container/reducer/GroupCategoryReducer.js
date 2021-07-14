import { REQUEST_STATUS } from '../../../../src/constants/CommonConstants';
import { GroupCategoryDefaultProps } from '../../../../src/containers/group-category-container/GroupCategoryPropTypes';
import { GROUP_CATEGORY_ACTIONS } from '../actions/GroupCategoryActions';

const initialState = () => ({
    currentRecord: { ...GroupCategoryDefaultProps },

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
        case GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_SEARCH: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_SEARCH_SUCCESS: {
            return {
                ...state,
                search: action.data,
                searchReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_SEARCH_ERROR: {
            return {
                ...state,
                searchReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // UPSERT
        case GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.PENDING,
            };
        }
        case GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT_SUCCESS: {
            return {
                ...state,
                currentRecord: action.data,
                upsertReqStatus: REQUEST_STATUS.SUCCESS,
            };
        }
        case GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT_ERROR: {
            return {
                ...state,
                upsertReqStatus: REQUEST_STATUS.ERROR,
            };
        }

        // RESET
        case GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_RESET: {
            return {
                ...state,
                currentRecord: { ...GroupCategoryDefaultProps },
            };
        }

        default:
            return state;
    }
};
