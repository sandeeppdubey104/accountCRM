import React from 'react';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { citySearchAPI } from '../../src/api/CityApi';

const CityDropDown = ({ value, name, stateId }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select City"
        displayKeyPath={[
            'cityName',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'cityName',
        ]}
        api={citySearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
        whereConditions={{ stateId }}
        disabled={!stateId}
    />
);

CityDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    stateId: PropTypes.string,
};

CityDropDown.defaultProps = {
    // eslint-disable-next-line react/forbid-prop-types
    stateId: null,
    value: '',
};

export default CityDropDown;
