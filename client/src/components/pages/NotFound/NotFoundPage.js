import styles from './NotFound.module.scss';
import Container from "../../common/container/Container";

const NotFoundPage = () => {
  return (
    <Container>
      <div className={styles.root}>
        <h1>404</h1>
        <h2>page not found</h2>
      </div>
    </Container>
  );
};

export default NotFoundPage;
