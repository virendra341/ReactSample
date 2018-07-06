import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'

import { renderTextField, renderSelectField } from 'reduxFormComponent'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'fullname',
        'cname',
        'country'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is required'
        }
    })
    if (
        values.emailId &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)
    ) {
        errors.emailId = 'Invalid email address'
    }

    if (
        values.country === undefined
    ) {
        errors.country = 'This field is required'
    }
    return errors
}



class SignUp extends PureComponent {

    state = {
        countryList: [{ id: 1, name: 'Indina' }, { id: 2, name: 'japan' }]
    }
    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit, invalid, submitting, pristine } = this.props;
        return (

            <form onSubmit={handleSubmit((values) => this.showResults(values))}>

                <Field component={renderTextField} name="fullname" type="text" placeholder="Full Name" />

                <Field component={renderTextField} name="cname" type="text" placeholder="Company Name" />

                <Field name="country" placeholder="Select country" component={renderSelectField} labelKey="name" valueKey="id" options={this.state.countryList}></Field>

                <Field component={renderTextField} name="state" type="text" placeholder="State" />

                <Field component={renderTextField} name="countryCode" type="text" placeholder="+ 91" />

                <Field component={renderTextField} name="contactNumber" type="text" placeholder="Contact Number" />

                <Field component={renderTextField} name="emailId" type="text" placeholder="Email" />

                <Field component={renderTextField} name="password" type="text" placeholder="Password" />




                <div>
                    <Button className="btn-green" disabled={invalid || submitting || pristine}>Register</Button>{' '}
                </div>
            </form>

        )
    }
}


module.exports = reduxForm({
    form: 'signup',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignUp);
