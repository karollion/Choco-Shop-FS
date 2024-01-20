import styles from './Contact.module.scss';
// import modules
import Container from "../../common/container/Container";

const Contact = () => {
  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>Contact us</h2>
        <div className={styles.box}>
          <p>Phone:   +12 333-444-555</p>
          <p>E-mail:  choco.schop@example.com</p>
          <p>Address: U.S.A. New York 123/225</p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
