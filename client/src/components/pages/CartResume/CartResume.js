import styles from './CartResume.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllOrders } from '../../../redux/ordersRedux';
import { Spinner } from 'react-bootstrap';
import AllOrders from '../../features/AllOrders/AllOrders';
import ContactForm from '../../features/ContactForm/ContactForm';
import { useNavigate } from 'react-router-dom';
import { addOrderRequest } from '../../../redux/confirmOrdersRedux';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../common/container/Container';
import { confirmOrders, removeAllOrdersFromLocalStorage } from '../../../redux/ordersRedux';
import { useState } from 'react';

const CartResume = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  let confirmId = uuidv4();
  
  const handleSubmit = confirmOrderData => {
    confirmOrderData.id = confirmId;
    dispatch(addOrderRequest(confirmOrderData, orders));
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    dispatch(confirmOrders(orders, confirmId));
    dispatch(removeAllOrdersFromLocalStorage());
    setTimeout(() => {
      navigate('/');
      setShowConfirm(false);
    }, 1000);
  };

  return (
    <Container>
      <div className={styles.root}>
        {showConfirm ? (
          <div className={styles.confirm}>
            <p>To finalize your order, click the "confirm" button</p>
            <button onClick={(e) => {
              e.preventDefault();
              handleConfirm();
              }} className={styles.qtyBtn}>Confirm</button>
          </div>
        ) : null}
        <h2 className={styles.title}>Cart - resume</h2>
        {orders.length === 0 && !isLoading && <p>You cart is empty</p>}
        {isLoading && <Spinner animation='border' variant='primary' />}
        {!isLoading && <AllOrders orders={orders} canBeEdited={false} />}
        <ContactForm action={handleSubmit}/>
      </div>
    </Container>
  );
};

export default CartResume;