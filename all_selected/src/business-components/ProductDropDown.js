import React from 'react';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { itemSearchAPI } from '../../src/api/ItemApi';

const ProductDropDown = ({ value, name }) => (
    <FormikSearchDropdown
        name={name}
        placeholder="Select Product"
        displayKeyPath={[
            'itemName',
            'categoryType',
        ]}
        valueKeyPath="_id"
        defaultValueFetchByKeyPath="_id"
        whereClauseKeysPaths={[
            'itemName',
            'categoryType',
        ]}
        api={itemSearchAPI}
        apiCallAddonData={{
            pageLength: SEARCH_RECORD_PAGE_LIMIT,
        }}
        value={value}
    />
);

ProductDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    groupCategory: PropTypes.string,
};

ProductDropDown.defaultProps = {
    // eslint-disable-next-line react/forbid-prop-types
    groupCategory: null,
    value: '',
};

export default ProductDropDown;
