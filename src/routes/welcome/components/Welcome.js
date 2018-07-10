import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { Card, CardContent, CardHeader, Typography, Grid,Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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


class Welcome extends PureComponent {

    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit, valid, classes } = this.props;
        console.log('Props ', this.props);

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
                            WELCOME
                        </Typography>
                        <Typography className="mrB15" gutterBottom variant="headline" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         </Typography>
                        <form className={classes.formSpacing} onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Button variant="contained" style={{ backgroundColor: '#24BA4D', color: '#fff' }}>Resent</Button>

                        </form>
                    </CardContent>
                </Card>
            </Grid>

        )
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};
const WelcomewithStyle = withStyles(styles)(Welcome)
module.exports = reduxForm({
    form: 'welcome',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(WelcomewithStyle);
