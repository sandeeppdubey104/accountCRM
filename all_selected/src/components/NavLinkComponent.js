/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavLinkComponent = React.memo(({
    children,
    onClick,
    to,
    ...rest
}) => {
    const onClickHandler = (e) => {
        if (onClick) {
            onClick(e);
            e.preventDefault();
        }
    };

    return (
        <NavLink
            to={to || ''}
            onClick={onClickHandler}
            {...rest}
        >
            {children}
        </NavLink>
    );
});

NavLinkComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
    onClick: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    to: PropTypes.any,
};

NavLinkComponent.defaultProps = {
    children: null,
    onClick: null,
    to: '',
};

export default NavLinkComponent;
