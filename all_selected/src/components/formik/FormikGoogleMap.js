/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import GoogleMapComponent from '../GoogleMapComponent';

const component = ({
    form,
    lat,
    lng,
    latName,
    lngName,
}) => (
    <>
        <GoogleMapComponent
            lat={lat}
            lng={lng}
            onLatLngChange={(data, action) => {
                form.setFieldValue(latName, data.lat);
                form.setFieldValue(lngName, data.lng);
            }}
        />
    </>
);

component.propTypes = {
    form: PropTypes.any.isRequired,
    lat: PropTypes.any,
    lng: PropTypes.any,
    latName: PropTypes.string.isRequired,
    lngName: PropTypes.string.isRequired,
};

component.defaultProps = {
    lat: 0,
    lng: 0,
};

const FormikGoogleMap = (props) => (
    <Field
        {...props}
        component={component}
    />
);

export default FormikGoogleMap;
