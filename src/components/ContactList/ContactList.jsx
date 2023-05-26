import { ContactsList } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';

export function ContactList({ contacts }) {
  return (
    <ContactsList>
      <ContactItem contacts={contacts} />
    </ContactsList>
  );
}
