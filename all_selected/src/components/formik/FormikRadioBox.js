import React from 'react'
import { Field, ErrorMessage } from 'formik';

function FormikRadioBox(props) {
    const { lable, name, options, onClick, checked, ...rest } = props
    return (
        <div>
            <lable>{lable}</lable>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value === undefined || field.value === null ? (checked == option.value) : (field.value == option.value)}//{field.value == option.value}
                                        onClick={onClick}
                                    >
                                    </input>
                                    <lable htmlFor={option.lable}>  {option.key} </lable>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage
                component="div"
                className="text-danger"
                name={name}
            />
        </div>
    )
}

export default FormikRadioBox
