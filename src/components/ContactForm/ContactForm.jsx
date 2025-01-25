import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css'; // Importujemy moduł CSS dla formularza

const ContactForm = ({ addContact }) => {
  // Początkowe wartości formularza
  const initialValues = { name: '', number: '' };

  // Walidacja z Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Phone number must be only digits')
      .required('Phone number is required'),
  });

  // Obsługuje wysłanie formularza
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);  // Przekazanie nowego kontaktu do aplikacji
    resetForm(); // Resetowanie formularza po dodaniu kontaktu
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Phone Number
          <Field className={styles.input} name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button className={styles.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
