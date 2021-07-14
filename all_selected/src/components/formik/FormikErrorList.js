/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const FormikErrorList = ({ errors }) => (
    <div>
        {
            Object.keys(errors).map((key) => (
                <div
                    className="alert alert-danger"
                    role="alert"
                >
                    {errors[key]}
                </div>
            ))
        }
    </div>
);

FormikErrorList.propTypes = {
    errors: PropTypes.object.isRequired,
};

export default FormikErrorList;
