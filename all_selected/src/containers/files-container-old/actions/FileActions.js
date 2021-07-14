export const FILE_ACTIONS = {
    FILE_SEARCH: 'FILE_SEARCH',
    FILE_SEARCH_SUCCESS: 'FILE_SEARCH_SUCCESS',

    FILE_INSERT: 'FILE_INSERT',

    FILE_REMOVE: 'FILE_REMOVE',

};

export const fileRemoveAction = (payload) => ({
    type: FILE_ACTIONS.FILE_REMOVE,
    ...payload,
});

export const fileSearchAction = (payload) => ({
    type: FILE_ACTIONS.FILE_SEARCH,
    ...payload,
});

export const fileInsertAction = (payload) => ({
    type: FILE_ACTIONS.FILE_INSERT,
    ...payload,
});

export default {
    FILE_ACTIONS,
    fileRemoveAction,
    fileSearchAction,
    fileInsertAction,
};
