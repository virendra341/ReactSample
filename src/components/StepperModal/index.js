import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


import Wizzard from 'components/Stepper'

class StepperModal extends PureComponent {
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
        >
          {/* <DialogTitle id="alert-dialog-title" className="pdT40 pdB5 modal-title">
            Cloud Environment
          </DialogTitle> */}
          
          <DialogContent className="modal-body">
            <DialogContentText id="alert-dialog-description">
          
                <Wizzard/>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}


module.exports = StepperModal;