import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const TransporterPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    TransporterName: PropTypes.string,
    AliasName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    gstin: PropTypes.string,
    ContactPerson: PropTypes.number,
    PanNo: PropTypes.number,
    status: PropTypes.bool,
});

export const TransporterDefaultProps = {
    TransporterName: '',
    AliasName: '',
    email: '',
    phone: '',
    gstin: '',
    ContactPerson: '',
    PanNo: '',
    _id: undefined,
    status: true,
};

export const TransporterYupSchema = Yup.object().shape({
    TransporterName: Yup.string().required('Required'),
});

export default {
    TransporterDefaultProps,
    TransporterPropTypes,
    TransporterYupSchema,
};
