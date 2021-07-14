/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import FormikInput from '../../../src/components/formik/FormikInput';
import { CustomerYupSchema } from '../../../src/containers/customer-container/CustomerPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import FormikRadioBox from '../../../src/components/formik/FormikRadioBox';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import { isProduction } from '../../../src/config/index';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
//import FormikGoogleMap from '../../../src/components/formik/FormikGoogleMap';
import { customerResetAction, customerUpsertAction } from './actions/CustomerActions';
import AddressComponent from '../../../src/components/AddressComponent';

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
                <h5 className="card-title">Customer Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>First Name</label>
                            <FormikInput
                                name="firstName"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Last Name</label>
                            <FormikInput
                                name="lastName"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Phone.</label>
                            <FormikInput
                                name="phone"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-4">
                            <label>Alternate No.</label>
                            <FormikInput
                                name="alternateNo"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Email</label>
                            <FormikInput
                                name="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Gender.</label>
                            <FormikRadioBox
                                className="ml-2 big-checkbox"
                                name="gender"
                                control="radio"
                                label="radio"
                                options={gender}
                                checked="MALE"
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label>GST No.</label>
                            <FormikInput
                                name="gstin"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <AddressComponent
                        values={values.address}
                        name="address"
                    />
                    <div className="form-row">
                        <div className="border-top my-3" />
                        <div className="form-group col-md-4">
                            <label>Pan Card</label>
                            <FormikInput
                                className="form-control"
                                name="bankInfo.panCard"
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <label>Account Number</label>
                            <FormikInput
                                className="form-control"
                                name="bankInfo.accountNumber"
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <label>IFSC Code</label>
                            <FormikInput
                                className="form-control"
                                name="bankInfo.ifisc"
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <label>Bank Name</label>
                            <FormikInput
                                className="form-control"
                                name="bankInfo.bankName"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Billing Name</label>
                            <FormikInput
                                className="form-control"
                                name="billingName"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Credit Period</label>
                            <FormikInput
                                className="form-control"
                                name="creditPeriod"
                            />
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-row">
                            <div className="form-group col">
                                <FormikToggle
                                    name="status"
                                    type="checkbox"
                                    onLabel="Active"
                                    offLabel="Deactive"
                                />
                            </div>
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
        stateId: PropTypes.string,
    }).isRequired,
};

let setSubmitting = () => { };

const CustomerForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.CustomerReducer, shallowEqual);

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
        dispatch(customerUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        stateId,
    }) => {
        history.push(RoutingUtil.userSearch({
            stateId,
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(customerResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={CustomerYupSchema}
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

export default CustomerForm;
