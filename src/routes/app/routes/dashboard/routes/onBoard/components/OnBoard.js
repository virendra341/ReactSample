

import React, { PureComponent } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Wizard from './Wizard'

class OnBoard extends PureComponent {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          // onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="modal-stepper"
          fullWidth={true}
          maxWidth="sm"
        >    
          <DialogContent className="modal-processStepper">
            <Wizard/>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}


module.exports = OnBoard;