import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Button, Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as forgotPasswordActions from '../../../actions/forgotPasswordAction'

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
        this.props.actions.resetPassword(values).
        then(result => { console.log('reset password response ', result) });
    }
    render() {
        const { handleSubmit,invalid, submitting, pristine} = this.props;

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
                                <Field className="text-field icon-size"  component={renderPasswordField} name="password" type="password" label="Password" />
                            </Grid>
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field icon-size"  component={renderPasswordField} name="cpassword" type="password" label="Confirm Password" />
                            </Grid>
                            <Button type="submit" disabled={invalid || submitting || pristine}  variant="contained" className="btn-success">Save</Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(forgotPasswordActions, dispatch)
    };
}

module.exports = reduxForm({
    form: 'resetpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(connect(null, mapDispatchToProps)(ResetPassword));
