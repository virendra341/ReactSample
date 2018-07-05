import React, { Fragment, PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, FormGroup, Input, FormFeedback } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'


const validate = values => {
    const errors = {}
    const requiredFields = [
        'email',
        'password'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderTextField = ({
    input,
    label,
    name,
    meta: { touched, error },
    ...custom
}) => (
        <Fragment>
            <FormGroup>
                <Input
                    invalid={touched && error}
                    {...input}
                    {...custom}
                />
                {error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        </Fragment>
    )


class Login extends PureComponent {

    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit, valid } = this.props;
        console.log('Props ', this.props);

        return (
            [
                <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                    <Field component={renderTextField} name="emailId" type="text" placeholder="Email Id" className="ABC"/>
                    <Field component={renderTextField} name="password" type="password" placeholder="Password" className="ABC"/>
                    <div>
                        <Button disabled={!valid}>Submit</Button>{' '}
                    </div>
                </form>
            ]
        )
    }
}


module.exports = reduxForm({
    form: 'login',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(Login);
