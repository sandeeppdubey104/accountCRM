import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const CityPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    area: PropTypes.string,
    buildingNo: PropTypes.string,
    cityName: PropTypes.string,
    cityType: PropTypes.number,
    flatNo: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    pincode: PropTypes.string,
    stateId: PropTypes.string,
    reach: PropTypes.bool,
});

export const CityDefaultProps = {
    stateId: '',
    cityName: '',
    pincode: '',
    cityType: '',
    flatNo: '',
    buildingNo: '',
    area: '',
    lat: 0,
    lng: 0,
    _id: undefined,
    reach: true,
};

export const CityYupSchema = Yup.object().shape({
    stateId: Yup.string().required('Required'),
    cityName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    cityType: Yup.string().min(2, 'Please Choose an Option').required('Required'),
    pincode: Yup.string().min(6, 'Too Short!').max(6, 'Too Long!').required('Required'),
});

export default {
    CityDefaultProps,
    CityPropTypes,
    CityYupSchema,
};
