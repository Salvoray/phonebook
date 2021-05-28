const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts !== [] ? (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <h2>ContactList empty</h2>
  );
};
export default ContactList;
