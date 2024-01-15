import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { fetchOrders, fetchOrdersFromServer, getAllOrders } from '../../../redux/ordersRedux';
import { Button, Spinner } from 'react-bootstrap';
import AllOrders from '../../features/AllOrders/AllOrders';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Container from '../../common/container/Container';
import { getUser } from '../../../redux/userRedux';

const Cart = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const user = useSelector((state) => getUser(state));

  useEffect(() => {
      if (user) {
        dispatch(fetchOrdersFromServer());
      } else {
        dispatch(fetchOrders());
      }
  }, [dispatch, user]);

  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  
  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>Cart</h2>
        {orders.length === 0 && !isLoading && <p>You cart is empty</p>}
        {isLoading && <Spinner animation='border' variant='primary' />}
        {!isLoading && <AllOrders orders={orders} canBeEdited={true} />}
        <Button variant="primary" as={Link} to={"/resume"}>Resume</Button>
      </div>
    </Container>
  );
};

export default Cart;