export const USER_ACTIONS = {
    USER_SEARCH: 'USER_SEARCH',
    USER_SEARCH_SUCCESS: 'USER_SEARCH_SUCCESS',
    USER_SEARCH_ERROR: 'USER_SEARCH_ERROR',

    USER_UPSERT: 'USER_UPSERT',
    USER_UPSERT_SUCCESS: 'USER_UPSERT_SUCCESS',
    USER_UPSERT_ERROR: 'USER_UPSERT_ERROR',

    USER_EDIT: 'USER_EDIT',

    USER_RESET: 'USER_RESET',
};

export const userResetAction = () => ({
    type: USER_ACTIONS.USER_RESET,
});

export const userSearchAction = (payload) => ({
    type: USER_ACTIONS.USER_SEARCH,
    ...payload,
});

export const userEditAction = (payload) => ({
    type: USER_ACTIONS.USER_EDIT,
    ...payload,
});

export const userUpsertAction = (payload) => ({
    type: USER_ACTIONS.USER_UPSERT,
    ...payload,
});

export default {
    USER_ACTIONS,
    userSearchAction,
    userUpsertAction,
    userEditAction,
};
