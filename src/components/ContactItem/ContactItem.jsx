import PropTypes from 'prop-types';
import { Item, Name, Number, ContactBtn } from './ContactItem.styled';

export function ContactItem({ contacts, onRemoveContact }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        // console.log(typeof id);

        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <ContactBtn type="button" onClick={() => onRemoveContact(id, name)}>
              Delete
            </ContactBtn>
          </Item>
        );
      })}
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  onRemoveContact: PropTypes.func.isRequired,
};
