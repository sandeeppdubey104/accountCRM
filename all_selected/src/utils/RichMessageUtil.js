import React from 'react';
import LinkComponent from 'src/components/LinkComponent';
import { isObject } from './CommonUtils';

export const MESSAGE_ELEMENT_TYPES = {
    LINK: 'LINK',
};

const getComponentByType = ({ type, ...props }) => {
    switch (type) {
        case MESSAGE_ELEMENT_TYPES.LINK:
            return (
                <LinkComponent
                    key={Math.random()}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...props}
                />
            );
        default:
            return null;
    }
};

export const richMessageUtil = (message) => {
    if (typeof message === 'string') {
        return message;
    }

    if (isObject(message)) {
        return getComponentByType(message);
    }

    if (Array.isArray(message)) {
        return message.map((content) => richMessageUtil(content));
    }

    return null;
};

export default {};
