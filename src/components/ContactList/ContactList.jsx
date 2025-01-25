import ContactItem from '../ContactItem/ContactItem'; // Importujemy komponent ContactItem
import styles from './ContactList.module.css'; // Importujemy moduł CSS

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
