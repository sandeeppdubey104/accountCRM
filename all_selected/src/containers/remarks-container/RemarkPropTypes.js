import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const RemarkPropTypes = {
    refId: PropTypes.string,
    title: PropTypes.string,
    source: PropTypes.string,
};

export const RemarkDefaultProps = {
    title: 'Remarks',
    refId: null,
    source: null,
};

export const RemarkYupSchema = Yup.object().shape({
    text: Yup.string().required('Required'),
});

export default {
    RemarkPropTypes,
    RemarkYupSchema,
    RemarkDefaultProps,
};
