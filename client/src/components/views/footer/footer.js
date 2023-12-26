import styles from './footer.module.scss';
const Footer = () => {
  
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }

    return (
      <footer className={styles.root}>
        <p>Copyright &copy; Choco-Shop {getDate()}</p>
      </footer>
    );
};

export default Footer;