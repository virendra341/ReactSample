import React, { PureComponent } from 'react'
import { Grid, Radio } from '@material-ui/core';


class Step1 extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            selectedValue: '',
        }
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };

    render() {
        const {selectedValue} = this.state
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item sm={12}>
                        <h2 className="mrB5">Cloud Environment</h2>
                        <p className="mrT0 modal-txt">Please select your organization's cloud provider.</p>
                    </Grid>
                    <Grid item sm={4} className="radio-box">
                        <Radio 
                         checked={selectedValue === 'a'}
                        onChange={this.handleChange}
                        value="a" 
                        />
                        <div className={selectedValue ==='a' ? 'active' :''}>
                            <div className="cloud-service">
                                <img src="assets/images/aws.png" />
                            </div>
                            <div className="service-name">Amazon Web Server</div>
                        </div>
                    </Grid>
                    <Grid item sm={4} className="radio-box">
                        <Radio 
                         checked={selectedValue === 'b'}
                         onChange={this.handleChange}
                         value="b" 
                        />
                        <div className={selectedValue ==='b' ? 'active' :''}>
                            <div className="cloud-service">
                                <img src="assets/images/ms-azure.png" />
                            </div>
                            <div className="service-name">Microsoft Azure</div>
                        </div>
                    </Grid>
                    <Grid item sm={4} className="radio-box">
                        <Radio 
                         checked={selectedValue === 'c'}
                         onChange={this.handleChange}
                         value="c" 
                        />
                        <div className={selectedValue ==='c' ? 'active' :''}>
                            <div className="cloud-service">
                                <img src="assets/images/google-cloud.png" />
                            </div>
                            <div className="service-name">Google Cloud</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );

    }
}
module.exports = Step1;