/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const component = ({
    field,
    form,
    items,
    name,
    onChange,
    ...rest
}) => (
    <>
        <select
            {...field}
            {...rest}
            value={field.value === undefined || field.value === null ? '' : field.value}
            onChange={(e) => {
                form.setFieldValue(field.name, e.target.value);
                // eslint-disable-next-line no-unused-expressions
                onChange && onChange(e.target.value);
            }}
        >
            <option
                key="-1"
                value=""
                label="Choose..."
            />
            {
                items.map(({
                    value,
                    label,
                }) => (
                    <option
                        key={value}
                        value={value}
                        label={label}
                    />
                ))
            }
        </select>
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
    items: PropTypes.array,
};

component.defaultProps = {
    items: [],
};

const FormikSelect = (props) => (
    <Field
        {...props}
        component={component}
    />
);

export default FormikSelect;
