import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Step1 from 'components/Step1';
import Step2 from 'components/Step2';
import Step3 from 'components/Step3';
import Step4 from 'components/Step4';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['', '', '',''];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <Step1/>
      );
    case 1:
      return (
        <Step2/>
      );
    case 2:
      return (
        <Step3/>
      );
    case 3:
      return (
        <Step4/>
      );
    default:
      return 'Uknown stepIndex';
  }
}

class Wizzard extends PureComponent {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep} = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep} = this.state;
    
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>

          {steps.map(label => {
            
            return (
              <Step key={label} className="step-process">
                <StepLabel className='stepper-label'>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className="footer-btn">
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button className="btn-primary" variant="contained" color="primary" onClick={this.handleNext} >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Wizzard.propTypes = {
  classes: PropTypes.object,
};

// export default withStyles(styles)(SideBar);

module.exports = withStyles(styles)(Wizzard);