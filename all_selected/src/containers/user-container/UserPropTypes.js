import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const UserPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    userId: PropTypes.string,
    companyBranchId: PropTypes.string,
    password: PropTypes.string,
    userType: PropTypes.string,
    designation: PropTypes.string,
    personalInfo: {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phone: PropTypes.string,
        alternateNo: PropTypes.string,
        email: PropTypes.string,
        dob: PropTypes.any,
        gender: PropTypes.string,
    },
    address: {
        stateId: PropTypes.string,
        cityId: PropTypes.string,
        pincode: PropTypes.number,
        area: PropTypes.string,
    },
    active: PropTypes.bool,

});

export const UserDefaultProps = {
    userId: '',
    companyBranchId: '',
    password: 'test123',
    userType: '',
    designation: '',
    personalInfo: {
        firstName: '',
        lastName: '',
        phone: '',
        alternateNo: '',
        email: '',
        dob: '',
        gender: 'MALE',
    },
    address: {
        stateId: '',
        cityId: '',
        pincode: '',
        area: '',
    },
    active: true,
    _id: undefined,
};

export const UserYupSchema = Yup.object().shape({
    userId: Yup.string().matches(/^[a-zA-Z0-9\-_]{0,40}$/, {
        message: 'Only Alpha and Numeric without space',
        excludeEmptyString: true,
    }).required('Required.'),
    companyBranchId: Yup.string().required('Required'),
    password: Yup.string().min(6, "Password is too short - should be 6 chars minimum").required('Required'),
    userType: Yup.string().required('Required'),
    designation: Yup.string().required('Required'),
    personalInfo: Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        phone: Yup.string()
            // .matches(/^[a-zA-Z0-9\-_]{0,40}$/, {
            //     message: 'Only Alpha and Numeric without space',
            //     excludeEmptyString: true,
            // })
            .required('Required'),
        alternateNo: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        dob: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
    }),
    address: Yup.object().shape({
        stateId: Yup.string().required('Required'),
        cityId: Yup.string().required('Required'),
        pincode: Yup.string().min(6, 'Pincode Must Be 6 Digits').max(6, 'Pincode Must Be 6 Digits').required('Required'),
        area: Yup.string().required('Required'),
    })
});

export default {
    UserDefaultProps,
    UserPropTypes,
    UserYupSchema,
};
