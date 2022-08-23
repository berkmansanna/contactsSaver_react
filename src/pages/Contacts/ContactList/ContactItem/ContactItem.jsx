import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Avatar, Button, Grid } from '@mui/material';

export const ContactItem = ({ contacts }) => {
  const { id, name, number } = contacts;
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Grid item xs={12} md={4}>
      <Avatar sx={{ width: 50, height: 50 }}>{name}</Avatar>
      <span>{name}</span>
      <p>{number}</p>

      <Button variant="outlined" onClick={() => deleteContact(id)}>
        Delete
      </Button>
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
