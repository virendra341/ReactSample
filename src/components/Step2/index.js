import React, { PureComponent } from 'react'
import { Grid ,TextField } from '@material-ui/core';


class Step2 extends PureComponent {
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
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid sm={12}>
                        <h2 className="mrB5">Cloud Environment</h2>
                        <p className="mrT0 modal-txt">Please select your organization's cloud provider.</p>
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
                        <label>Role ARN:</label>
                        <a href="#" className="help-txt">Need Help to get ARN ?</a>
                        <TextField
                            id="margin-none"
                            className="custom-txt-field"
                        />
                        <label>External Id:</label>
                        <TextField
                            id="margin-none"
                            className="custom-txt-field"
                            disabled={true}
                        />
                    </Grid>
                   
                </Grid>
            </div>
        );
    }
}
module.exports = Step2;