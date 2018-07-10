import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { Button, Card, CardContent, Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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

    handleSuggestionsClearRequested = () => {
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
        const { handleSubmit, invalid, submitting, pristine } = this.props;
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: this.handleChange,
        };
        return (

            <Card className="side-login-panel card-signup">
                <div className="card-header sb-login-logo">
                    <img src="assets/images/secberus-logo.png" />
                </div>
                <CardContent className="card-body">
                    <Typography className="card-title" gutterBottom variant="headline" component="h2">
                        REGISTER IN WITH SECBERUS
                </Typography>
                    <form className="form-login" onSubmit={handleSubmit((values) => this.showResults(values))}>

                        <Field className="mt-control mrB15" component={renderTextField} name="fullname" type="text" placeholder="Full Name" />

                        <Field className="mt-control mrB15" component={renderTextField} name="cname" type="text" placeholder="Company Name" />
                        <Grid container spacing={16}>
                            <Grid item sm={6}>
                                <Field onSuggestionsClearRequested={this.onSuggestionsClearRequested} handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequested} inputProps={inputProps} suggestions={this.state.suggestions} className="mt-control mrB15" id="country" name="country" placeholder="Select country" component={renderAutoCompleteField} >
                                </Field>
                            </Grid>
                            <Grid item sm={6}>
                                <Field className="mt-control mrB15" component={renderTextField} name="state" type="text" placeholder="State" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item sm={3}>
                                <Field className="mt-control mrB15" component={renderTextField} name="countryCode" type="text" placeholder="+ 91" />
                            </Grid>
                            <Grid item sm={9}>
                                <Field className="mt-control mrB15" component={renderTextField} name="contactNumber" type="text" placeholder="Contact Number" />
                            </Grid>
                        </Grid>
                        <Field className="mt-control mrB15" component={renderTextField} name="emailId" type="text" placeholder="Email" />

                        <Field className="mt-control mrB15" component={renderPasswordField} name="password" type="password" placeholder="Password" />

                        <Field name="iAgree" color="primary"
                            className="mt-checkbox" component={renderCheckbox} label="iAgree" />
                        {/* <Checkbox
                            value="checkedB"
                            color="primary"
                            className="mt-checkbox"
                        /> */}
                        <span className="fnt-12">I am agree with of <a href="#">Service agreement</a></span>
                        <div>
                            <Button className="btn-green" disabled={invalid || submitting || pristine}>Register</Button>{' '}
                        </div>
                    </form>
                </CardContent>
                <div className="card-footer">
                    <p className="mrB25">Already Registered ?</p>
                    <Link className="btn btn-green-boder mrT10" to="/login">Sign In</Link>
                </div>
            </Card>
        )
    }
}


module.exports = reduxForm({
    form: 'signup',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignUp);
