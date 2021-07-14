/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const Component = ({
    field, form, ...rest
}) => {
    const [
        masked,
        setMasked,
    ] = useState(true);

    return (
        <>
            <div className="input-group mb-3">
                <div
                    className="input-group-prepend"
                    onClick={() => {
                        setMasked(!masked);
                    }}
                >
                    <span
                        className="input-group-text"
                        id="basic-addon1"
                    >
                        <i className={masked ? 'fas fa-eye-slash' : 'fas fa-eye'} />
                    </span>
                </div>
                <input
                    {...field}
                    {...rest}
                    value={field.value === undefined || field.value === null ? '' : field.value}
                    type={masked ? 'password' : 'text'}
                />
            </div>

            <ErrorMessage
                component="div"
                className="text-danger"
                name={field.name}
            />
        </>
    );
};
Component.propTypes = {
    field: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
};

const FormikPassword = (props) => (
    <Field
        {...props}
        component={Component}
    />
);

export default FormikPassword;
