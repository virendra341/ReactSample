
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';

import Login from './Login'
import LoginBackground from 'components/LoginBackground'

class LoginPage extends PureComponent {

    render() {
        return (
           
                <div className="section-login">
                    <Grid container spacing={24} className="quad-container">
                        <LoginBackground></LoginBackground>
                        <Login></Login>
                    </Grid>
                </div>
           
        )
    }
};

module.exports = LoginPage;