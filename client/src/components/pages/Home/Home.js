import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllProducts } from '../../../redux/productsRedux';
import { Spinner } from 'react-bootstrap';
import AllProducts from '../../features/AllProducts/AllProducts';

const Home = () => {
  const products = useSelector(state => getAllProducts(state));
  const isLoading = useSelector(state => getIsLoading(state));
  
  return (
    <div className={styles.root}>
      <h1>Home</h1>
      {/* <div className={styles.heroBg}></div> */}
      {/* <img 
        className={styles.image}
        alt={'home background'}
        src={`${process.env.PUBLIC_URL}/images/layout/home_bg.jpg`} /> */}

      {products.length === 0 && !isLoading && <p>No products</p>}
      {isLoading && <Spinner animation='border' variant='primary' />}
      {!isLoading && <AllProducts />}
    </div>
  );
};

export default Home;