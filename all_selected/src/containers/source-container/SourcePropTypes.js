import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const SourcePropTypes = PropTypes.shape({
    _id: PropTypes.string,
    SourceName: PropTypes.string,
    AliasName: PropTypes.string,
    status: PropTypes.bool,
});

export const SourceDefaultProps = {
    SourceName: '',
    AliasName: '',
    _id: undefined,
    status: true,
};

export const SourceYupSchema = Yup.object().shape({
    SourceName: Yup.string().min(2, 'Too Short!').required('Required'),
});

export default {
    SourceDefaultProps,
    SourcePropTypes,
    SourceYupSchema,
};
