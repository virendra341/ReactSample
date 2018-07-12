
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';

import Welcome from './Welcome'
import LoginBackground from 'components/LoginBackground'

class WelcomePage extends PureComponent {

    render() {
        const { classes } = this.props;
        return (
            
                <div className="section-login">
                    <Grid container spacing={24} className="quad-container">
                            <LoginBackground></LoginBackground>
                            <Welcome></Welcome>
                      </Grid>
                </div>
            
        )
    }
}

module.exports = WelcomePage;
