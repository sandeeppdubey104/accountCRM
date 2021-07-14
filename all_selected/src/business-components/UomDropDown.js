import React from 'react';
import { uomSearchAPI } from '../../src/api/uomApi';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';

const UomDropDown = ({ value, name }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Unit Of Measurement"
        displayKeyPath={[
            'uomName',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'uomName',
        ]}
        api={uomSearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
    />
);

UomDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
};

UomDropDown.defaultProps = { value: '' };

export default UomDropDown;
