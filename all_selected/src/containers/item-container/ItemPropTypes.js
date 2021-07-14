import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const ItemPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    categoryType: PropTypes.string,
    groupCategory: PropTypes.string,
    itemName: PropTypes.string,
    price: PropTypes.number,
    uom: PropTypes.string,
    hsnCode: PropTypes.number,
    description: PropTypes.string,
    gstRate: PropTypes.number,
    isRecurringPrice: PropTypes.bool,
    active: PropTypes.bool,
});

export const ItemDefaultProps = {
    categoryType: '',
    groupCategory: '',
    itemName: '',
    price: '',
    uom: '',
    hsnCode: '',
    description: '',
    gstRate: 0,
    isRecurringPrice: false,
    _id: undefined,
    active: true,
};

export const ItemYupSchema = Yup.object().shape({
    categoryType: Yup.string().required('Required'),
    groupCategory: Yup.string().required('Required'),
    itemName: Yup.string().required('Required'),
    gstRate: Yup.number().required('Required'),
    hsnCode: Yup.string().min(6, 'Too Short!').max(8, 'Too Long!').required('Required'),
});

export default {
    ItemDefaultProps,
    ItemPropTypes,
    ItemYupSchema,
};
