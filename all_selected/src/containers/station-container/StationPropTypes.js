import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const StationPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    StationName: PropTypes.string,
    AliasName: PropTypes.string,
    status: PropTypes.bool,
});

export const StationDefaultProps = {
    StationName: '',
    AliasName: '',
    _id: undefined,
    status: true,
};

export const StationYupSchema = Yup.object().shape({
    StationName: Yup.string().min(2, 'Too Short!').required('Required'),
});

export default {
    StationDefaultProps,
    StationPropTypes,
    StationYupSchema,
};
