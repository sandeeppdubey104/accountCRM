export const CITY_ACTIONS = {
    CITY_SEARCH: 'CITY_SEARCH',
    CITY_SEARCH_SUCCESS: 'CITY_SEARCH_SUCCESS',
    CITY_SEARCH_ERROR: 'CITY_SEARCH_ERROR',

    CITY_UPSERT: 'CITY_UPSERT',
    CITY_UPSERT_SUCCESS: 'CITY_UPSERT_SUCCESS',
    CITY_UPSERT_ERROR: 'CITY_UPSERT_ERROR',

    CITY_EDIT: 'CITY_EDIT',

    CITY_RESET: 'CITY_RESET',
};

export const cityResetAction = () => ({
    type: CITY_ACTIONS.CITY_RESET,
});

export const citySearchAction = (payload) => ({
    type: CITY_ACTIONS.CITY_SEARCH,
    ...payload,
});

export const cityEditAction = (payload) => ({
    type: CITY_ACTIONS.CITY_EDIT,
    ...payload,
});

export const cityUpsertAction = (payload) => ({
    type: CITY_ACTIONS.CITY_UPSERT,
    ...payload,
});

export default {
    CITY_ACTIONS,
    citySearchAction,
    cityUpsertAction,
    cityEditAction,
};
