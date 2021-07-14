/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import RemarkComponent from '../../../src/containers/remarks-container/RemarkContainer';
import { Formik, Form } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import FormikInput from '../../../src/components/formik/FormikInput';
import UserDropDown from '../../../src/business-components/UserDropDown';
import { CompanyBranchYupSchema } from '../../../src/containers/branch-container/CompanyBranchPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import { isProduction } from '../../../src/config/index';
import StateDropDown from '../../../src/business-components/StateDropDown';
import CityDropDown from '../../../src/business-components/CityDropDown';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS, STATE_LIST } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
import CompanyDropDown from '../../../src/business-components/CompanyDropDown';
import { companyBranchResetAction, companyBranchUpsertAction } from './actions/CompanyBranchActions';
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
                <h5 className="card-title">Branch Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Branch Name</label>
                            <FormikInput
                                name="branchName"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Branch Display Name</label>
                            <FormikInput
                                name="branchDisplayName"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Authorized Person</label>
                            <UserDropDown
                                name="authorizedPersonId"
                                value={values.authorizedPersonId}
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
                            <label>Company</label>
                            <CompanyDropDown
                                name="companyId"
                                value={values.companyId}
                            />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>GST No.</label>
                            <FormikInput
                                name="gstin"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-row">
                            <div className="form-group col">
                                <FormikToggle
                                    name="reach"
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
    onClear: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    values: PropTypes.shape({
        _id: PropTypes.string,
        address: PropTypes.any,
        companyId: PropTypes.string,
        authorizedPersonId: PropTypes.string,
    }).isRequired,
    forceRefreshSearchContainer: PropTypes.any,
};

let setSubmitting = () => { };

const BranchForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.CompanyBranchReducer, shallowEqual);

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
        dispatch(companyBranchUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        branchName,
        branchDisplayName,
        authorizedPersonId,
        stateId,
        cityId,
        pincode,
        gstin,
        email,
        phone,

    }) => {
        history.push(RoutingUtil.branchSearch({
            branchName,
            branchDisplayName,
            authorizedPersonId,
            stateId,
            cityId,
            pincode,
            gstin,
            email,
            phone,
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(companyBranchResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={CompanyBranchYupSchema}
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

export default BranchForm;
