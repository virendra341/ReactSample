
import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core';

import Login from './Login'
import LoginBackground from 'components/LoginBackground'
import ErrorBoundary from 'components/ErrorBoundary'

class LoginPage extends PureComponent {

    render() {
        return (
            <div className="section-login">
                <Grid container spacing={24} className="quad-container"  id="section-login">
                    <ErrorBoundary width={70}>
                        <LoginBackground></LoginBackground>
                    </ErrorBoundary>
                    <ErrorBoundary width={30}>
                        <Login></Login>
                    </ErrorBoundary>
                </Grid>
            </div>

        )
    }
};

module.exports = LoginPage;