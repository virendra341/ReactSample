/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-05 18:18:44 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-07-05 18:18:44 
 */
import React, { PureComponent } from 'react'

import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { Button, FormGroup, Card, CardHeader, CardFooter, CardBody, CardTitle } from 'reactstrap'

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
            <Card className="col-sm-3 pd0">
                <CardHeader>
                    <div className="sb-login-logo">
                        <img src="assets/images/secberus-logo.png" />
                    </div>
                </CardHeader>
                <CardBody>
                    <CardTitle>SIGN IN WITH SECBERUS</CardTitle>
                    <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                        <Field component={renderTextField} name="emailId" type="text" placeholder="Email Id" className="ABC" />
                        <Field component={renderTextField} name="password" type="password" placeholder="Password" className="ABC" />
                        <FormGroup>
                            <a href="#">Forgot Password</a>
                        </FormGroup>
                        <div>
                            <Button className="btn-green mrT10" disabled={invalid || submitting || pristine}>Sign in</Button>{' '}
                        </div>
                    </form>
                </CardBody>
                <CardFooter>
                    <p>Not Registered yet ?</p>
                    <Link className="btn btn-green-boder mrT10" to="/sign-up">Register</Link>
                </CardFooter>
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
