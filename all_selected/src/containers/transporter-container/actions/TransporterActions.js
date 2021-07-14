export const TRANSPORTER_ACTIONS = {
    TRANSPORTER_SEARCH: 'TRANSPORTER_SEARCH',
    TRANSPORTER_SEARCH_SUCCESS: 'TRANSPORTER_SEARCH_SUCCESS',
    TRANSPORTER_SEARCH_ERROR: 'TRANSPORTER_SEARCH_ERROR',

    TRANSPORTER_UPSERT: 'TRANSPORTER_UPSERT',
    TRANSPORTER_UPSERT_SUCCESS: 'TRANSPORTER_UPSERT_SUCCESS',
    TRANSPORTER_UPSERT_ERROR: 'TRANSPORTER_UPSERT_ERROR',

    TRANSPORTER_EDIT: 'TRANSPORTER_EDIT',

    TRANSPORTER_RESET: 'TRANSPORTER_RESET',
};

export const transporterResetAction = () => ({
    type: TRANSPORTER_ACTIONS.TRANSPORTER_RESET,
});

export const transporterSearchAction = (payload) => ({
    type: TRANSPORTER_ACTIONS.TRANSPORTER_SEARCH,
    ...payload,
});

export const transporterEditAction = (payload) => ({
    type: TRANSPORTER_ACTIONS.TRANSPORTER_EDIT,
    ...payload,
});

export const transporterUpsertAction = (payload) => ({
    type: TRANSPORTER_ACTIONS.TRANSPORTER_UPSERT,
    ...payload,
});

export default {
    TRANSPORTER_ACTIONS,
    transporterSearchAction,
    transporterUpsertAction,
    transporterEditAction,
};
