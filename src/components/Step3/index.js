import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core';


class Step3 extends PureComponent {
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
                    <Grid item sm={12}>
                        <h2 className="mrB5">Upload SSH</h2>
                        <p className="mrT0 modal-txt">Please Upload SSH key file to proceed</p>
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
                        <div className="upload-box">
                            <span className="btn-file"> Browse
                        <input type="file" />
                            </span>
                        </div>
                    </Grid>

                </Grid>
            </div>
        );
    }
}
module.exports = Step3;