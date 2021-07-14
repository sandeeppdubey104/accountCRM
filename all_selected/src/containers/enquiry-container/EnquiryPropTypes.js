import * as Yup from 'yup';
import PropTypes from 'prop-types';



// ACTIVITY FIELD
export const EnquiryItemPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    itemId: PropTypes.string,
    active: PropTypes.bool,
});

export const EnquiryItemDefaultProps = {
    _id: undefined,
    itemId: '',
    active: true,
};

export const EnquiryItemYupSchema = Yup.object().shape({
    itemId: Yup.string().required('Required')
});




export const EnquiryPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    customer: PropTypes.string,
    customerDetails: {
        firstName: PropTypes.string,
        mobile: PropTypes.string,
        email: PropTypes.string,
        address: {
            stateId: PropTypes.string,
            cityId: PropTypes.string,
            pincode: PropTypes.string,
            area: PropTypes.string,
        }
    },
    source: PropTypes.string,
    categoryType: PropTypes.string,
    groupCategory: PropTypes.string,
    items: PropTypes.arrayOf(EnquiryItemPropTypes),
    assignedTo: PropTypes.string,
    description: PropTypes.string,
    active: PropTypes.bool,
});

export const EnquiryDefaultProps = {
    customer: '',
    customerDetails: {
        firstName: '',
        phone: '',
        email: '',
        address: {
            stateId: '',
            cityId: '',
            pincode: '',
            area: '',
        }
    },
    source: '',
    categoryType: '',
    groupCategory: '',
    items: [],
    assignedTo: '',
    description: '',
    active: true,
    _id: undefined,
};
// customerDetails: {
//     firstName: 'sandeep dubey',
//     phone: '8750344156',
//     email: 'sandeepdubey',
//     address: {
//         stateId: '5fe85b1754892651ac3fb580',
//         cityId: '6050a5524ad981621f5ab386',
//         pincode: '8569856',
//         area: '204  janak cinema',
//     }
// },
export const CopyEnquiryDefaultProps = {
    firstName: 'sandeep dubey',
    phone: '8750344156',
    email: 'sandeepdubey',
    address: {
        stateId: '5fe85b1754892651ac3fb580',
        cityId: '6050a5524ad981621f5ab386',
        pincode: '8569856',
        area: '204  janak cinema',
    }
};

export const EnquiryYupSchema = Yup.object().shape({
    customer: Yup.string().min(2, 'Please Choose a customer').required('Required'),
    source: Yup.string().min(2, 'Please Choose source of enquiry').required('Required'),
    items: Yup.array().of(EnquiryItemYupSchema),
    assignedTo: Yup.string().min(2, 'Please Choose a Assigned User').required('Required'),
});

export default {
    EnquiryDefaultProps,
    EnquiryPropTypes,
    EnquiryYupSchema,

    EnquiryItemPropTypes,
    EnquiryItemDefaultProps,
    EnquiryItemYupSchema,
};
