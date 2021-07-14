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
            id="file"
            name="file"
            type="file"
            onChange={(event) => {
                form.setFieldValue(field.name, event.currentTarget.files[0]);
            }}
            {...rest}
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

const FormikFile = (props) => (
    <Field
        {...props}
        component={component}
    />
);

export default FormikFile;
