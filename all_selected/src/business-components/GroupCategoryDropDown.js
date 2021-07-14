import React from 'react';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { groupCategorySearchAPI } from '../../src/api/GroupCategoryApi';

const GroupCategoryDropDown = ({ value, name, categoryType }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Group Category"
        displayKeyPath={[
            'groupCategory',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'groupCategory',
        ]}
        api={groupCategorySearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
        whereConditions={{ categoryType }}
        disabled={!categoryType}
    />
);

GroupCategoryDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    categoryType: PropTypes.string,
};

GroupCategoryDropDown.defaultProps = {
    // eslint-disable-next-line react/forbid-prop-types
    categoryType: null,
    value: '',
};

export default GroupCategoryDropDown;
