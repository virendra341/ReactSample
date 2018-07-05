import React, { Fragment } from 'react'
import { FormGroup, Input, FormFeedback, Label } from 'reactstrap'

export const renderTextField = ({
    input,
    label,
    name,
    meta: { touched, error },
    ...custom
}) => (
        <Fragment>
            <FormGroup>
                {label && <Label for={label}>{label} {error && <span className="mandatory-field">*</span>} </Label>}
                <Input
                    invalid={touched && error}
                    {...input}
                    {...custom}
                />
                {error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        </Fragment>
    )