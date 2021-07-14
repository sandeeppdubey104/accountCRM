/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ToggleComponent from '../ToggleComponent';

const component = ({
    field, form, ...rest
}) => (
    <>
        <ToggleComponent
            {...field}
            {...rest}
            onChange={(option, action) => {
                form.setFieldValue(field.name, option);
            }}
        />
    </>
);

component.propTypes = {
    field: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
};

const FormikToggle = (props) => (
    <Field
        {...props}
        component={component}
    />
);

export default FormikToggle;
