import styles from './Home.module.scss';
import { Spinner } from 'react-bootstrap';
// import modules
import AllProducts from '../../features/AllProducts/AllProducts';
import Container from '../../common/container/Container';
// imports from redux
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllProducts } from '../../../redux/productsRedux';

const Home = () => {
  window.scrollTo(0 ,0);
  const products = useSelector(state => getAllProducts(state));
  const isLoading = useSelector(state => getIsLoading(state));
  
  return (
    
      <div className={styles.root}>
        <div className={styles.hero}>
          <div className={styles.bgshadow}></div>
          <h1>Choco - Shop</h1>
          <h2>Treat yourself to a bit of sweetness</h2>
        </div>
        <Container>
          <h2 className={styles.title}>All our sweets</h2>
          {products.length === 0 && !isLoading && <p>No products</p>}
          {isLoading && <Spinner animation='border' variant='primary' />}
          {!isLoading && <AllProducts products={products}/>}
        </Container>
      </div>
  );
};

export default Home;