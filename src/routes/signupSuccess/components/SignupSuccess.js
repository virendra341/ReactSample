import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
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


class SignupSuccess extends PureComponent {

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
                        WELCOME
                </Typography>
                    <Typography className="mrB15" component="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
                    <form className="form-login" onSubmit={handleSubmit((values) => this.showResults(values))}>
                        {/* <Button className="btn-green mrT20" disabled={!valid}>Done</Button>{' '} */}
                        <Link className="btn-green mrT20" to="">Resent</Link>
                    </form>
                </CardContent>
            </Card>

        )
    }
}


module.exports = reduxForm({
    form: 'signupsuccess',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignupSuccess);
