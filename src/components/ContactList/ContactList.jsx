export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          {item.contact}: {item.number}
        </li>
      ))}
    </ul>
  );
};
