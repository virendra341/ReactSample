import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Button, Card, CardContent, CardHeader, Typography, Grid } from '@material-ui/core'

import APPCONFIG from 'constants/Config'
import { renderTextField, renderAutoCompleteField, renderCheckbox, renderPasswordField } from 'reduxFormComponent'
import { getSuggestions } from 'autoComplete'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'fullname',
        'cname',
        'country',
        'contactNumber',
        'emailId',
        'password',
        'isAgree'
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

    if (
        values.password &&
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
    ) {
        errors.password = 'Password is not strong'
    }

    if (
        values.country === undefined
    ) {
        errors.country = 'This field is required'
    }
    return errors
}

class SignUp extends PureComponent {

    state = {
        countryList: [{ id: 1, name: 'Indina' }, { id: 2, name: 'japan' }, { id: 3, name: 'Indo' }],
        value: '',
        suggestions: []
    }

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value, this.state.countryList),
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    handleChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
        });
    };

    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }

    render() {
        const { handleSubmit, invalid, submitting, pristine} = this.props;
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Select Country',
            value,
            onChange: this.handleChange,
        };
        return (

            <Grid item sm={3} className="form-panel signup-quad">
                <Card className="side-login-panel">
                    <CardHeader
                        avatar={
                            <img src={APPCONFIG.company_logo_path} className="logo-icon" />
                        }
                        className="logo-qaud"
                    />
                    <CardContent className="quad-content">
                        <Typography className="mrB15" gutterBottom variant="headline" component="label">
                            REGISTER IN WITH SECBERUS
                        </Typography>
                        <form className="form-qaud" onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Grid item sm={12}  className="qaud-grid">
                            <Field  className="text-field" component={renderTextField} name="fullname" type="text" label="Full Name" />
                            </Grid>
                            <Grid item sm={12}  className="qaud-grid">
                            <Field className="text-field" component={renderTextField} name="cname" type="text" label="Company Name" />
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={6}  className="qaud-grid auto-suggesation">
                                    <Field className="text-field mrR10" onSuggestionsClearRequested={this.onSuggestionsClearRequested} handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequested} inputProps={inputProps} suggestions={this.state.suggestions} id="country" name="country" label="Select country"  component={renderAutoCompleteField} >
                                    </Field>
                                </Grid>
                                <Grid item sm={6} className="qaud-grid">
                                    <Field className="text-field"  component={renderTextField} name="state" type="text" label="State" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={3} className="qaud-grid">
                                    <Field className="text-field underline-solid"  component={renderTextField} name="countryCode" type="text" label="+ 91" disabled={true} 
                                    />
                                </Grid>
                                <Grid item sm={9} className="qaud-grid">
                                    <Field className="text-field" component={renderTextField} name="contactNumber" type="text" label="Contact Number" />
                                </Grid>
                            </Grid>
                            <Grid item sm={12}className="qaud-grid">
                            <Field className="text-field" component={renderTextField} name="emailId" type="text" label="Email"/>
                            </Grid>
                            <Grid item sm={12} className="qaud-grid">
                            <Field className="text-field icon-size"  component={renderPasswordField} name="password" type="password" label="Password" />
                            </Grid>
                                <Field className="mt-checkbox" name="iAgree" color="primary" component={renderCheckbox} label="iAgree" />
                                <span className="fnt-12">I am agree with of <a href="#">Service agreement</a></span>
                            <div>
                                <Button type="submit" variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }} disabled={invalid || submitting || pristine}>Register</Button>{' '}
                            </div>
                        </form>
                        <hr className="divider"/>
                        <div className="mrT25">
                            <p >Already Registered ?</p>
                            <Button onClick={()=>hashHistory.push('/login')} variant="outlined" className="btn-outline">Sign In</Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

module.exports = reduxForm({
    form: 'signup',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignUp);
