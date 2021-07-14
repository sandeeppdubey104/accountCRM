/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { withFormikDevtools } from 'formik-devtools-extension';
import FormikInput from '../../../src/components/formik/FormikInput';
import FormikSelect from '../../../src/components/formik/FormikSelect';
import GroupCategoryDropDown from '../../../src/business-components/GroupCategoryDropDown';
import UomDropDown from '../../../src/business-components/UomDropDown';
import FormikCheckBox from '../../../src/components/formik/FormikCheckBox';
import { ItemYupSchema } from '../../../src/containers/item-container/ItemPropTypes';
import FormikToggle from '../../../src/components/formik/FormikToggle';
import PictureContainer from '../files-container/PictureContainer';
import { useHistory } from 'react-router-dom';
import RoutingUtil from '../../../src/utils/RoutingUtil';
import classNames from 'classnames';
// import { isProduction } from '../../../src/config/index';
//import StateDropDown from 'src/business-components/StateDropDown';
import FormikCreateSearchClear from '../../../src/components/formik/FormikCreateSearchClear';
import { REQUEST_STATUS } from '../../../src/constants/CommonConstants';
import { usePrevious } from '../../../src/utils/ReactHooksUtil';
//import FormikGoogleMap from '../../../src/components/formik/FormikGoogleMap';
import { itemResetAction, itemUpsertAction } from './actions/ItemActions';
import { TYPES } from "../item-container/ProductConstants";
import RecurringPrice from "../item-container/RecurringPrice";

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
                <h5 className="card-title">Product/Service Details</h5>
                <Form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Type</label>
                            <FormikSelect
                                items={TYPES}
                                name="categoryType"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Group Catogery</label>
                            <GroupCategoryDropDown
                                name="groupCategory"
                                value={values.groupCategory}
                                categoryType={values.categoryType}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Name</label>
                            <FormikInput
                                name="itemName"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Price</label>
                            <FormikInput
                                name="price"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Unit</label>
                            <UomDropDown
                                name="uom"
                                value={values.uom}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>HSN CODE</label>
                            <FormikInput
                                name="hsnCode"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Description</label>
                            <FormikInput
                                name="description"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label>GST Rate</label>
                            <FormikInput
                                name="gstRate"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label></label>
                            <FormikCheckBox
                                className="ml-2 big-checkbox"
                                name="isRecurringPrice"
                                options={
                                    [
                                        { 'key': 'Recurring Price', 'value': true }
                                    ]
                                }
                            />
                        </div>
                        <RecurringPrice
                            className={classNames({
                                'd-none': !values.isRecurringPrice,
                            })}
                            name='recurringPrice'
                            values={values.isRecurringPrice}
                        />
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
                        <div className="form-group col-md-4">
                            <PictureContainer
                                refId={values._id}
                                source="items"
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
        categoryType: PropTypes.string,
        recurringPrice: PropTypes.any,
    }).isRequired,
};

let setSubmitting = () => { };

const ItemForm = () => {
    const history = useHistory();
    // REDUX
    const dispatch = useDispatch();
    const {
        currentRecord,
        upsertReqStatus,
    } = useSelector((state) => state.ItemReducer, shallowEqual);

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
        dispatch(itemUpsertAction(values));
    }, [
        dispatch,
    ]);

    const onSearch = useCallback(({
        itemId,
    }) => {
        history.push(RoutingUtil.branchSearch({
            itemId
        }));
    }, [
        history,
    ]);

    const onClear = useCallback(() => {
        dispatch(itemResetAction());
    }, [
        dispatch,
    ]);

    return (
        <Formik
            onSubmit={onSubmit}
            onClear={onClear}
            enableReinitialize
            initialValues={currentRecord}
            validationSchema={ItemYupSchema}
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

export default ItemForm;
