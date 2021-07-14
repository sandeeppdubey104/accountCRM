export const COMPANY_BRANCH_ACTIONS = {
    COMPANY_BRANCH_SEARCH: 'COMPANY_BRANCH_SEARCH',
    COMPANY_BRANCH_SEARCH_SUCCESS: 'COMPANY_BRANCH_SEARCH_SUCCESS',
    COMPANY_BRANCH_SEARCH_ERROR: 'COMPANY_BRANCH_SEARCH_ERROR',

    COMPANY_BRANCH_UPSERT: 'COMPANY_BRANCH_UPSERT',
    COMPANY_BRANCH_UPSERT_SUCCESS: 'COMPANY_BRANCH_UPSERT_SUCCESS',
    COMPANY_BRANCH_UPSERT_ERROR: 'COMPANY_BRANCH_UPSERT_ERROR',

    COMPANY_BRANCH_EDIT: 'COMPANY_BRANCH_EDIT',

    COMPANY_BRANCH_RESET: 'COMPANY_BRANCH_RESET',
};

export const companyBranchResetAction = () => ({
    type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_RESET,
});

export const companyBranchSearchAction = (payload) => ({
    type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_SEARCH,
    ...payload,
});

export const companyBranchEditAction = (payload) => ({
    type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_EDIT,
    ...payload,
});

export const companyBranchUpsertAction = (payload) => ({
    type: COMPANY_BRANCH_ACTIONS.COMPANY_BRANCH_UPSERT,
    ...payload,
});

export default {
    COMPANY_BRANCH_ACTIONS,
    companyBranchSearchAction,
    companyBranchUpsertAction,
    companyBranchEditAction,
};
