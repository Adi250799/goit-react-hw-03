import styles from './ContactItem.module.css'; // Importujemy moduł CSS

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.contact-item}>
      <span className={styles.contact-details}>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={styles.delete-button}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
