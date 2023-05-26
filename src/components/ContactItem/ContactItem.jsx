import { Item } from './ContactItem.styled';

export function ContactItem({ contacts }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <span>{name}</span>
            <span>{number}</span>
          </Item>
        );
      })}
    </>
  );
}
