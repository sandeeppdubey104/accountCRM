export const SOURCE_ACTIONS = {
    SOURCE_SEARCH: 'SOURCE_SEARCH',
    SOURCE_SEARCH_SUCCESS: 'SOURCE_SEARCH_SUCCESS',
    SOURCE_SEARCH_ERROR: 'SOURCE_SEARCH_ERROR',

    SOURCE_UPSERT: 'SOURCE_UPSERT',
    SOURCE_UPSERT_SUCCESS: 'SOURCE_UPSERT_SUCCESS',
    SOURCE_UPSERT_ERROR: 'SOURCE_UPSERT_ERROR',

    SOURCE_EDIT: 'SOURCE_EDIT',

    SOURCE_RESET: 'SOURCE_RESET',
};

export const sourceResetAction = () => ({
    type: SOURCE_ACTIONS.SOURCE_RESET,
});

export const sourceSearchAction = (payload) => ({
    type: SOURCE_ACTIONS.SOURCE_SEARCH,
    ...payload,
});

export const sourceEditAction = (payload) => ({
    type: SOURCE_ACTIONS.SOURCE_EDIT,
    ...payload,
});

export const sourceUpsertAction = (payload) => ({
    type: SOURCE_ACTIONS.SOURCE_UPSERT,
    ...payload,
});

export default {
    SOURCE_ACTIONS,
    sourceSearchAction,
    sourceUpsertAction,
    sourceEditAction,
};
