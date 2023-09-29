import { GlobalStyles } from './globalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/ContactList';
import { Wrap, Heading } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const contactsList = useSelector(getContacts);
  useEffect(() => {
    const newContacts = JSON.stringify(contactsList);
    localStorage.setItem('contacts', newContacts);      
  }, [contactsList])
  return (
    <Wrap>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList/>
      <GlobalStyles />
    </Wrap>
  );
};
