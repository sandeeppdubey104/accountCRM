export const UOM_ACTIONS = {
    UOM_SEARCH: 'UOM_SEARCH',
    UOM_SEARCH_SUCCESS: 'UOM_SEARCH_SUCCESS',
    UOM_SEARCH_ERROR: 'UOM_SEARCH_ERROR',

    UOM_UPSERT: 'UOM_UPSERT',
    UOM_UPSERT_SUCCESS: 'UOM_UPSERT_SUCCESS',
    UOM_UPSERT_ERROR: 'UOM_UPSERT_ERROR',

    UOM_EDIT: 'UOM_EDIT',

    UOM_RESET: 'UOM_RESET',
};

export const uomResetAction = () => ({
    type: UOM_ACTIONS.UOM_RESET,
});

export const uomSearchAction = (payload) => ({
    type: UOM_ACTIONS.UOM_SEARCH,
    ...payload,
});

export const uomEditAction = (payload) => ({
    type: UOM_ACTIONS.UOM_EDIT,
    ...payload,
});

export const uomUpsertAction = (payload) => ({
    type: UOM_ACTIONS.UOM_UPSERT,
    ...payload,
});

export default {
    UOM_ACTIONS,
    uomSearchAction,
    uomUpsertAction,
    uomEditAction,
};
