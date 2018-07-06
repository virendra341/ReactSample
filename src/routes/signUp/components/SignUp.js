import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

import { renderTextField, renderSelectField } from 'reduxFormComponent'


const validate = values => {
    const errors = {}
    const requiredFields = [
        'fullname',
        'cname',
        'country'
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
        values.country === undefined
    ) {
        errors.country = 'This field is required'
    }
    return errors
}


class SignUp extends PureComponent {

    state = {
        countryList: [{ id: 1, name: 'Indina' }, { id: 2, name: 'japan' }]
    }
    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit, invalid, submitting, pristine } = this.props;
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

                <Field  className="mt-control mrB15" component={renderTextField} name="fullname" type="text" placeholder="Full Name" />

                <Field className="mt-control mrB15" component={renderTextField} name="cname" type="text" placeholder="Company Name" />
                <Grid container spacing={16}>
                    <Grid item  sm={6}>  
                    <Field className="mt-control mrB15" name="country" placeholder="Select country" component={renderSelectField} labelKey="name" valueKey="id" options={this.state.countryList}></Field>
                    </Grid>
                    <Grid item  sm={6}>   
                    <Field className="mt-control mrB15" component={renderTextField} name="state" type="text" placeholder="State" />
                    </Grid>
                </Grid>
                <Grid container spacing={16}>
                    <Grid item  sm={3}> 
                    <Field className="mt-control mrB15" component={renderTextField} name="countryCode" type="text" placeholder="+ 91" />
                    </Grid>
                    <Grid item  sm={9}>
                    <Field className="mt-control mrB15" component={renderTextField} name="contactNumber" type="text" placeholder="Contact Number" />
                    </Grid>
                </Grid>
                <Field className="mt-control mrB15" component={renderTextField} name="emailId" type="text" placeholder="Email" />

                <Field className="mt-control mrB15" component={renderTextField} name="password" type="text" placeholder="Password" />
                <Checkbox
                    value="checkedB"
                    color="primary"
                    className="mt-checkbox"
                />
                I am agree with of <a href="#">Service agreement</a>
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
