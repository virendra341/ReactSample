import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Card, CardContent, CardHeader, Typography,Grid,Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import APPCONFIG from 'constants/Config'
import { renderTextField } from 'reduxFormComponent'

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
        color: '#24BA4D',
        '&:hover':{
            backgroundColor:'#24BA4D',
            color:'#fff'
        }
    }

});

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
                            FORGOT PASSWORD
                        </Typography>
                        <Typography className="mrB15" gutterBottom variant="headline" component="p">
                            Please enter your email id to request a password reset
                         </Typography>

                        <form className={classes.formSpacing} onSubmit={handleSubmit((values) => this.showResults(values))}>
                           <Grid item sm={12} className={classes.mtControl}>
                            <Field className={classes.txtField} component={renderTextField} name="emailId" type="text" placeholder="Email" />
                            </Grid>
                            <Button type="submit" onClick={()=>hashHistory.push('/forgot-password-email')} variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }}>Password Reset</Button>
                        </form>
                        <hr className={classes. bdrTag} />
                        <div className="mrT25">
                            <p >Not Registered yet ?</p>
                            <Button onClick={()=>hashHistory.push('/sign-up')} variant="outlined" className={classes.button +' mrR10'}>Register</Button>
                            <Button onClick={()=>hashHistory.push('/login')} variant="outlined" className={classes.button}>Sign in</Button>
                        </div> 
                    </CardContent>

                </Card>
            </Grid>
        )
    }
}

ForgotPassword.propTypes = {
    classes: PropTypes.object.isRequired,
};

const ForgotwithStyle = withStyles(styles)(ForgotPassword)

module.exports = reduxForm({
    form: 'forgotpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ForgotwithStyle);
