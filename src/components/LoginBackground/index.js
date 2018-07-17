
import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid';


class LoginBackground extends PureComponent {

    render() {
        return (
            <Grid item sm={9} className="sb-loging-bg pd0" style={{backgroundImage: "url('assets/images/bg.jpg')"}}>
            </Grid>
        )
    }
}
module.exports = LoginBackground;