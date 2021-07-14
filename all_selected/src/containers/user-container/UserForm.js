/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import FormikInput from '../../../src/components/formik/FormikInput';
import FormikDateTimePicker from '../../../src/components/formik/FormikDateTimePicker';//'../../../src/formik/FormikDateTimePicker';
import FormikSelect from '../../../src/components/formik/FormikSelect';
import ClientBranchDropDown from '../../../src/business-components/ClientBranchDropDown';
import { UserYupSchema } from '../../../src/containers/user-container/UserPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import PictureContainer from '../files-container/PictureContainer';
import FormikRadioBox from '../../../src/components/formik/FormikRadioBox';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import { isProduction } from '../../../src/config/index';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS } from '../../../src/constants/CommonConstants';
import AddressComponent from '../branch-container/AddressComponent';
import FormikPassword from '../../../src/components/formik/FormikPassword';
import {
    USER_TYPES_LIST, DESIGNATION_TYPES_LIST
} from './UserConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
//import FormikGoogleMap from '../../../src/components/formik/FormikGoogleMap';
import { userResetAction, userUpsertAction } from './actions/UserActions';

const Render = (props) => {
    // DEV TOOL
    // if (!isProduction()) {
    //     withFormikDevtools(props);
    // }

    const {
        values,
        // errors,
        // touched,
        isSubmitting,
        onSearch,
        onClear,
        resetForm,
    } = props;

    const gender = [
        { key: 'MALE', value: 'MALE' },
        { key: 'FEMALE', value: 'FEMALE' }
    ]
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">User Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>user Id</label>
                            <FormikInput
                                name="userId"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>First Name</label>
                            <FormikInput
                                name="personalInfo.firstName"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Last Name</label>
                            <FormikInput
                                name="personalInfo.lastName"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Phone No.</label>
                            <FormikInput
                                name="personalInfo.phone"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Alternate No.</label>
                            <FormikInput
                                name="personalInfo.alternateNo"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>D.O.B</label>
                            {/* <FormikDateTimePicker
                                readOnly={false}
                                name="dob"
                                className="form-control"
                                disableClock
                                format="y-MM-dd"
                                value=""
                                /> */}
                            <FormikDateTimePicker
                                name="personalInfo.dob"
                                className="form-control"
                                disableClock
                                format="y-MM-dd"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Email</label>
                            <FormikInput
                                name="personalInfo.email"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Branch Name.</label>
                            <ClientBranchDropDown
                                readOnly={false}
                                name={`companyBranchId`}
                                value={values.companyBranchId}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Gender.</label>
                            <FormikRadioBox
                                className="ml-2 big-checkbox"
                                name="personalInfo.gender"
                                control="radio"
                                label="radio"
                                options={gender}
                                checked="MALE"
                            />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Password</label>
                            <FormikPassword
                                name="password"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>User Type</label>
                            <FormikSelect
                                items={USER_TYPES_LIST}
                                name="userType"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Designation</label>
                            <FormikSelect
                                items={DESIGNATION_TYPES_LIST}
                                name="designation"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <AddressComponent
                        values={values.address}
                        name="address"
                    />

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <FormikToggle
                                name="active"
                                type="checkbox"
                                onLabel="Active"
                                offLabel="Deactive"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <PictureContainer
                                refId={values._id}
                                source="users"
                                className="img-thumbnail item-picture"
                            />
                        </div>
                    </div>
                    <div className="text-center py-4 mt-3">
                        <FormikCreateSearchClear
                            isSubmitting={isSubmitting}
                            isUpdate={Boolean(values._id)}
                            onSearch={onSearch}
                            onClear={onClear}
                            resetForm={resetForm}
                            values={values}
                        />
                    </div>
                </Form>
            </div>
        </div>
    );
};

Render.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    values: PropTypes.shape({
        _id: PropTypes.string,
        userId: PropTypes.string,
        personalInfo: PropTypes.any,
    }).isRequired,
};

let setSubmitting = () => { };

const UserForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.UserReducer, shallowEqual);

    // if current record changed or request status changed the enable submit
    usePrevious({
        currentRecord,
        upsertReqStatus,
    }, (prev) => {
        if (
            prev.currentRecord !== currentRecord
            || (upsertReqStatus && prev.upsertReqStatus !== upsertReqStatus && upsertReqStatus !== REQUEST_STATUS.PENDING)) {
            setSubmitting(false);
        }
    });

    const onSubmit = useCallback((
        values,
        formikUtils,
    ) => {
        ({ setSubmitting } = formikUtils);
        dispatch(userUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        userId,
        firstName,
        lastName,
        mobile,
        alternateNo,
        dob,
        email,
        companyBranchId,
        gender,
        password,
        userType,
        designation,
        active,
    }) => {
        history.push(RoutingUtil.userSearch({
            userId,
            firstName,
            lastName,
            mobile,
            alternateNo,
            dob,
            email,
            companyBranchId,
            gender,
            password,
            userType,
            designation,
            active,
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(userResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={UserYupSchema}
            onSearch={onSearch}
        >
            {(formikProps) => (
                <Render
                    onClear={onClear}
                    onSearch={onSearch}
                    {...formikProps}
                />
            )}
        </Formik>
    );
};

export default UserForm;
