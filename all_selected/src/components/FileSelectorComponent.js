/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const FileSelectorComponent = ({ children, ...props }) => (
    <>
        <input
            {...props}
            type="file"
            id="imgUpload"
            style={{
                display: 'none',
            }}
        />
        <label htmlFor="imgUpload">
            {children}
        </label>
    </>
);

FileSelectorComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
};
FileSelectorComponent.defaultProps = {
    children: null,
};

export default FileSelectorComponent;
