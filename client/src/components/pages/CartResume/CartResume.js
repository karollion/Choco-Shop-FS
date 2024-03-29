import styles from './CartResume.module.scss';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import modules
import AllOrders from '../../features/AllOrders/AllOrders';
import ContactForm from '../../features/ContactForm/ContactForm';
import Container from '../../common/container/Container';
import Button from '../../common/Button/Button';
// imports from redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, 
         fetchOrdersFromServer, 
         getAllOrders, 
         removeAllOrdersFromLocalStorage, 
         fetchOrderFromServer 
        } from '../../../redux/ordersRedux';
import { addConfirmOrdersRequest, addConfirmRequest } from '../../../redux/confirmOrdersRedux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getUser } from '../../../redux/userRedux';

const CartResume = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => getUser(state));
  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  const [showSuccess, setShowSuccess] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  let confirmId = uuidv4();
  
  const handleSubmit = confirmOrderData => {
    confirmOrderData.id = confirmId;
    if (user) { // Logged user
      setShowProcess(true);  
      confirmOrderData.userId = user.user.id;
      dispatch(addConfirmOrdersRequest(confirmOrderData, orders));
      dispatch(fetchOrdersFromServer(user.user.id));
      setShowProcess(false); 
      setShowSuccess(true);
    } else { // Guest user
      setShowProcess(true);
      confirmOrderData.userId = 'f4c05e45-cd90-473c-bae2-959c977ca811';
      dispatch(addConfirmRequest(confirmOrderData, orders));
      setTimeout(() => {
        orders.forEach(order => {
          dispatch(fetchOrderFromServer({orderId: order.id, confirmId: confirmOrderData.id}))
          });
          dispatch(removeAllOrdersFromLocalStorage());
          dispatch(fetchOrders());
          setShowProcess(false); 
          setShowSuccess(true);
      }, "6000");
    }
  };

  const handleOk = () => {
    setShowSuccess(false); 
    navigate('/');
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

        {showProcess ? (
          <div className={styles.confirm}> 
            <h3>Processing your orders</h3>
            <p>Wait until processing is complete.</p>
            <Spinner animation='border' variant='primary' />
          </div>
        ) : null}

        <h2 className={styles.title}>Cart - resume</h2>
        {orders.length === 0 && !isLoading && <div className={styles.empty}>You cart is empty</div>}
        {isLoading && <div className='my-4 d-flex '><Spinner animation='border' variant='primary' /></div>}
        {!isLoading && <AllOrders orders={orders} canBeEdited={false}  isSummed={true}/>}
        <ContactForm action={handleSubmit}/>
      </div>
    </Container>
  );
};

export default CartResume;