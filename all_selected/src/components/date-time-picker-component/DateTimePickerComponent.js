/* eslint-disable react/forbid-prop-types */
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DateTimePickerComponent.scss';

const DateTimePickerComponent = ({
    value,
    onChange,
    className,
    disabled,
    format,
}) => (
    <DateTimePicker
        className={classNames(className, 'date-time-picker-component')}
        disableClock
        value={value}
        clearIcon={false}
        onChange={onChange}
        format={format}
        disabled={disabled}
    />
);

DateTimePickerComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    format: PropTypes.string,
};

DateTimePickerComponent.defaultProps = {
    className: '',
    value: new Date(),
    disabled: false,
    format: 'y-MM-dd',
};

export default DateTimePickerComponent;
