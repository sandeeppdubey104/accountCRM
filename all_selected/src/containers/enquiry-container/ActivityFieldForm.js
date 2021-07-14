/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import FormikInput from '../../../src/components/formik/FormikInput';
import FormikSelect from '../../../src/components/formik/FormikSelect';
import LinkComponent from '../../../src/components/LinkComponent';
import { EnquiryItemDefaultProps, EnquiryItemYupSchema } from './EnquiryPropTypes';
import ProductDropDown from '../../../src/business-components/ProductDropDown';


const EnquiryItemForm = ({
    values,
    push,
    remove,
    swap,
}) => (
    <Formik
        initialValues={EnquiryItemDefaultProps}
        validationSchema={EnquiryItemYupSchema}
        onSubmit={(EnquiryItemFormikValues, {
            resetForm: EnquiryItemReset,
        }) => {
            push({ ...EnquiryItemFormikValues });
            EnquiryItemReset();
        }}
    >
        {({
            values: formValues,
            handleSubmit,
        }) => (
            <div className="card mt-3">
                <div className="card-body">

                    <h5 className="card-title">Item Details Fields</h5>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label>Item Name</label>
                            <ProductDropDown
                                name="itemId"
                            // value={values.itemId}
                            // formValues={values.itemId.displayKeyPath}
                            // onChange={(value) => {
                            //     console.log('san=>', value);
                            // }}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <button
                                type="button"
                                className="form-control btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive-lg">
                        <table className="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {values.items.map((item, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.itemId}</td>
                                        <td>
                                            <LinkComponent onClick={() => remove(index)}>Remove</LinkComponent>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )}
    </Formik>
);

EnquiryItemForm.propTypes = {
    values: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default EnquiryItemForm;
