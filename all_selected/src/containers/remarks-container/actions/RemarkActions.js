export const REMARK_ACTIONS = {
    REMARK_SEARCH: 'REMARK_SEARCH',
    REMARK_SEARCH_SUCCESS: 'REMARK_SEARCH_SUCCESS',

    REMARK_INSERT: 'REMARK_INSERT',

    REMARK_REMOVE: 'REMARK_REMOVE',
};

export const remarkRemoveAction = (payload) => ({
    type: REMARK_ACTIONS.REMARK_REMOVE,
    ...payload,
});

export const remarkSearchAction = (payload) => ({
    type: REMARK_ACTIONS.REMARK_SEARCH,
    ...payload,
});

export const remarkInsertAction = (payload) => ({
    type: REMARK_ACTIONS.REMARK_INSERT,
    ...payload,
});

export default {
    REMARK_ACTIONS,
    remarkRemoveAction,
    remarkSearchAction,
    remarkInsertAction,
};
