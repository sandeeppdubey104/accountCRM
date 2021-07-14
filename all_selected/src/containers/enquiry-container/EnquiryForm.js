/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import GroupCategoryDropDown from '../../../src/business-components/GroupCategoryDropDown';
import FormikInput from '../../../src/components/formik/FormikInput';

import { EnquiryYupSchema } from '../../../src/containers/enquiry-container/EnquiryPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import { isProduction } from '../../../src/config/index';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
//import FormikGoogleMap from '../../../src/components/formik/FormikGoogleMap';
import { enquiryResetAction, enquiryUpsertAction, customerChangeAction } from './actions/EnquiryActions';

import UserDropDown from '../../../src/business-components/UserDropDown';
import SourceDropDown from '../../../src/business-components/SourceDropDown';
import ProductDropDown from '../../../src/business-components/ProductDropDown';
import CustomerDropDown from '../../../src/business-components/CustomerDropDown';
import AddressComponent from '../branch-container/AddressComponent';
import ActivityFieldForm from './ActivityFieldForm';


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
        onCustomerChange,
    } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Enquiry Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Select Customer</label>
                            <CustomerDropDown
                                name="customerDetails"
                                value={values.customerDetails}
                                onChange={onCustomerChange}
                            // onChange={(value) => {
                            //     console.log('san=>', value);
                            // }}
                            // clientId={values.clientId}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Name</label>
                            <FormikInput
                                name="customerDetails.firstName"
                                className="form-control"
                                value={values.customerDetails.firstName}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Phone</label>
                            <FormikInput
                                name="customerDetails.phone"
                                className="form-control"
                                value={values.customerDetails.phone}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Email</label>
                            <FormikInput
                                name="customerDetails.email"
                                className="form-control"
                                value={values.customerDetails.email}
                            />
                        </div>
                    </div>
                    <AddressComponent
                        values={values.customerDetails.address}
                        name="customerDetails.address"
                    />

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Source</label>
                            <SourceDropDown
                                name="source"
                                value={values.source}
                            />
                        </div>

                        <div className="form-group col-md-4">
                            <label>Assigned To</label>
                            <UserDropDown
                                name="assignedTo"
                                value={values.assignedTo}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Description</label>
                            <FormikInput
                                name="description"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-row">
                            <div className="form-group col">
                                <FormikToggle
                                    name="active"
                                    type="checkbox"
                                    onLabel="Active"
                                    offLabel="Deactive"
                                />
                            </div>
                        </div>
                    </div>


                    <FieldArray
                        validateOnChange
                        name="items"
                        render={({ push, remove, swap }) => (
                            <ActivityFieldForm
                                push={push}
                                remove={remove}
                                values={values}
                                swap={swap}
                            />
                        )}
                    />



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
        customer: PropTypes.string,
        customerDetails: PropTypes.any,
        source: PropTypes.string,
        categoryType: PropTypes.string,
        groupCategory: PropTypes.string,
        item: PropTypes.string,
        assignedTo: PropTypes.string,
        description: PropTypes.string,
        active: PropTypes.bool,
    }).isRequired,
};

let setSubmitting = () => { };

const EnquiryForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.EnquiryReducer, shallowEqual);


    // GET CURRENT CUSTOMER STATE
    const {
        search: custsearch,
        searchReqStatus: custSearchReqStatus,
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
        dispatch(enquiryUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        customer,
        source,
        item,
        assignedTo,
        active
    }) => {
        history.push(RoutingUtil.enquirySearch({
            customer,
            source,
            item,
            assignedTo,
            active
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(enquiryResetAction());
    }, [
        dispatch,
    ]);

    const onCustomerChange = useCallback((value) => {
        const whereCustId = { _id: value };
        dispatch(customerChangeAction(whereCustId));
    }, [
        dispatch,
        custsearch
    ]);



    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={{ ...currentRecord }}

            validationSchema={EnquiryYupSchema}
            onSearch={onSearch}

        >
            {(formikProps) => (
                <Render
                    onClear={onClear}
                    onSearch={onSearch}
                    onCustomerChange={onCustomerChange}
                    {...formikProps}
                />
            )}
        </Formik>
    );
};

export default EnquiryForm;
