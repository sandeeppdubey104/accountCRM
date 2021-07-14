export const STATION_ACTIONS = {
    STATION_SEARCH: 'STATION_SEARCH',
    STATION_SEARCH_SUCCESS: 'STATION_SEARCH_SUCCESS',
    STATION_SEARCH_ERROR: 'STATION_SEARCH_ERROR',

    STATION_UPSERT: 'STATION_UPSERT',
    STATION_UPSERT_SUCCESS: 'STATION_UPSERT_SUCCESS',
    STATION_UPSERT_ERROR: 'STATION_UPSERT_ERROR',

    STATION_EDIT: 'STATION_EDIT',

    STATION_RESET: 'STATION_RESET',
};

export const stationResetAction = () => ({
    type: STATION_ACTIONS.STATION_RESET,
});

export const stationSearchAction = (payload) => ({
    type: STATION_ACTIONS.STATION_SEARCH,
    ...payload,
});

export const stationEditAction = (payload) => ({
    type: STATION_ACTIONS.STATION_EDIT,
    ...payload,
});

export const stationUpsertAction = (payload) => ({
    type: STATION_ACTIONS.STATION_UPSERT,
    ...payload,
});

export default {
    STATION_ACTIONS,
    stationSearchAction,
    stationUpsertAction,
    stationEditAction,
};
