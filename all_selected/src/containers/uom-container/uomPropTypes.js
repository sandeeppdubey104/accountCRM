import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const uomPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    uomName: PropTypes.string,
    AliasName: PropTypes.string,
    status: PropTypes.bool,
});

export const uomDefaultProps = {
    uomName: '',
    AliasName: '',
    _id: undefined,
    status: true,
};

export const uomYupSchema = Yup.object().shape({
    uomName: Yup.string().min(2, 'Too Short!').required('Required'),
});

export default {
    uomDefaultProps,
    uomPropTypes,
    uomYupSchema,
};
