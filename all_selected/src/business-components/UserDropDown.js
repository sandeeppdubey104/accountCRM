import React from 'react';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { userSearchAPI } from '../../src/api/UserApi';

const UserDropDown = ({ value, name, onChange }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Person"
        displayKeyPath={[
            'userId',
            'personalInfo.firstName',
            'personalInfo.lastName',
            'personalInfo.phone',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'userId',
            'personalInfo.firstName',
            'personalInfo.lastName',
            'personalInfo.phone',
        ]}
        api={userSearchAPI}
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
