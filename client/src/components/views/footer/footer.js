import Container from '../../common/container/Container';
import styles from './footer.module.scss';
const Footer = () => {
  
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }

    return (
      <footer className={styles.root}>
        <Container>
          <div className={styles.footercontent}>
            <div className={styles.footersection}>
              <h4>About Us</h4>
              <p>Discover our story and mission.</p>
              <a href="/about">Learn more</a>
            </div>

            <div className={styles.footersection}>
              <h4>Help</h4>
              <ul>
                <li><a href="/">Order Status</a></li>
                <li><a href="/">Returns and Exchanges</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/">FAQs</a></li>
              </ul>
            </div>

            <div className={styles.footersection}>
              <h4>Follow Us</h4>
              <ul>
                <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.pinterest.com" target="_blank" rel="noreferrer">Pinterest</a></li>
              </ul>
            </div>

            <div className={styles.footersection}>
              <h4>Customer Service</h4>
              <ul>
                <li><a href="/">Shipping Information</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms and Conditions</a></li>
              </ul>
            </div>

            <div className={styles.footersection}>
              <h4>Newsletter</h4>
              <a href="/">Subscribe Now</a>
            </div>
          </div>

          <div className={styles.footerbottom}>
            <p>Copyright &copy; Choco-Shop {getDate()}</p>
          </div>
        </Container>
      </footer>
    );
};

export default Footer;