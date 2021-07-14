/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import FormikInput from '../../../src/components/formik/FormikInput';
import { uomYupSchema } from '../../../src/containers/uom-container/uomPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import { isProduction } from '../../../src/config/index';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
//import FormikGoogleMap from '../../../src/components/formik/FormikGoogleMap';
import { uomResetAction, uomUpsertAction } from './actions/uomActions';
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
                <h5 className="card-title">Unit Of Measurement Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Unit Of Measurement Name</label>
                            <FormikInput
                                name="uomName"
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

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <FormikToggle
                                name="active"
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
        uomName: PropTypes.string,
        AliasName: PropTypes.string,
    }).isRequired,
};

let setSubmitting = () => { };

const UomForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.uomReducer, shallowEqual);

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
        dispatch(uomUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        uomName,
        AliasName,
    }) => {
        history.push(RoutingUtil.branchSearch({
            uomName,
            AliasName,
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(uomResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={uomYupSchema}
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

export default UomForm;
