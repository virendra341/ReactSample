import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { Button, Card, CardContent, Typography } from '@material-ui/core'

import { renderTextField } from 'reduxFormComponent'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'emailId',
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



class ForgotPassword extends PureComponent {

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
            <Card className="side-login-panel">
                <div className="card-header sb-login-logo">
                    <img src="assets/images/secberus-logo.png" />
                </div>
                <CardContent className="card-body">
                    <Typography className="card-title mrB15" gutterBottom variant="headline" component="h2">
                        FORGOT PASSWORD
                    </Typography>
                    <Typography className="mrB15" component="p">
                         Please enter your email id to request a password reset
                    </Typography>
                    <form className="form-login" onSubmit={handleSubmit((values) => this.showResults(values))}>
                        <Field className="mt-control mrB25" component={renderTextField} name="emailId" type="text" placeholder="Email" />
                            {/* <Button className="btn-green mrT10" disabled={!valid}>Password Reset</Button> */}
                            <Link className="btn-green mrT20" to="/forgot-password-email">Password Reset</Link>
                    </form>
                </CardContent>
                <div className="card-footer">
                    <p className="mrB25">Not Registered yet ?</p>
                    <Link className="btn-green-boder mrT10" to="/sign-up">Register</Link>
                    <Link className="btn-green mrT10 mrL10" to="/login">Sign in</Link>
                </div>
            </Card>
        )
    }
}


module.exports = reduxForm({
    form: 'forgotpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ForgotPassword);
