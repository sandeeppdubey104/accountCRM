import React from 'react';
import FormikSearchDropdown from 'src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from 'src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { activitySearchAPI } from 'src/api/ActivityApi';

const ActivityDropDown = ({ value, name, onChange }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Activity"
        displayKeyPath={[
            'activityName',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'activityName',
        ]}
        api={activitySearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
        onChange={onChange}
    />
);

ActivityDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

ActivityDropDown.defaultProps = {
    value: '',
    onChange: () => { },
};

export default ActivityDropDown;
