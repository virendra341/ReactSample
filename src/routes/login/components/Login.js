/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-05 18:18:44 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-09 17:55:25
 */
import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link ,hashHistory} from 'react-router'
import { Button, Card, CardContent, CardHeader, Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { renderTextField, renderPasswordField } from 'reduxFormComponent'
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
    mtControl:{
        marginBottom:"24px"
    },
    txtField:{
        width:'100%',
    },
    cardBody:{
        padding:'0 40px'
    },
    bdrTag:{
        margin:'0 -40px',
        borderColor:'#e1e6ee'
    },
    formSpacing:{
        marginBottom:"70px"
    },
    button:{
        borderColor:'#24BA4D',
        color:'#24BA4D'
    }

});
const validate = values => {
    const errors = {}
    const requiredFields = [
        'emailId',
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
    return errors
}


class Login extends PureComponent {

    componentDidMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }

    render() {
        const { handleSubmit, invalid, submitting, pristine, classes } = this.props;
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
                            SIGN IN WITH SECBERUS
                        </Typography>

                        <form onSubmit={handleSubmit((values) => this.showResults(values))} className={classes.formSpacing}>
                            <Grid item sm={12} className={classes.mtControl}>
                                <Field  className={classes.txtField}  component={renderTextField} name="emailId" type="text" placeholder="Email" />
                            </Grid>
                            <Grid item sm={12} className="mrB10">
                                <Field className={classes.txtField} component={renderPasswordField} name="password" type="password" placeholder="Password" />
                            </Grid>
                            <div className="mrB20">
                                <Link to="/forgot-password" >Forgot Password</Link>
                            </div>
                            <div>
                                <Button variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }} disabled={invalid || submitting || pristine}>Sign in</Button>
                            </div>
                        </form>
                        <hr className={ classes.bdrTag}/>
                        <div className="mrT25">
                            <p >Not Registered yet ?</p>
                            <Button onClick={()=>hashHistory.push('/sign-up')} variant="outlined" className={classes.button}>Register</Button>
                        </div>
                    </CardContent>

                </Card>
            </Grid>

        )
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
const loginwithStyle = withStyles(styles)(Login)
module.exports = reduxForm({ form: 'login', validate })(loginwithStyle);
