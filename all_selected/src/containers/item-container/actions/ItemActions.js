export const ITEM_ACTIONS = {
    ITEM_SEARCH: 'ITEM_SEARCH',
    ITEM_SEARCH_SUCCESS: 'ITEM_SEARCH_SUCCESS',
    ITEM_SEARCH_ERROR: 'ITEM_SEARCH_ERROR',

    ITEM_UPSERT: 'ITEM_UPSERT',
    ITEM_UPSERT_SUCCESS: 'ITEM_UPSERT_SUCCESS',
    ITEM_UPSERT_ERROR: 'ITEM_UPSERT_ERROR',

    ITEM_EDIT: 'ITEM_EDIT',

    ITEM_RESET: 'ITEM_RESET',
};

export const itemResetAction = () => ({
    type: ITEM_ACTIONS.ITEM_RESET,
});

export const itemSearchAction = (payload) => ({
    type: ITEM_ACTIONS.ITEM_SEARCH,
    ...payload,
});

export const itemEditAction = (payload) => ({
    type: ITEM_ACTIONS.ITEM_EDIT,
    ...payload,
});

export const itemUpsertAction = (payload) => ({
    type: ITEM_ACTIONS.ITEM_UPSERT,
    ...payload,
});

export default {
    ITEM_ACTIONS,
    itemSearchAction,
    itemUpsertAction,
    itemEditAction,
};
