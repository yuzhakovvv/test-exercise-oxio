import { useContext, useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';

import UsersContext from '../../../contexts/UsersContext';
import { User } from '../../../types/user';
import { fetch } from '../../../api/fetch';

interface AddUserModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function AddUserModal({ open, handleClose }: AddUserModalProps) {
  const { users, addUser } = useContext(UsersContext);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleHideSuccessAlert = (event?: React.SyntheticEvent | Event) => {
    setShowSuccessAlert(false);
  };

  const handleHideErrorAlert = (event?: React.SyntheticEvent | Event) => {
    setShowErrorAlert(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());

    const body = {
      name: formJson.name,
      email: formJson.email,
      company: {
        name: formJson.companyName,
      }
    };

    let user: User;
    try {
      const response: any = await fetch('/users', { body }, users);
      const data = await response.json();
      
      user = data.user;
    } catch (error) {
      setShowErrorAlert(true);
      return;
    }

    addUser(user);

    setShowSuccessAlert(true);

    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit
        }}
      >
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="companyName"
            name="companyName"
            label="Company Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={showSuccessAlert} autoHideDuration={2000} onClose={handleHideSuccessAlert}>
        <Alert
          severity="success"
          variant="filled"
          onClose={handleHideSuccessAlert}
          sx={{ width: '100%' }}
        >
          User Added
        </Alert>
      </Snackbar>

      <Snackbar open={showErrorAlert} autoHideDuration={2000} onClose={handleHideErrorAlert}>
        <Alert
          severity="error"
          variant="filled"
          onClose={handleHideErrorAlert}
          sx={{ width: '100%' }}
        >
          Something Went Wrong
        </Alert>
      </Snackbar>
    </>
  );
}