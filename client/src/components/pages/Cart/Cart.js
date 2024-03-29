import styles from './Cart.module.scss';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import modules
import Container from '../../common/container/Container';
import AllOrders from '../../features/AllOrders/AllOrders';
import Button from '../../common/Button/Button';
// imports from redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, fetchOrdersFromServer, getAllOrders } from '../../../redux/ordersRedux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getUser } from '../../../redux/userRedux';

const Cart = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => getUser(state));
  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));

  const handleClick = e => {
    e.preventDefault();
    navigate("/resume");
  }

  useEffect(() => {
      if (user) {
        dispatch(fetchOrdersFromServer(user.user.id));
      } else {
        dispatch(fetchOrders());
      }
  }, [dispatch, user]);

  
  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>Cart</h2>
        {orders.length === 0 && !isLoading && <div className={styles.empty}>You cart is empty</div>}
        {isLoading && <div className='my-4 d-flex '><Spinner animation='border' variant='primary' /></div>}
        {!isLoading && <AllOrders orders={orders} canBeEdited={true} isSummed={true}/>}
        <div className='my-4 d-flex justify-content-center'>
          <Button action={handleClick}>Resume</Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;