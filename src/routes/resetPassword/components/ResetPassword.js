import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Button, Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'

import APPCONFIG from 'constants/Config'
import {renderPasswordField } from 'reduxFormComponent'

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
        const { handleSubmit} = this.props;

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
                            NEW PASSWORD
                        </Typography>
                        <form className="form-qaud" onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field icon-size"  component={renderPasswordField} name="password" type="password" placeholder="Password" />
                            </Grid>
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field icon-size"  component={renderPasswordField} name="cpassword" type="password" placeholder="Confirm Password" />
                            </Grid>
                            <Button type="submit" onClick={()=>hashHistory.push('/login')} variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }}>Save</Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

module.exports = reduxForm({
    form: 'resetpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ResetPassword);
