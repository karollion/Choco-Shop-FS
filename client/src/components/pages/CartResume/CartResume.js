import styles from './CartResume.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllOrders } from '../../../redux/ordersRedux';
import { Spinner } from 'react-bootstrap';
import AllOrders from '../../features/AllOrders/AllOrders';
import ContactForm from '../../features/ContactForm/ContactForm';
import { useNavigate } from 'react-router-dom';
import { addOrderRequest } from '../../../redux/confirmOrdersRedux';


const CartResume = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const orders = useSelector(state => getAllOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  
  const handleSubmit = data => {
    data.orders = orders;
    dispatch(addOrderRequest(data));
    //console.log(data)
    navigate('/');
  };
  return (
    <div className={styles.root}>
      <h1>Cart - resume</h1>
      
      {orders.length === 0 && !isLoading && <p>You cart is empty</p>}
      {isLoading && <Spinner animation='border' variant='primary' />}
      {!isLoading && <AllOrders orders={orders} canBeEdited={false} />}
      <ContactForm action={handleSubmit}/>
    </div>
  );
};

export default CartResume;