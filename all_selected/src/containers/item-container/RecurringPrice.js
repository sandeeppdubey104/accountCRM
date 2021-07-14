import React from 'react';
import FormikInput from '../../../src/components/formik/FormikInput';

const RecurringPrice = ({
    values,
    name,
    className,
    readOnly,
}) => {
    return (
        <div className={className}>
            <div className="border-top my-3" />
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label>Monthly</label>
                    <FormikInput
                        readOnly={readOnly}
                        name={`${name ? `${name}.` : ''}monthly`}
                        className="form-control"
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Quarterly</label>
                    <FormikInput
                        readOnly={readOnly}
                        name={`${name ? `${name}.` : ''}quarterly`}
                        className="form-control"
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Semi-annually</label>
                    <FormikInput
                        readOnly={readOnly}
                        name={`${name ? `${name}.` : ''}semiAnnually`}
                        className="form-control"
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>annually</label>
                    <FormikInput
                        readOnly={readOnly}
                        name={`${name ? `${name}.` : ''}annually`}
                        className="form-control"
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Biennially</label>
                    <FormikInput
                        readOnly={readOnly}
                        name={`${name ? `${name}.` : ''}biennially`}
                        className="form-control"
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Triennially</label>
                    <FormikInput
                        readOnly={readOnly}
                        name={`${name ? `${name}.` : ''}triennially`}
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    );
}

export default RecurringPrice;