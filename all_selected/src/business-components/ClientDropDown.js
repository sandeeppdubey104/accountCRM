import React from 'react';
import FormikSearchDropdown from 'src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from 'src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { clientSearchAPI } from 'src/api/ClientApi';

const ClientDropDown = ({ value, name, onChange }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Client"
        displayKeyPath={[
            'clientName',
            'clientDisplayName',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'clientName',
            'clientDisplayName',
        ]}
        api={clientSearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
        onChange={onChange}
    />
);

ClientDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

ClientDropDown.defaultProps = {
    value: '',
    onChange: () => { },
};

export default ClientDropDown;
