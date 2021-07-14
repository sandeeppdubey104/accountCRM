import React from 'react';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { customerSearchAPI } from '../../src/api/CustomerApi';

const UserDropDown = ({ value, name, onChange }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Customer"
        displayKeyPath={[
            'email',
            'firstName',
            'lastName',
            'phone',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'email',
            'firstName',
            'lastName',
            'phone',
        ]}
        api={customerSearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
        onChange={onChange}
    />
);

UserDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

UserDropDown.defaultProps = {
    value: '',
    onChange: () => { },
};

export default UserDropDown;
