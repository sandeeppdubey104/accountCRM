import * as Yup from 'yup';
import PropTypes from 'prop-types';

// FILE
export const FilePropTypes = {
    fileType: PropTypes.string,
    remark: PropTypes.string,
    file: PropTypes.any,
};

export const FileDefaultProps = {
    fileType: '',
    remark: '',
    file: '',
};

export const FileYupSchema = Yup.object().shape({
    fileType: Yup.string().required('Required'),
    remark: Yup.string().required('Required'),
});

export default {
    FilePropTypes,
    FileYupSchema,
    FileDefaultProps,
};
