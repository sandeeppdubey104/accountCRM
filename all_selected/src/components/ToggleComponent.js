import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import PropTypes from 'prop-types';
// <source/>: https://gitbrent.github.io/bootstrap-switch-button-react/
const ToggleComponent = ({
    onLabel,
    offLabel,
    onChange,
    width,
    value,
}) => (
    <BootstrapSwitchButton
        checked={value}
        onlabel={onLabel}
        offlabel={offLabel}
        onChange={onChange}
        width={width}
        onstyle="warning"
    />
);

ToggleComponent.propTypes = {
    value: PropTypes.bool,
    offLabel: PropTypes.string,
    onLabel: PropTypes.string,
    onChange: PropTypes.func,
    width: PropTypes.number,
};

ToggleComponent.defaultProps = {
    value: true,
    offLabel: 'Inactivated',
    onLabel: 'Activated',
    onChange: null,
    width: 110,
};

export default ToggleComponent;
