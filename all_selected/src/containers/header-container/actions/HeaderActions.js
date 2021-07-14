export const HEADER_ACTIONS = {
    HEADER_SHOW: 'HEADER_SHOW',
    HEADER_HIDE: 'HEADER_HIDE',
};

export const headerHideAction = () => ({
    type: HEADER_ACTIONS.HEADER_HIDE,
});

export const headerShowAction = (payload) => ({
    type: HEADER_ACTIONS.HEADER_SHOW,
    ...payload,
});

export default {
    HEADER_ACTIONS,
    headerHideAction,
    headerShowAction,
};
