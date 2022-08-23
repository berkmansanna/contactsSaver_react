import { Loader } from 'pages/Contacts/Loader/Loader';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';

export const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();

  const filtredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <Grid container spacing={4}>
        {isFetching && <Loader />}
        {contacts &&
          filtredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} contacts={{ id, name, number }} />
          ))}
      </Grid>
    </Container>
  );
};
