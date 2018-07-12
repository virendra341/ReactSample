
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';

import ResetPassword from './ResetPassword'
import LoginBackground from 'components/LoginBackground'


class ResetPasswordPage extends PureComponent {

    render() {
        return (
                <div className="section-login">
                    <Grid container spacing={24} className="quad-container">
                    <LoginBackground></LoginBackground>
                    <ResetPassword></ResetPassword>
                    </Grid>
                </div>
            )
    }
}

module.exports = ResetPasswordPage;
