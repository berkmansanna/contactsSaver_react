import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

const Contacts = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
