import styles from './CartResume.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import {  addGuestOrders, confirmGuestOrders, getAllOrders, removeAllOrdersFromLocalStorage } from '../../../redux/ordersRedux';
import { Spinner } from 'react-bootstrap';
import AllOrders from '../../features/AllOrders/AllOrders';
import ContactForm from '../../features/ContactForm/ContactForm';
import { useNavigate } from 'react-router-dom';
import { addConfirmOrdersRequest, addConfirmRequest } from '../../../redux/confirmOrdersRedux';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../common/container/Container';
import { useState } from 'react';
import { getUser } from '../../../redux/userRedux';

const CartResume = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => getUser(state));
  const [showConfirm, setShowConfirm] = useState(false);

  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  let confirmId = uuidv4();
  
  const handleSubmit = confirmOrderData => {
    confirmOrderData.id = confirmId;
    if (user) {
      confirmOrderData.userId = user.user.id;
      dispatch(addConfirmOrdersRequest(confirmOrderData, orders));
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } else {
      confirmOrderData.userId = 'f4c05e45-cd90-473c-bae2-959c977ca811';
      dispatch(addConfirmRequest(confirmOrderData));
      dispatch(addGuestOrders(orders));
      setTimeout(() => {
        dispatch(confirmGuestOrders(orders, confirmId));
        setShowConfirm(true);
      }, 3000);
    }
  };

  const handleConfirm = () => {
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
            <h3>Thank you for shopping</h3>
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