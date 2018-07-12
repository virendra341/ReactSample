import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory } from 'react-router'

import { Button, Card, CardContent, CardHeader, Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import APPCONFIG from 'constants/Config'

import { renderTextField, renderAutoCompleteField, renderCheckbox, renderPasswordField } from 'reduxFormComponent'
import { getSuggestions,setConfig } from '../../../reduxFormComponent/AutoComplete'

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
        marginBottom: "15px"
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
        color: '#24BA4D',
        '&:hover': {
            backgroundColor: '#24BA4D',
            color: '#fff'
        }
    },
    CheckBoxWidth: {
        width: 'auto',
        marginRight: '10px'
    },
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
        countryList: [{ id: 1, name: 'Indina' }, { id: 2, name: 'japan' }, { id: 3, name: 'Indo' }],
        countryValue: '',
        countrySuggestions: [],

        stateList: [{ id: 1, stateName: 'Rajsthan' }, { id: 2, stateName: 'MP' }, { id: 3, stateName: 'Pune' }],
        stateValue: '',
        stateSuggestions: []
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
        setConfig(dataSourceConfig);
        this.setState({
            countryValue: newValue,
        }, () => { console.log(' countryValue ',this.state.countryValue);  });
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

    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }



    render() {
        const { handleSubmit, invalid, submitting, pristine, classes } = this.props;
        const { countryValue, stateValue } = this.state;

        const countryInputProps = {
            placeholder: 'Select Country',
            value: countryValue,
            onChange: this.handleChangeCountry,
        };

        const stateInputProps = {
            placeholder: 'Select State',
            value: stateValue,
            onChange: this.handleChangeState,
        };
        return (

            <Grid item sm={3} className="pd0">
                <Card className="side-login-panel">
                    <CardHeader
                        avatar={
                            <img src={APPCONFIG.company_logo_path} className={classes.logo} />
                        }
                        className={classes.cardImage}
                    />
                    <CardContent className={classes.cardBody}>
                        <Typography className="mrB15" gutterBottom variant="headline" component="label">
                            REGISTER IN WITH SECBERUS
                        </Typography>
                        <form className={classes.formSpacing} onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Grid item sm={12} className={classes.mtControl}>
                                <Field className={classes.txtField} component={renderTextField} name="fullname" type="text" label="Full Name" />
                            </Grid>
                            <Grid item sm={12} className={classes.mtControl}>
                                <Field className={classes.txtField} component={renderTextField} name="cname" type="text" label="Company Name" />
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={6} className={classes.mtControl}>
                                    <Field className={classes.txtField + ' mrR10'} id="country" name="country" onSuggestionsClearRequested={this.handleSuggestionsClearRequestedCountry} handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequestedCountry} inputProps={countryInputProps} suggestions={this.state.countrySuggestions} dataSourceConfig={dataSourceConfig} component={renderAutoCompleteField} >
                                    </Field>
                                </Grid>
                                <Grid item sm={6} className={classes.mtControl}>
                                    <Field className={classes.txtField + ' mrR10'} id="state" name="state" onSuggestionsClearRequested={this.handleSuggestionsClearRequestedState} handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequestedState} inputProps={stateInputProps} suggestions={this.state.stateSuggestions} dataSourceConfig={stateDataSourceConfig} component={renderAutoCompleteField} >
                                    </Field>
                                </Grid>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item sm={3} className={classes.mtControl}>
                                    <Field className={classes.txtField + ' underline-solid'} component={renderTextField} name="countryCode" type="text" label="+ 91" disabled={true}
                                    />
                                </Grid>
                                <Grid item sm={9} className={classes.mtControl}>
                                    <Field className={classes.txtField} component={renderTextField} name="contactNumber" type="text" label="Contact Number" />
                                </Grid>
                            </Grid>
                            <Grid item sm={12} className={classes.mtControl}>
                                <Field className={classes.txtField} component={renderTextField} name="emailId" type="text" label="Email" />
                            </Grid>
                            <Grid item sm={12} className={classes.mtControl}>
                                <Field className={classes.txtField + ' icon-size'} component={renderPasswordField} name="password" type="password" label="Password" />
                            </Grid>
                            <Field className={classes.CheckBoxWidth} name="iAgree" color="primary" component={renderCheckbox} label="iAgree" />
                            <span className="fnt-12">I am agree with of <a href="#">Service agreement</a></span>
                            <div>
                                <Button type="submit" variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }} disabled={invalid || submitting || pristine}>Register</Button>{' '}
                            </div>
                        </form>
                        <hr className={classes.bdrTag} />
                        <div className="mrT25">
                            <p >Already Registered ?</p>
                            <Button onClick={() => hashHistory.push('/login')} variant="outlined" className={classes.button}>Sign In</Button>
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
