
import React, { PureComponent } from 'react'
import { Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import SignUp from './SignUp'
import LoginBackground from 'components/LoginBackground'
const styles = theme => ({
    root: {
      minHeight: '100vh',
      margin:'0px',
      width:'100%'
    }
  });
class SignUpPage extends PureComponent {

    render() {
        const { classes } = this.props;
        return (
            
                <div className="section-login">
                   <Grid container spacing={24} className={classes.root}>
                            <LoginBackground></LoginBackground>
                            <SignUp></SignUp>
                     </Grid>
                </div>
            
        )
    }
}
SignUpPage.propTypes = {
    classes: PropTypes.object,
  };
module.exports = withStyles(styles)(SignUpPage);