/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const component = ({
    field, form, ...rest
}) => (
    <>
        <input
            {...field}
            {...rest}
            value={field.value === undefined || field.value === null ? '' : field.value}
            autoComplete="off"
        />
        <ErrorMessage
            component="div"
            className="text-danger"
            name={field.name}
        />
    </>
);

component.propTypes = {
    field: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
};

const FormikInput = (props) => (
    <Field
        {...props}
        component={component}
    />
);

export default FormikInput;
