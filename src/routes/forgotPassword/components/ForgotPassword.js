import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Card, CardContent, CardHeader, Typography,Grid,Button } from '@material-ui/core'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as forgotPasswordActions from '../../../actions/forgotPasswordAction'

import APPCONFIG from 'constants/Config'
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
        this.props.actions.forgotPassword(values).
        then(result => { console.log('forgot password response ', result) });
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
                            FORGOT PASSWORD
                        </Typography>
                        <Typography className="mrB15" gutterBottom variant="headline" component="p">
                            Please enter your email id to request a password reset
                         </Typography>

                        <form className="form-qaud" onSubmit={handleSubmit((values) => this.showResults(values))}>
                           <Grid item sm={12} className="qaud-grid">
                            <Field className="text-field" component={renderTextField} label="Email" name="emailId" type="text" placeholder="Email" />
                            </Grid>
                            <Button type="submit" disabled={invalid || submitting || pristine} variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }}>Password Reset</Button>
                        </form>
                        <hr className="divider"/>
                        <div className="mrT25">
                            <p >Not Registered yet ?</p>
                            <Button onClick={()=>hashHistory.push('/sign-up')} variant="outlined" className="btn-outline mrR10">Register</Button>
                            <Button onClick={()=>hashHistory.push('/login')} variant="outlined" className="btn-outline">Sign in</Button>
                        </div> 
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
    form: 'forgotpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(connect(null, mapDispatchToProps)(ForgotPassword));
