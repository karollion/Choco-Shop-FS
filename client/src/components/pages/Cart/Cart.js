import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllOrders } from '../../../redux/ordersRedux';
import { Button, Spinner } from 'react-bootstrap';
import AllOrders from '../../features/AllOrders/AllOrders';
import { Link } from 'react-router-dom';

const Cart = () => {
  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  console.log(orders)
  return (
    <div className={styles.root}>
      <h1>Cart</h1>
      
      {orders.length === 0 && !isLoading && <p>You cart is empty</p>}
      {isLoading && <Spinner animation='border' variant='primary' />}
      {!isLoading && <AllOrders />}
      <Button variant="primary" as={Link} to={"/resume"}>Resume</Button>
    </div>
  );
};

export default Cart;