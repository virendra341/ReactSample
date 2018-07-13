
import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core';

import ForgotPasswordEmail from './ForgotPasswordEmail'
import LoginBackground from 'components/LoginBackground'
import ErrorBoundary from 'components/ErrorBoundary'

class ForgotPasswordEmailPage extends PureComponent {

    render() {
        return (

            <div className="section-login">
                <Grid container spacing={24} className="quad-container">
                    <ErrorBoundary>
                        <LoginBackground></LoginBackground>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <ForgotPasswordEmail></ForgotPasswordEmail>
                    </ErrorBoundary>
                </Grid>
            </div>

        )
    }
}

module.exports = ForgotPasswordEmailPage;
