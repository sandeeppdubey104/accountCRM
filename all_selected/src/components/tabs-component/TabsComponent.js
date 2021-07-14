import React from 'react';
import PropTypes from 'prop-types';
import NavLinkComponent from '../NavLinkComponent';

const TabsComponent = ({
    tabs,
}) => {
    const tabsElement = tabs.map(({
        title,
        link,
    }) => (
        <li
            className="nav-item"
            key={title + link}
        >
            <NavLinkComponent
                className="nav-link"
                to={link}
            >
                {title}
            </NavLinkComponent>
        </li>
    ));
    return (
        <ul className="nav nav-tabs">
            {tabsElement}
        </ul>
    );
};

TabsComponent.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
    })).isRequired,
};

export default TabsComponent;
