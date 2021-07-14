import React from 'react';
import FormikSearchDropdown from '../../src/components/formik/FormikSearchDropdown/FormikSearchDropdown';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../src/constants/CommonConstants';
import PropTypes from 'prop-types';
import { companyBranchSearchAPI } from '../../src/api/CompanyBranchApi';

const CompanyBranchDropDown = ({
    value,
    name,
    clientId,
    companyBranch,
    isCompanyBranchRequired,
}) => {
    let whereConditions = {
        // clientId,
    };

    if (isCompanyBranchRequired) {
        whereConditions = {
            ...whereConditions,
            'address.companyBranch': companyBranch,
        };
    }

    return (
        <FormikSearchDropdown
            name={name}
            placeholder="Select Company Branch"
            displayKeyPath={[
                'branchName',
            ]}
            valueKeyPath="_id"
            defaultValueFetchByKeyPath="_id"
            whereClauseKeysPaths={[
                'branchName',
            ]}
            api={companyBranchSearchAPI}
            apiCallAddonData={{
                pageLength: SEARCH_RECORD_PAGE_LIMIT,
            }}
            value={value}
        // whereConditions={whereConditions}
        // disabled={!clientId || (isCompanyBranchRequired && !companyBranch)}
        />
    );
};
CompanyBranchDropDown.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    clientId: PropTypes.string,
    companyBranch: PropTypes.string,
    isCompanyBranchRequired: PropTypes.bool,
};

CompanyBranchDropDown.defaultProps = {
    // eslint-disable-next-line react/forbid-prop-types
    clientId: null,
    companyBranch: null,
    value: '',
    isCompanyBranchRequired: true,
};

export default CompanyBranchDropDown;
