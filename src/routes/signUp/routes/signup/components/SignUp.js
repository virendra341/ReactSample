import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory } from 'react-router'
import { Button, Card, CardContent, CardHeader, Typography, Grid } from '@material-ui/core'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as signupActions from '../../../../../actions/signupAction'

import APPCONFIG from 'constants/Config'

import { renderTextField, renderAutoCompleteField, renderCheckbox, renderPasswordField } from 'reduxFormComponent'
import { getSuggestions, setConfig } from '../../../../../reduxFormComponent/AutoComplete'

import { SubmissionError } from 'redux-form';

const validate = values => {
    const errors = {}
    const requiredFields = [
        'first_name',
        'company',
        'phone_number',
        'email',
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

    if (
        values.password &&
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
    ) {
        errors.password = 'Password is not strong'
    }

    
    if (
        values.country === undefined || values.country===0
    ) {
        errors.country = 'This field is required'
    }
    return errors
}

const dataSourceConfig = {
    text: 'name',
    value: 'id',
};

const stateDataSourceConfig = {
    text: 'stateName',
    value: 'id',
};
class SignUp extends PureComponent {

    state = {
        errorMessage: '',
        countryList: [{ id: 1, name: 'Indina' }, { id: 2, name: 'japan' }, { id: 3, name: 'Indo' }],
        countryValue: '',
        countrySuggestions: [],
        selectedCountry: {},

        stateList: [{ id: 1, stateName: 'Rajsthan' }, { id: 2, stateName: 'MP' }, { id: 3, stateName: 'Pune' }],
        stateValue: '',
        stateSuggestions: [],
        selectedState: {},
    }

    handleSuggestionsFetchRequestedCountry = ({ value }) => {
        this.setState({
            countrySuggestions: getSuggestions(value, this.state.countryList),
        });
    };

    handleSuggestionsClearRequestedCountry = () => {
        this.setState({
            countrySuggestions: [],
        });
    };

    handleChangeCountry = (event, { newValue }) => {
        this.props.change('country', 0)
        setConfig(dataSourceConfig);
        this.setState({
            countryValue: newValue,
        });
    };

    onSelectStateCountry = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        event.preventDefault()
        this.setState({ selectedCountry: suggestion }, () => {
            this.props.change('country', suggestion[dataSourceConfig.value])
        });
    };


    handleSuggestionsFetchRequestedState = ({ value }) => {
        this.setState({
            stateSuggestions: getSuggestions(value, this.state.stateList),
        });
    };

    handleSuggestionsClearRequestedState = () => {
        this.setState({
            stateSuggestions: [],
        });
    };

    handleChangeState = (event, { newValue }) => {
        setConfig(stateDataSourceConfig);
        this.setState({
            stateValue: newValue,
        });
    };

    onSelectState = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        event.preventDefault()
        this.setState({ selectedState: suggestion }, () => {
            this.props.change('state', suggestion[stateDataSourceConfig.value])
        });
    };

    componentDidMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
        return this.props.actions.signup(values).
            then(result => {
                throw new SubmissionError(result)
            });
    }

    render() {

        const { handleSubmit, invalid, submitting, pristine } = this.props;
        const { countryValue, stateValue } = this.state;

        const countryInputProps = {
            placeholder: 'Select Country',
            value: countryValue,
            type: 'search',
            onChange: this.handleChangeCountry,
        };

        const stateInputProps = {
            placeholder: 'Select State',
            value: stateValue,
            type: 'search',
            onChange: this.handleChangeState,
        };

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
                            REGISTER IN WITH SECBERUS
                            <br /><span className="validation-error">{this.state.errorMessage}</span>
                        </Typography>
                        <form className="form-qaud" onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field" component={renderTextField} name="first_name" type="text" label="Full Name" />
                            </Grid>
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field" component={renderTextField} name="company" type="text" label="Company Name" />
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={6} className="qaud-grid auto-suggesation">
                                    <Field className="text-field" id="country" name="country" onSuggestionsClearRequested={this.handleSuggestionsClearRequestedCountry} handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequestedCountry} inputProps={countryInputProps} suggestions={this.state.countrySuggestions} dataSourceConfig={dataSourceConfig} component={renderAutoCompleteField} onSuggestionSelected={this.onSelectStateCountry}>
                                    </Field>
                                </Grid>
                                <Grid item sm={6} className="qaud-grid auto-suggesation">
                                    <Field className="text-field" id="state" name="state" onSuggestionSelected={this.onSelectState} onSuggestionsClearRequested={this.handleSuggestionsClearRequestedState} handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequestedState} inputProps={stateInputProps} suggestions={this.state.stateSuggestions} dataSourceConfig={stateDataSourceConfig} component={renderAutoCompleteField} >
                                    </Field>
                                </Grid>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={3} className="qaud-grid">
                                    <Field className="text-field underline-solid" component={renderTextField} name="countryCode" type="text" label="+ 91" disabled={true}
                                    />
                                </Grid>
                                <Grid item sm={9} className="qaud-grid">
                                    <Field className="text-field" component={renderTextField} name="phone_number" type="text" label="Contact Number" />
                                </Grid>
                            </Grid>
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field" component={renderTextField} name="email" type="text" label="Email" />
                            </Grid>
                            <Grid item sm={12} className="qaud-grid">
                                <Field className="text-field icon-size" component={renderPasswordField} name="password" type="password" label="Password" />
                            </Grid>
                            <Field className="mt-checkbox" name="iAgree" color="primary" component={renderCheckbox} label="iAgree" />
                            <span className="fnt-12">I am agree with of <a href="#">Service agreement</a></span>
                            <div>
                                <Button type="submit" variant="contained" className="btn-success" disabled={invalid || submitting || pristine}>Register</Button>{' '}
                            </div>
                        </form>
                        <hr className="divider" />
                        <div className="mrT25">
                            <p >Already Registered ?</p>
                            <Button onClick={() => hashHistory.push('/login')} variant="outlined" className="btn-outline">Sign In</Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(signupActions, dispatch)
    };
}

module.exports = reduxForm({
    form: 'signup',
    validate
})(connect(null, mapDispatchToProps)(SignUp));
