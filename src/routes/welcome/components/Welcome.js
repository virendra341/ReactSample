import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { Card, CardContent, CardHeader, Typography, Grid,Button } from '@material-ui/core'

import APPCONFIG from 'constants/Config'

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
        const { handleSubmit } = this.props;
        console.log('Props ', this.props);

        return (
            <Grid item sm={3} className="form-panel">
                <Card className="side-login-panel">
                     <CardHeader
                        avatar={
                            <img src={APPCONFIG.company_logo_path} className="logo-icon" />
                        }
                        className="logo-qaud"
                    />
                    <CardContent  className="quad-content">
                        <Typography className="mrB15" gutterBottom variant="headline" component="label">
                            WELCOME
                        </Typography>
                        <Typography className="mrB15" gutterBottom variant="headline" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         </Typography>
                        <form className="form-qaud" onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Button variant="contained" className="btn-success">Resent</Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

module.exports = reduxForm({
    form: 'welcome',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(Welcome);
