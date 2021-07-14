import React from 'react';
import PropTypes from 'prop-types';
import LinkComponent from './LinkComponent';

const ToggleLinkComponent = ({
    onChange,
    value,
    offLabel,
    onLabel,
}) => {
    if (value) {
        return (
            <LinkComponent
                onClick={() => onChange(false)}
            >
                {onLabel}
            </LinkComponent>
        );
    }

    return (
        <LinkComponent
            onClick={() => onChange(true)}
            className="text-danger"
        >
            {offLabel}
        </LinkComponent>
    );
};

ToggleLinkComponent.propTypes = {
    value: PropTypes.bool,
    offLabel: PropTypes.string,
    onLabel: PropTypes.string,
    onChange: PropTypes.func,
};

ToggleLinkComponent.defaultProps = {
    value: true,
    offLabel: 'Inactive',
    onLabel: 'Active',
    onChange: () => { },
};

export default ToggleLinkComponent;
