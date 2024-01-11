import styles from './About.module.scss';
import Container from "../../common/container/Container";

const About = () => {
  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>About us</h2>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/layout/about.jpg`}
            alt="Product_photo"
            className={styles.img}
          />
          <p>Welcome to our sweet paradise, where flavors become the magic of every day! Our company is more than just a store, it's a place where sweets take on a unique character. Immerse yourself in our rich world of flavors, where every bite is a journey through a land of intense sensations. We offer a wide range of unique tastes that tantalize the senses and add sweetness to life. Each product in our selection is not just a sweet snack but also an exceptional culinary experience.</p>
          
        </div>
      </div>
    </Container>
  );
};

export default About;
