import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllOrders } from '../../../redux/ordersRedux';
import { Spinner } from 'react-bootstrap';
import AllOrders from '../../features/AllOrders/AllOrders';

const Home = () => {
  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  
  return (
    <div className={styles.root}>
      <h1>Cart</h1>
      
      {orders.length === 0 && !isLoading && <p>You cart is empty</p>}
      {isLoading && <Spinner animation='border' variant='primary' />}
      {!isLoading && <AllOrders />}
    </div>
  );
};

export default Home;