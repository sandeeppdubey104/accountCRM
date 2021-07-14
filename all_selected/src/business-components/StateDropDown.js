import React from 'react';
import { stateSearchAPI } from '../../src/api/StateApi';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';

const StateDropDown = ({ value, name }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select State"
        displayKeyPath={[
            'stateName',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'stateName',
        ]}
        api={stateSearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
    />
);

StateDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
};

StateDropDown.defaultProps = { value: '' };

export default StateDropDown;
