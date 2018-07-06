import React from 'react'
import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/Select'

export const renderTextField = ({
    input,
    label,
    name,
    meta: { touched, error },
    ...custom
}) => (
        <TextField hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    )



export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom} />
)