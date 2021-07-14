/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import StateDropDown from '../../src/business-components/StateDropDown';
import CityDropDown from '../../src/business-components/CityDropDown';
import FormikInput from '../../src/components/formik/FormikInput';

const AddressComponent = ({
    values,
    name,
    className,
    readOnly,
}) => (
    <div className={className}>


        <div className="form-row">
            <div className="form-group col-md-4">
                <label>State</label>
                <StateDropDown
                    readOnly={readOnly}
                    name={`${name ? `${name}.` : ''}stateId`}
                    value={values.stateId}
                />
            </div>
            <div className="form-group col-md-4">
                <label>City</label>
                <CityDropDown
                    readOnly={readOnly}
                    name={`${name ? `${name}.` : ''}cityId`}
                    value={values.cityId}
                    stateId={values.stateId}
                />
            </div>
            <div className="form-group col-md-4">
                <label>PIN CODE</label>
                <FormikInput
                    readOnly={readOnly}
                    name={`${name ? `${name}.` : ''}pincode`}
                    type="text"
                    className="form-control"
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label>Area</label>
                <FormikInput
                    readOnly={readOnly}
                    name={`${name ? `${name}.` : ''}area`}
                    type="text"
                    className="form-control"
                />
            </div>
        </div>

    </div>
);
AddressComponent.propTypes = {
    values: PropTypes.shape({
        flatNo: PropTypes.string,
        buildingNo: PropTypes.string,
        area: PropTypes.string,
        pincode: PropTypes.string,
        lat: PropTypes.any,
        lng: PropTypes.any,
        _id: PropTypes.string,
        stateId: PropTypes.string,
        cityId: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    readOnly: PropTypes.bool,
};

AddressComponent.defaultProps = {
    values: {},
    className: '',
    readOnly: false,
};

export default AddressComponent;
