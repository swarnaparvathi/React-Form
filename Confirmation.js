import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export const Confirmation = () => {
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
	setOpen(true);
};

const handleClose = () => {
	setOpen(false);
};

return (
    <div>
      <Button variant="outlined" 
              color="primary" onClick={handleClickOpen}>
            Register      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           Greetings
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Successfully Registered!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}