/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-05 18:18:44 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-06 16:42:36
 */
import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { Button, Card, CardContent, Typography } from '@material-ui/core'

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
                <Card className="side-login-panel">
                    <div className="card-header sb-login-logo">
                        <img src="assets/images/secberus-logo.png" />
                    </div>
                    <CardContent className="card-body">
                        <Typography className="card-title" gutterBottom variant="headline" component="h2">
                            SIGN IN WITH SECBERUS
                        </Typography>
                        <form className="form-login" onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Field className="mt-control mrB15" component={renderTextField} name="emailId" type="text" placeholder="Email" />
                            <Field className="mt-control mrB15" component={renderTextField} name="password" type="password" placeholder="Password" />
                            <Link to="/forgot-password" className="fnt-13">Forgot Password</Link>
                            <div>
                                <Button className="btn-green mrT20" disabled={invalid || submitting || pristine}>Sign in</Button>
                            </div>
                        </form>
                    </CardContent>
                    <div className="card-footer">
                        <p className="mrB25">Not Registered yet ?</p>
                        <Link className="btn btn-green-boder mrT20" to="/sign-up">Register</Link>
                    </div>
                </Card>

        )
    }
}


module.exports = reduxForm({
    form: 'login',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(Login);
