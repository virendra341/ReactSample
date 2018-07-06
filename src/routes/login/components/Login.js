/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-05 18:18:44 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-06 16:42:36
 */
import React, { PureComponent } from 'react'

import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import Button from '@material-ui/core/Button'

import { renderTextField } from 'reduxFormComponent'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'emailId',
        'password'
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
    return errors
}

class Login extends PureComponent {

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
                <Field component={renderTextField} name="emailId" type="text" placeholder="Email" />
                <Field component={renderTextField} name="password" type="password" placeholder="Password" />
              
                    <Link to="/forgot-password">Forgot Password</Link>
           
                <div>
                    <Button className="btn-green mrT10" disabled={invalid || submitting || pristine}>Sign in</Button>{' '}
                </div>
            </form>

        )
    }
}


module.exports = reduxForm({
    form: 'login',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(Login);
