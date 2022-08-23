import { Box, TextField, Button, Container } from '@mui/material';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contactsApi';

export const ContactForm = () => {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handelSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { name, number };

    if (contacts.find(c => c.name === name)) {
      alert('You seved this contact!');
      form.reset();

      return;
    }

    createContact(newContact);
    form.reset();
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& > :not(style)': {
            display: 'flex',
            m: 10,
            width: '25ch',
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handelSubmit}
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
        <Button variant="outlined" type="submit">
          Add contact
        </Button>
      </Box>
    </Container>
  );
};
