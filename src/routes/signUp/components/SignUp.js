import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Button, Card, CardContent, CardHeader, Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { renderTextField, renderAutoCompleteField, renderCheckbox, renderPasswordField } from 'reduxFormComponent'
import { getSuggestions } from 'autoComplete'

const styles = theme => ({
    logo: {
        height: 'auto',
        width: "200px"
    },
    cardImage: {
        padding: '120px 40px 60px 40px'
    },
    formContent: {
        padding: '0 40px 40px'
    },
    mtControl: {
        marginBottom: "24px"
    },
    txtField: {
        width: '100%',
    },
    cardBody: {
        padding: '0 40px'
    },
    bdrTag: {
        margin: '0 -40px',
        borderColor: '#e1e6ee'
    },
    formSpacing: {
        marginBottom: "70px"
    },
    button: {
        borderColor: '#24BA4D',
        color: '#24BA4D'
    },
    CheckBoxWidth:{
        width:'auto',
        marginRight:'10px'

    }

});
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
        const { handleSubmit, invalid, submitting, pristine, classes } = this.props;
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: this.handleChange,
        };
        return (

            <Grid sm={3}>
                <Card className="side-login-panel">
                    <CardHeader
                        avatar={
                            <img src="assets/images/secberus-logo.png" className={classes.logo} />
                        }
                        className={classes.cardImage}
                    />
                    {/* <img src="assets/images/secberus-logo.png" /> */}
                    <CardContent className={classes.cardBody}>
                        <Typography className="mrB15" gutterBottom variant="headline" component="label">
                            REGISTER IN WITH SECBERUS
                        </Typography>

                        <form className={classes.formSpacing} onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Grid item sm={12} className={classes.mtControl}>
                            <Field  className={classes.txtField} component={renderTextField} name="fullname" type="text" placeholder="Full Name" />
                            </Grid>
                            <Grid item sm={12} className={classes.mtControl}>
                            <Field className={classes.txtField} component={renderTextField} name="cname" type="text" placeholder="Company Name" />
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={6} className={classes.mtControl}>
                                    <Field className={classes.txtField} onSuggestionsClearRequested={this.onSuggestionsClearRequested} handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequested} inputProps={inputProps} suggestions={this.state.suggestions} id="country" name="country" placeholder="Select country" component={renderAutoCompleteField} >
                                    </Field>
                                </Grid>
                                <Grid item sm={6} className={classes.mtControl}>
                                    <Field className={classes.txtField}  component={renderTextField} name="state" type="text" placeholder="State" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={3} className={classes.mtControl}>
                                    <Field className={classes.txtField} component={renderTextField} name="countryCode" type="text" placeholder="+ 91" />
                                </Grid>
                                <Grid item sm={9} className={classes.mtControl}>
                                    <Field className={classes.txtField} component={renderTextField} name="contactNumber" type="text" placeholder="Contact Number" />
                                </Grid>
                            </Grid>
                            <Grid item sm={12} className={classes.mtControl}>
                            <Field className={classes.txtField} component={renderTextField} name="emailId" type="text" placeholder="Email" />
                            </Grid>
                            <Grid item sm={12} className={classes.mtControl}>
                            <Field className={classes.txtField} component={renderPasswordField} name="password" type="password" placeholder="Password" />
                            </Grid>
                                <Field className={classes.CheckBoxWidth} name="iAgree" color="primary" component={renderCheckbox} label="iAgree" />
                                <span className="fnt-12">I am agree with of <a href="#">Service agreement</a></span>
                            <div>
                                <Button variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }} disabled={invalid || submitting || pristine}>Register</Button>{' '}
                            </div>
                        </form>
                        <hr className={classes.bdrTag} />
                        <div className="mrT25">
                            <p >Already Registered ?</p>
                            <Button onClick={()=>hashHistory.push('/login')} variant="outlined" className={classes.button}>Sign In</Button>
                        </div>
                    </CardContent>

                </Card>
            </Grid>



        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

const signupwithStyle = withStyles(styles)(SignUp)
module.exports = reduxForm({
    form: 'signup',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(signupwithStyle);
