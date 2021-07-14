export const REQUEST_STATUS = {
    SUCCESS: 'SUCCESS',
    PENDING: 'PENDING',
    ERROR: 'ERROR',
};
export const DEFAULT_DP = '/default-dp.png';

export const SEARCH_RECORD_PAGE_LIMIT = 50;

export const DATE_TIME_FORMAT = {
    TIMEAGO: 'TIMEAGO',
};
export const TYPES = [
    {
        value: 'PRODUCT',
        label: 'PRODUCT',
    },
    {
        value: 'SERVICE',
        label: 'SERVICE',
    }
];



export default {
    REQUEST_STATUS,
    SEARCH_RECORD_PAGE_LIMIT,
    DATE_TIME_FORMAT,
};

// STATE TYPES
const StateData = {
    NA: 'NA',
};

export const STATE_TYPES = {};

export const STATE_LIST = Object.keys(StateData).map((key) => {
    STATE_TYPES[key] = key;

    return {
        value: key,
        label: StateData[key],
    };
});

export const CITY_LIST = () => {
    return {
        value: "GKP",
        label: "GORKHPUR"
    }
}

export const CATEGORY_TYPES = [
    {
        value: 'PRODUCT',
        label: 'PRODUCT',
    },
    {
        value: 'SERVICE',
        label: 'SERVICE',
    },
];
