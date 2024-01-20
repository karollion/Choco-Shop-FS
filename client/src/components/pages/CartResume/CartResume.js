import styles from './CartResume.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import {  addGuestOrders, confirmGuestOrders, getAllOrders, removeAllOrdersFromLocalStorage } from '../../../redux/ordersRedux';
import { Spinner } from 'react-bootstrap';
import AllOrders from '../../features/AllOrders/AllOrders';
import ContactForm from '../../features/ContactForm/ContactForm';
import { Link, useNavigate } from 'react-router-dom';
import { addConfirmOrdersRequest, addConfirmRequest } from '../../../redux/confirmOrdersRedux';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../common/container/Container';
import { useState } from 'react';
import { getUser } from '../../../redux/userRedux';
import Button from '../../common/Button/Button';

const CartResume = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => getUser(state));
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  let confirmId = uuidv4();
  
  const handleSubmit = confirmOrderData => {
    confirmOrderData.id = confirmId;
    if (user) {
      confirmOrderData.userId = user.user.id;
      dispatch(addConfirmOrdersRequest(confirmOrderData, orders));
      setShowSuccess(true);  
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

  const handleOk = () => {
    setShowSuccess(false); 
    navigate('/');
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

        {showSuccess ? (
          <div className={styles.confirm}> 
            <h3>Thank you for shopping</h3>
            <p>We have accepted your order and it is being processed. We will inform you about further progress by e-mail.</p>
            <Button action={(e) => {
                      e.preventDefault();
                      handleOk();
                      }}
            >OK</Button>
          </div>
        ) : null}
        {showConfirm ? (
          <div className={styles.confirm}>
            <h3>Thank you for shopping</h3>
            <p>We have accepted your order and it is being processed. We will inform you about further progress by e-mail.</p>
            <p>To finalize your order, click the "confirm" button</p>
            <Button action={(e) => {
                      e.preventDefault();
                      handleConfirm();
                      }}
            >Confirm</Button>
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