/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-05 18:18:44 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-16 17:19:18
 */
import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link, hashHistory } from 'react-router'
import { Button, Card, CardContent, CardHeader, Typography, Grid } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as loginActions from '../../../actions/loginAction'
import APPCONFIG from 'constants/Config'

import { renderTextField, renderPasswordField } from 'reduxFormComponent'
import SnackbarMessage from 'components/SnackbarMessage'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'username',
        'password'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is required'
        }
    })
    if (
        values.username &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
    ) {
        errors.username = 'Invalid email address'
    }
    return errors
}


class Login extends PureComponent {

    state = { errorMessage: '' }
    componentDidMount() {
        this.props.reset();
    }

    showResults = (values) => {
        this.props.actions.login(values).
            then(result => {
                this.setState({ errorMessage: result })
                setTimeout(() => {
                    this.setState({ errorMessage: '' })
                }, 5000);


            });
    }

    render() {
        const { handleSubmit, invalid, submitting, pristine } = this.props;

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
                            SIGN IN WITH SECBERUS
                            <br /><span className="validation-error">{this.state.errorMessage}</span>
                        </Typography>

                        <form onSubmit={handleSubmit((values) => this.showResults(values))} className="form-qaud">
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field" component={renderTextField} label="Email" name="username" type="text" />
                            </Grid>
                            <Grid item sm={12} className="qaud-grid mrB10">
                                <Field className="text-field icon-size" component={renderPasswordField} name="password" label="Password" type="password" />
                            </Grid>
                            <div className="mrB20">
                                <Link to="/forgot-password" >Forgot Password</Link>
                            </div>
                            <div>
                                <Button type="submit" variant="contained" className="btn-success" disabled={invalid || submitting || pristine}>Sign in</Button>
                            </div>
                        </form>
                        <hr className="divider" />
                        <div className="mrT25">
                            <p>Not Registered yet ?</p>
                            <Button onClick={() => hashHistory.push('/sign-up')} variant="outlined" className="btn-outline">Register</Button>
                        </div>
                    </CardContent>
                </Card>
                {/* <SnackbarMessage
                    open={this.state.showSnackbarState}
                    message={this.state.message}
                /> */}
            </Grid>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

module.exports = reduxForm({ form: 'login', validate })(connect(null, mapDispatchToProps)(Login));
