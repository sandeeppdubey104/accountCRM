export const CUSTOMER_ACTIONS = {
    CUSTOMER_SEARCH: 'CUSTOMER_SEARCH',
    CUSTOMER_SEARCH_SUCCESS: 'CUSTOMER_SEARCH_SUCCESS',
    CUSTOMER_SEARCH_ERROR: 'CUSTOMER_SEARCH_ERROR',

    CUSTOMER_UPSERT: 'CUSTOMER_UPSERT',
    CUSTOMER_UPSERT_SUCCESS: 'CUSTOMER_UPSERT_SUCCESS',
    CUSTOMER_UPSERT_ERROR: 'CUSTOMER_UPSERT_ERROR',

    CUSTOMER_EDIT: 'CUSTOMER_EDIT',

    CUSTOMER_RESET: 'CUSTOMER_RESET',
};

export const customerResetAction = () => ({
    type: CUSTOMER_ACTIONS.CUSTOMER_RESET,
});

export const customerSearchAction = (payload) => ({
    type: CUSTOMER_ACTIONS.CUSTOMER_SEARCH,
    ...payload,
});

export const customerEditAction = (payload) => ({
    type: CUSTOMER_ACTIONS.CUSTOMER_EDIT,
    ...payload,
});

export const customerUpsertAction = (payload) => ({
    type: CUSTOMER_ACTIONS.CUSTOMER_UPSERT,
    ...payload,
});

export default {
    CUSTOMER_ACTIONS,
    customerSearchAction,
    customerUpsertAction,
    customerEditAction,
};
