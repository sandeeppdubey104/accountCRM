/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkComponent = React.memo(React.forwardRef(({
    children,
    onClick,
    to,
    ...rest
}, ref) => {
    const onClickHandler = (e) => {
        if (!to && !rest.href) {
            e.preventDefault();
        }

        if (onClick) {
            e.preventDefault();
            onClick(e);
        }
    };

    return (
        <Link
            ref={ref}
            to={to || ''}
            onClick={onClickHandler}
            {...rest}
        >
            {children}
        </Link>
    );
}));

LinkComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
    onClick: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    to: PropTypes.any,
};

LinkComponent.defaultProps = {
    children: null,
    onClick: null,
    to: '',
};

export default LinkComponent;
