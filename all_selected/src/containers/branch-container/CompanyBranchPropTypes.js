import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const CompanyBranchPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    companyId: PropTypes.string,
    branchName: PropTypes.string,
    branchDisplayName: PropTypes.string,
    authorizedPersonId: PropTypes.string,
    gstin: PropTypes.string,
    active: PropTypes.bool,
});

export const CompanyBranchDefaultProps = {
    companyId: '',
    branchName: '',
    branchDisplayName: '',
    authorizedPersonId: '',
    gstin: '',
    active: true,
};

export const CompanyBranchYupSchema = Yup.object().shape({
    // companyId: Yup.string().required('Required'),
    branchName: Yup.string().required('Required'),
    branchDisplayName: Yup.string().required('Required'),
});

export default {
    CompanyBranchDefaultProps,
    CompanyBranchPropTypes,
    CompanyBranchYupSchema,
};
