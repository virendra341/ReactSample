
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';

import ForgotPasswordEmail from './ForgotPasswordEmail'
import LoginBackground from 'components/LoginBackground'

class ForgotPasswordEmailPage extends PureComponent {

    render() {
        return (

            <div className="section-login">
                <Grid container spacing={24} className="quad-container">
                <LoginBackground></LoginBackground>
                <ForgotPasswordEmail></ForgotPasswordEmail>
                </Grid>
            </div>

        )
    }
}

module.exports = ForgotPasswordEmailPage;
    