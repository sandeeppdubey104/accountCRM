/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import OptionCreator from '../OptionCreator';

const component = ({
    field, form, items, ...rest
}) => (
    <>
        <OptionCreator
            {...field}
            {...rest}
            options={field.value === undefined || field.value === null ? [] : field.value}
            onChange={(option, action) => {
                form.setFieldValue(field.name, option);
            }}
        />
    </>
);

component.propTypes = {
    field: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
    items: PropTypes.array,
};

component.defaultProps = {
    items: [],
};

const FormikOptionCreator = (props) => (
    <Field
        {...props}
        component={component}
    />
);

export default FormikOptionCreator;
