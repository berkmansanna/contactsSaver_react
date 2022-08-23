import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts/contactsApi';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Backdrop,
  Modal,
  Box,
  Fade,
  Typography,
  TextField,
  Stack,
} from '@mui/material';
import { Delete, Refresh } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ContactItem = ({ contacts }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id, name, number } = contacts;

  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const handlerUppdate = e => {
    e.preventDefault();

    // const { name, number } = contacts?.find(contact => contact.id === id);

    const form = e.target;

    const updateName = form.elements.name.value;
    const updatedNumber = form.elements.number.value;
    const updatedContact = { name: updateName, number: updatedNumber };

    if (name === updateName) {
      alert(name + ' is already in contacts!');
      form.reset();
      return;
    }

    updateContact({ id, ...updatedContact }).then(data => {
      if (data.error) {
        alert('Failed to edit contact, retry later!');
      } else {
        alert('Contact edited successfully');
        setOpen(false);
      }
    });
  };

  return (
    <Grid item xs={12} md={4}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          mb: 2,
        }}
      >
        <Avatar
          sx={{
            width: 50,
            height: 50,
          }}
        />
        <span>{name}</span>
        <p>{number}</p>
      </Container>

      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={() => deleteContact(id)}
          startIcon={<Delete />}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleOpen(console.log(id))}
          endIcon={<Refresh />}
        >
          Update
        </Button>
      </Stack>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Change name or number
              </Typography>
              <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', p: 4 }}
                onSubmit={handlerUppdate}
              >
                <TextField
                  label="Name"
                  variant="standard"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <TextField
                  label="Number"
                  variant="standard"
                  type="tel"
                  name="number"
                  placeholder="+38(0XX)XXX-XX-XX"
                  pattern={{
                    value:
                      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                    message:
                      'This must be digits and may contain spaces, dashes, parentheses or start with +.',
                  }}
                  required
                />
                <Button sx={{ m: 3 }} variant="outlined" type="submit">
                  Update
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </div>
    </Grid>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
