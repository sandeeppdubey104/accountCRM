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
import { SourceYupSchema } from '../../../src/containers/source-container/SourcePropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
// import { isProduction } from '../../../src/config/index';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
//import FormikGoogleMap from '../../../src/components/formik/FormikGoogleMap';
import { sourceResetAction, sourceUpsertAction } from './actions/SourceActions';

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
                <h5 className="card-title">Source Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Source Name</label>
                            <FormikInput
                                name="SourceName"
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
                                name="reach"
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
        SourceName: PropTypes.string,
        AliasName: PropTypes.string,
    }).isRequired,
};

let setSubmitting = () => { };

const SourceForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.SourceReducer, shallowEqual);

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
        dispatch(sourceUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        SourceName,
        AliasName,
    }) => {
        history.push(RoutingUtil.sourceSearch()({
            SourceName,
            AliasName,
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(sourceResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={SourceYupSchema}
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

export default SourceForm;
