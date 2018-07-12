
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';

import SignUp from './SignUp'
import LoginBackground from 'components/LoginBackground'

class SignUpPage extends PureComponent {

    render() {
        return (
            
                <div className="section-login">
                   <Grid container spacing={24} className="quad-container">
                            <LoginBackground></LoginBackground>
                            <SignUp></SignUp>
                     </Grid>
                </div>
            
        )
    }
}

module.exports = SignUpPage;