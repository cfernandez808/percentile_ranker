import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import OutputText from './OutputText';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PercentOutput = (props) => {
  const {visible, setVisible, submission} = props

  const handleClose = () =>  {
    setVisible(!visible)
  }

  return (
    <div>
      <Dialog
        open={visible}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Candidate Breakdown"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <OutputText submission={submission} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="#3D73A3">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PercentOutput;
