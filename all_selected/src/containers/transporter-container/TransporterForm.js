/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import FormikInput from '../../../src/components/formik/FormikInput';
import { TransporterYupSchema } from '../../../src/containers/transporter-container/TransporterPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import { isProduction } from '../../../src/config/index';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS, STATE_LIST, ITEM_CATEGORY } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
import { transporterResetAction, transporterUpsertAction } from './actions/TransporterActions';
import AddressComponent from '../branch-container/AddressComponent';

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

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Transporter Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Transporter Name</label>
                            <FormikInput
                                name="TransporterName"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Alias Name</label>
                            <FormikInput
                                name="AliasName"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <AddressComponent
                        values={values.address}
                        name="address"
                    />
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Email</label>
                            <FormikInput
                                type="email"
                                name="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Phone</label>
                            <FormikInput
                                name="phone"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>GST No.</label>
                            <FormikInput
                                name="gstin"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Contact Person</label>
                            <FormikInput
                                name="ContactPerson"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Pan No</label>
                            <FormikInput
                                name="PanNo"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <FormikToggle
                                name="status"
                                type="checkbox"
                                onLabel="Active"
                                offLabel="Deactive"
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
        stateId: PropTypes.string,
    }).isRequired,
};

let setSubmitting = () => { };

const TransportertForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.TransporterReducer, shallowEqual);

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
        dispatch(transporterUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        stateId,
        cityName,
        pincode,
        cityType,
        flatNo,
        buildingNo,
        area,
    }) => {
        history.push(RoutingUtil.branchSearch({
            stateId,
            cityName,
            pincode,
            cityType,
            flatNo,
            buildingNo,
            area,
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(transporterResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={TransporterYupSchema}
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

export default TransportertForm;
