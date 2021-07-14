import React from 'react';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { companySearchAPI } from '../../src/api/CompanyApi';

const CompanyDropDown = ({ value, name }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Company"
        displayKeyPath={[
            'companyName',
            'companyDisplayName',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'companyName',
            'companyDisplayName',
        ]}
        api={companySearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
    />
);

CompanyDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
};

CompanyDropDown.defaultProps = { value: '' };

export default CompanyDropDown;
