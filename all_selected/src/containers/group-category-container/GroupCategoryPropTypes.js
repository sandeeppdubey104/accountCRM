import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const GroupCategoryPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    categoryType: PropTypes.string,
    groupCategory: PropTypes.string,
    status: PropTypes.bool,
});

export const GroupCategoryDefaultProps = {
    groupCategory: '',
    categoryType: '',
    _id: undefined,
    status: true,
};

export const GroupCategoryYupSchema = Yup.object().shape({
    groupCategory: Yup.string().min(2, 'Too Short!').required('Required'),
});

export default {
    GroupCategoryDefaultProps,
    GroupCategoryPropTypes,
    GroupCategoryYupSchema,
};
