
import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core';

import Welcome from './Welcome'
import LoginBackground from 'components/LoginBackground'
import ErrorBoundary from 'components/ErrorBoundary'

class WelcomePage extends PureComponent {

    render() {
        const { classes } = this.props;
        return (

            <div className="section-login">
                <Grid container spacing={24} className="quad-container">
                    <ErrorBoundary error="bg-error">
                        <LoginBackground></LoginBackground>
                    </ErrorBoundary>
                    <ErrorBoundary error="login-error">
                        <Welcome></Welcome>
                    </ErrorBoundary>
                </Grid>
            </div>

        )
    }
}

module.exports = WelcomePage;
