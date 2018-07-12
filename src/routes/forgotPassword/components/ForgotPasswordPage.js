
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';

import ForgotPassword from './ForgotPassword'
import LoginBackground from 'components/LoginBackground'

class ForgotPasswordPage extends PureComponent {

    render() {
        return (
        
                <div className="section-login">
                    <Grid container spacing={24} className="quad-container">
                            <LoginBackground></LoginBackground>
                            <ForgotPassword></ForgotPassword>
                     </Grid>
                </div>
            
        )
    }
}

module.exports = ForgotPasswordPage;
