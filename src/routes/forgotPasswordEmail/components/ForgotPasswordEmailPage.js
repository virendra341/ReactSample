
import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid} from '@material-ui/core';

import ForgotPasswordEmail from './ForgotPasswordEmail'
import LoginBackground from 'components/LoginBackground'

const styles = theme => ({
    root: {
      minHeight: '100vh',
      margin:'0px',
      width:'100%'
    }
  });

class ForgotPasswordEmailPage extends PureComponent {

    render() {
        const { classes } = this.props;
        return (

            <div className="section-login">
                <Grid container spacing={24} className={classes.root}>
                <LoginBackground></LoginBackground>
                <ForgotPasswordEmail></ForgotPasswordEmail>
                </Grid>
            </div>

        )
    }
}
ForgotPasswordEmailPage.propTypes = {
    classes: PropTypes.object,
  };
module.exports = withStyles(styles)(ForgotPasswordEmailPage);
    