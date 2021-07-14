export const ENQUIRY_ACTIONS = {
    ENQUIRY_SEARCH: 'ENQUIRY_SEARCH',
    ENQUIRY_SEARCH_SUCCESS: 'ENQUIRY_SEARCH_SUCCESS',
    ENQUIRY_SEARCH_ERROR: 'ENQUIRY_SEARCH_ERROR',

    ENQUIRY_UPSERT: 'ENQUIRY_UPSERT',
    ENQUIRY_UPSERT_SUCCESS: 'ENQUIRY_UPSERT_SUCCESS',
    ENQUIRY_UPSERT_ERROR: 'ENQUIRY_UPSERT_ERROR',

    ENQUIRY_EDIT: 'ENQUIRY_EDIT',

    ENQUIRY_RESET: 'ENQUIRY_RESET',

    ENQUIRY_CUST_CHANGE: 'ENQUIRY_CUST_CHANGE',
    ENQUIRY_CUST_CHANGE_SUCESS: 'ENQUIRY_CUST_CHANGE_SUCESS',
};

export const enquiryResetAction = () => ({
    type: ENQUIRY_ACTIONS.ENQUIRY_RESET,
});

export const enquirySearchAction = (payload) => ({
    type: ENQUIRY_ACTIONS.ENQUIRY_SEARCH,
    ...payload,
});

export const enquiryEditAction = (payload) => ({
    type: ENQUIRY_ACTIONS.ENQUIRY_EDIT,
    ...payload,
});

export const enquiryUpsertAction = (payload) => ({
    type: ENQUIRY_ACTIONS.ENQUIRY_UPSERT,
    ...payload,
});

export const customerChangeAction = (payload) => ({
    type: ENQUIRY_ACTIONS.ENQUIRY_CUST_CHANGE,
    ...payload
});

export default {
    ENQUIRY_ACTIONS,
    enquirySearchAction,
    enquiryUpsertAction,
    enquiryEditAction,
    customerChangeAction,
};
