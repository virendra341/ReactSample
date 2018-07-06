import React, { Fragment } from 'react'
import { FormGroup, Input, FormFeedback, Label } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'

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



export const renderSelectField = ({ input, label,options,labelKey, meta: { touched,error }, children, ...custom }) => (
    <Fragment>
        <FormGroup>
            {label && <Label for={label}>{label} {error && <span className="mandatory-field">*</span>} </Label>}

            <Typeahead 
               invalid={touched && error}
                labelKey={labelKey}
                options={options}
                {...custom}
                onChange={input.onChange}
            />
            {error && <FormFeedback>{error}</FormFeedback>}

        </FormGroup>
    </Fragment>
);