
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';

import ResetPassword from './ResetPassword'
import LoginBackground from 'components/LoginBackground'
import ErrorBoundary from 'components/ErrorBoundary'

class ResetPasswordPage extends PureComponent {

    render() {
        return (
                <div className="section-login">
                    <Grid container spacing={24} className="quad-container">
                    <ErrorBoundary error="bg-error">
                    <LoginBackground></LoginBackground>
                    </ErrorBoundary>
                    <ErrorBoundary error="login-error">
                    <ResetPassword></ResetPassword>
                    </ErrorBoundary>
                    </Grid>
                </div>
            )
    }
}

module.exports = ResetPasswordPage;
