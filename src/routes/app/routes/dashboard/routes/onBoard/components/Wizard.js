import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const styles = theme => ({
  root: {
    width: '100%',
  },
  stepper:{
    padding:'0px !important'
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    padding:'0 15px',
    height:'400px'
  },
  stepperContent:{
    padding:'0'
  }
});

function getSteps() {
  return ['', '', '', ''];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <Step1 />
      );
    case 1:
      return (
        <Step2 />
      );
    case 2:
      return (
        <Step3 />
      );
    case 3:
      return (
        <Step4 />
      );
    default:
      return 'Uknown stepIndex';
  }
}

class Wizard extends PureComponent {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
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
    const { activeStep } = this.state;
    return (
      <div className={classes.root} >
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}
         >

          {steps.map((label, index) => {

            return (
              <Step key={label} className={index < activeStep ? 'step-process complete' : activeStep === index ? 'step-process active' : 'step-process in-active'} >
                <StepLabel className='stepper-label'>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={classes.stepperContent}>
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

Wizard.propTypes = {
  classes: PropTypes.object,
};

// export default withStyles(styles)(SideBar);

module.exports = withStyles(styles)(Wizard);