import React from 'react';
import { sourceSearchAPI } from '../../src/api/SourceApi';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';

const SourceDropDown = ({ value, name }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select State"
        displayKeyPath={[
            'SourceName',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'SourceName',
        ]}
        api={sourceSearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
    />
);

SourceDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
};

SourceDropDown.defaultProps = { value: '' };

export default SourceDropDown;
