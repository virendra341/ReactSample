import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { hashHistory} from 'react-router'
import { Card, CardContent, CardHeader, Typography, Grid,Button } from '@material-ui/core'

import APPCONFIG from 'constants/Config'

class Verify extends PureComponent {

    render() {
       
        return (
            <Grid item sm={3} className="form-panel">
                <Card className="side-login-panel">
                     <CardHeader
                        avatar={
                            <img src={APPCONFIG.company_logo_path} className="logo-icon" />
                        }
                        className="logo-qaud"
                    />
                    <CardContent  className="quad-content">
                        <Typography className="mrB15" gutterBottom variant="headline" component="label">
                            Verify Email
                        </Typography>
                        <Typography className="mrB15" gutterBottom variant="headline" component="p">
                            Verified your email address.
                         </Typography>
                         <Button variant="contained" className="btn-success" onClick={()=>hashHistory.push('/login')}>login</Button>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

module.exports = Verify;
