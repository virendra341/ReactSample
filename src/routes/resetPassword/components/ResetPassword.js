import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Button, Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import APPCONFIG from 'constants/Config'
import {renderPasswordField } from 'reduxFormComponent'

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
    }

});

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
        const { handleSubmit, valid, classes } = this.props;

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
                            NEW PASSWORD
                        </Typography>
                        <form className={classes.formSpacing} onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Grid item sm={12} className={classes.mtControl}>
                                <Field className={classes.txtField + ' icon-size'} component={renderPasswordField} name="password" type="password" placeholder="Password" />
                            </Grid>
                            <Grid item sm={12} className={classes.mtControl}>
                                <Field className={classes.txtField + ' icon-size'} component={renderPasswordField} name="cpassword" type="password" placeholder="Confirm Password" />
                            </Grid>
                            <Button type="submit" onClick={()=>hashHistory.push('/login')} variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }}>Save</Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

ResetPassword.propTypes = {
    classes: PropTypes.object.isRequired,
};

const ResetPasswordwithStyle = withStyles(styles)(ResetPassword)
module.exports = reduxForm({
    form: 'resetpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ResetPasswordwithStyle);
