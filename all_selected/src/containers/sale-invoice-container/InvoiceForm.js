/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback, useRef } from 'react';
import RemarkComponent from '../../../src/containers/remarks-container/RemarkContainer';
import { Formik, Form } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import FormikInput from '../../../src/components/formik/FormikInput';
import FormikSelect from '../../../src/components/formik/FormikSelect';
import { CityYupSchema } from '../../../src/containers/branch-container/CityPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
import FormikDateTimePicker from '../../../src/components/formik/FormikDateTimePicker';
// import { isProduction } from '../../../src/config/index';
//import StateDropDown from 'src/business-components/StateDropDown';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS, STATE_LIST } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
//import FormikGoogleMap from '../../../src/components/formik/FormikGoogleMap';
import { cityResetAction, cityUpsertAction } from './actions/CityActions';
import Table from '../../../src/components/table/Table';
// import QuotationToPrint from "../sale-invoice-container/SaleInvoicePrint";
import ServiceInvoiceToPrint from "../sale-invoice-container/ServiceInvoiceToPrint";

import { CITY_TYPES } from "../sale-invoice-container/InvoiceConstants";
import { useReactToPrint } from "react-to-print";

const Render = (props) => {
    // DEV TOOL
    // if (!isProduction()) {
    //     withFormikDevtools(props);
    // }
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

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
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Sale Invoice Details</h5>
                    <Form>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>QTY</label>
                                <FormikInput
                                    name="qty"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Description</label>
                                <FormikInput
                                    name="description"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Unit Price</label>
                                <FormikInput
                                    name="rate"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Discount %</label>
                                <FormikInput
                                    name="discount"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Total</label>
                                <FormikInput
                                    name="total"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-1">
                                <label>Taxed</label>
                                <input id="texed" name="texed" type="checkbox" className="form-control" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <label>Dscription</label>
                                <FormikInput
                                    name="auth_persion"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Attachment</label>
                                <input id="file" name="file" type="file" className="form-control" />
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Date</label>
                                <FormikDateTimePicker
                                    name="dob"
                                    className="form-control"
                                    disableClock
                                    format="y-MM-dd"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Place of Supply</label>
                                <FormikSelect
                                    items={CITY_TYPES}
                                    name="userType"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Transport</label>
                                <FormikSelect
                                    items={STATE_LIST}
                                    name="userType"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Station</label>
                                <FormikSelect
                                    items={CITY_TYPES}
                                    name="userType"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Vehicle No</label>
                                <FormikInput
                                    name="auth_persion"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>E-Way Bill No</label>
                                <FormikInput
                                    name="auth_persion"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Reverse Charge</label>
                                <FormikSelect
                                    items={STATE_LIST}
                                    name="userType"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>GR/RR No</label>
                                <FormikInput
                                    name="auth_persion"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Due Date</label>
                                <FormikInput
                                    name="due_date"
                                    className="form-control"
                                    value="8"
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
                            <ServiceInvoiceToPrint ref={componentRef} />
                            <button type="button" className="btn btn-light ml-3" onClick={handlePrint}>Preview</button>
                        </div>
                    </Form>

                    <div className="form-group">
                        <RemarkComponent
                            title="City Remarks"
                            refId={values._id}
                            source="cities"
                        />
                    </div>
                </div>
            </div>
            <div className="border-top my-3" />

            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">
                        Added Items
                    </h5>
                    <Table
                        recordsPerPage={0}
                        searchData={{
                            data: [],
                            count: 0,
                            currentPage: 0,
                        }}
                        columns={{
                            qty: {
                                display: 'QUANTITY',
                            },
                            description: {
                                display: 'DESCRIPTION',
                            },
                            unitPrice: {
                                display: 'UNIT PRICE',
                            },
                            discount: {
                                display: 'DISCOUNT',
                            },
                            total: {
                                display: 'TOTAL',
                            },
                            action: {
                                display: 'ACTION',
                            }
                        }}
                    />
                </div>
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
        lat: PropTypes.number,
        lng: PropTypes.number,
    }).isRequired,
};

let setSubmitting = () => { };

const CityForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.CityReducer, shallowEqual);

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
        dispatch(cityUpsertAction(values));
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
        dispatch(cityResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={CityYupSchema}
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

export default CityForm;
