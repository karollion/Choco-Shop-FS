import { Button } from 'react-bootstrap';
import styles from './ContactForm.module.scss';

const ContactForm = () => {

    return (
      <div  className={styles.root}>
        formularz z danymi klienta
        <Button variant="primary">Submit</Button>
      </div>
    );
};

export default ContactForm;