import { HEADER_ACTIONS } from '../actions/HeaderActions';

const initialState = () => ({
    headerMessages: [],
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case HEADER_ACTIONS.HEADER_HIDE: {
            return {
                ...state,
                headerMessages: [],
            };
        }
        case HEADER_ACTIONS.HEADER_SHOW: {
            return {
                ...state,
                headerMessages: action.data,
            };
        }
        default:
            return state;
    }
};
