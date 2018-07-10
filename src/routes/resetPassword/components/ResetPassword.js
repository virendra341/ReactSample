import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { Button, Card, CardContent, Typography } from '@material-ui/core'

import { renderTextField, renderPasswordField } from 'reduxFormComponent'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'password',
        'cpassword'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is required'
        }
    })

    if (
        values.password &&
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
    ) {
        errors.password = 'Password is not strong'
    }

    if (
        values.password && values.cpassword &&
        values.cpassword !== values.password
    ) {
        errors.cpassword = 'Not match Password'
    }
    return errors
}


class ResetPassword extends PureComponent {

    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit, valid } = this.props;
        // console.log('Props ', this.props);

        return (
            <Card className="side-login-panel">
                <div className="card-header sb-login-logo">
                    <img src="assets/images/secberus-logo.png" />
                </div>
                <CardContent className="card-body">
                    <Typography className="card-title mrB15" gutterBottom variant="headline" component="h2">
                        NEW PASSWORD
                </Typography>
                    <form className="form-login" onSubmit={handleSubmit((values) => this.showResults(values))}>
                        <Field className="mt-control mrB25" component={renderPasswordField} name="password" type="password" placeholder="Password" />
                        <Field className="mt-control mrB25" component={renderPasswordField} name="cpassword" type="password" placeholder="Confirm Password" />
                        {/* <Button className="btn-green mrT20" disabled={!valid}>Save</Button> */}
                        <Link className="btn btn-green mrT20" to="/Login">Save</Link>
                    </form>
                </CardContent>
            </Card>
        )
    }
}


module.exports = reduxForm({
    form: 'resetpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ResetPassword);
