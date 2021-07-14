/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const UpsertButton = ({
    isUpdate,
    ...rest
}) => (
    <button
        className={classNames({
            btn: true,
            'btn-primary': !isUpdate,
            'btn-danger': isUpdate,
        })}
        {...rest}
    >
        {isUpdate ? 'Update' : 'Submit'}
    </button>
);

UpsertButton.propTypes = {
    isUpdate: PropTypes.bool.isRequired,
};

export default UpsertButton;
