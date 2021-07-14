import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UpsertButton from '../UpsertButton';

const FormikCreateSearchClear = ({
    isSubmitting,
    isUpdate,
    onSearch,
    onClear,
    resetForm,
    values,
}) => (
    <>
        <UpsertButton
            type="submit"
            disabled={isSubmitting}
            isUpdate={isUpdate}
        />
        <button
            onClick={() => {
                onSearch(values);
            }}
            type="button"
            className={classNames('btn btn-light ml-3', {
                'd-none': !onSearch,
            })}
        >
            Search
        </button>
        <button
            onClick={(e) => {
                onClear(e);
                resetForm();
            }}
            type="button"
            className="btn btn-link ml-3"
        >
            Clear
        </button>
    </>
);

FormikCreateSearchClear.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    onClear: PropTypes.func,
    resetForm: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    values: PropTypes.any,
    isUpdate: PropTypes.bool,
    onSearch: PropTypes.func,
};

FormikCreateSearchClear.defaultProps = {
    values: null,
    isUpdate: false,
    onSearch: null,
    onClear: () => {},
};

export default FormikCreateSearchClear;
