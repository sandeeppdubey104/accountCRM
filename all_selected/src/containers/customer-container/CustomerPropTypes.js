import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const CustomerPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    alternateNo: PropTypes.number,
    email: PropTypes.string,
    gender: PropTypes.string,
    gstin: PropTypes.string,
    pincode: PropTypes.string,
    stateId: PropTypes.string,
    reach: PropTypes.bool,
});

export const CustomerDefaultProps = {
    firstName: '',
    lastName: '',
    phone: '',
    alternateNo: '',
    email: '',
    gender: '',
    gstin: '',
    pincode: '',
    stateId: '',
    _id: undefined,
    status: true,
};

export const CustomerYupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    // phone: Yup.string().min(10, 'Too Short!').max(12, 'Too Long!').required('Required'),
    // email: Yup.string().required('Required'),
});

export default {
    CustomerDefaultProps,
    CustomerPropTypes,
    CustomerYupSchema,
};
