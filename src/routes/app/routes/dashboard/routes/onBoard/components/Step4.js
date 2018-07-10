import React, { PureComponent } from 'react'
import { Grid,TextField,Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    button: {
        borderColor: '#2258DE',
        color: '#2258DE',
        backgroundColor:'#fff'
    }
});
class Step4 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
        }
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div >
                <Grid container spacing={24}>
                    <Grid item sm={12}>
                        <h2 className="mrB5">Invite your team</h2>
                        <p className="mrT0 modal-txt">Invite collaborator to assigns task and help you get complaint</p>
                    </Grid>
                    <Grid item sm={4} className="radio-box">
                        <div className='service-box active'>
                            <div className="cloud-service">
                                <img src="assets/images/aws.png" />
                            </div>
                            <div className="service-name">Amazon Web Server</div>
                        </div>
                    </Grid>
                    <Grid item sm={8} className="form-group">
                      <div className="acc-id mrB15">Account Id:1065485888</div>
                        <label>Account Name:</label>
                        <TextField
                            id="margin-none"
                            className="custom-txt-field"
                        />
                        <Button variant="outlined" className={classes.button}>
                            Invite
                        </Button>
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

Step4.propTypes = {
    classes: PropTypes.object.isRequired,
};
module.exports = withStyles(styles)(Step4);