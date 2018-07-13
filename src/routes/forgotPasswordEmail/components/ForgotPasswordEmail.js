import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Button, Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'

import APPCONFIG from 'constants/Config'

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

class ForgotPasswordEmail extends PureComponent {
    componentWillMount() {
        this.props.reset();
    }
    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <Grid item sm={3} className="form-panel">
                <Card className="side-login-panel">
                    <CardHeader
                        avatar={
                            <img src={APPCONFIG.company_logo_path} className="logo-icon" />
                        }
                        className="logo-qaud"
                    />
                    <CardContent className="quad-content">
                        <Typography className="mrB15" gutterBottom variant="headline" component="label">
                            PASSWORD RESET EMAIL SEND!
                         </Typography>
                        <Typography className="mrB15" gutterBottom variant="headline" component="p">
                            An email has been sent to john@gmail.com follow the directions in the email to reset your password
                        </Typography>
                        <form className="form-qaud" onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <div>
                                <Button type="submit" onClick={()=>hashHistory.push('/reset-password')} variant="contained" className="btn-success">Done</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
       )
    }
}

module.exports = reduxForm({
    form: 'forgotpasswordemail',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ForgotPasswordEmail);
