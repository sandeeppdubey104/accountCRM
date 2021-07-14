import React from 'react';
import { Formik } from 'formik';

const FormikWrapper = (Target, formikProps, TargetProps) => (
    <Formik
        {...formikProps}
    >
        {(props) => (
            <Target
                {...TargetProps}
                {...props}
            />
        )}
    </Formik>
);

export default FormikWrapper;
