/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import moment from 'moment';
import DateTimePickerComponent from '../../../src/components/date-time-picker-component/DateTimePickerComponent';

const component = ({
    field, form, ...rest
}) => (
    <>
        <DateTimePickerComponent
            {...field}
            {...rest}
            onChange={(value, action) => {
                const date = moment(value).toDate();
                form.setFieldValue(field.name, date);
            }}
        />
    </>
);

component.propTypes = {
    field: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
};

const FormikDateTimePicker = (props) => (
    <Field
        {...props}
        component={component}
    />
);

export default FormikDateTimePicker;
