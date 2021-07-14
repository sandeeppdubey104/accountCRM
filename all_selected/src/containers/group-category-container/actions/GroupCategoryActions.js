export const GROUP_CATEGORY_ACTIONS = {
    GROUP_CATEGORY_SEARCH: 'GROUP_CATEGORY_SEARCH',
    GROUP_CATEGORY_SEARCH_SUCCESS: 'GROUP_CATEGORY_SEARCH_SUCCESS',
    GROUP_CATEGORY_SEARCH_ERROR: 'GROUP_CATEGORY_SEARCH_ERROR',

    GROUP_CATEGORY_UPSERT: 'GROUP_CATEGORY_UPSERT',
    GROUP_CATEGORY_UPSERT_SUCCESS: 'GROUP_CATEGORY_UPSERT_SUCCESS',
    GROUP_CATEGORY_UPSERT_ERROR: 'GROUP_CATEGORY_UPSERT_ERROR',

    GROUP_CATEGORY_EDIT: 'GROUP_CATEGORY_EDIT',

    GROUP_CATEGORY_RESET: 'GROUP_CATEGORY_RESET',
};

export const groupCategoryResetAction = () => ({
    type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_RESET,
});

export const groupCategorySearchAction = (payload) => ({
    type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_SEARCH,
    ...payload,
});

export const groupCategoryEditAction = (payload) => ({
    type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_EDIT,
    ...payload,
});

export const groupCategoryUpsertAction = (payload) => ({
    type: GROUP_CATEGORY_ACTIONS.GROUP_CATEGORY_UPSERT,
    ...payload,
});

export default {
    GROUP_CATEGORY_ACTIONS,
    groupCategorySearchAction,
    groupCategoryUpsertAction,
    groupCategoryEditAction,
};
