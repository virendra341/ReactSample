
import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core';

import Verify from './Verify'
import LoginBackground from 'components/LoginBackground'
import ErrorBoundary from 'components/ErrorBoundary'

class VerifyPage extends PureComponent {

    render() {
        return (

            <div className="section-login">
                <Grid container spacing={24} className="quad-container">
                    <ErrorBoundary error="bg-error">
                        <LoginBackground></LoginBackground>
                    </ErrorBoundary>
                    <ErrorBoundary error="login-error">
                        <Verify></Verify>
                    </ErrorBoundary>
                </Grid>
            </div>

        )
    }
}

module.exports = VerifyPage;