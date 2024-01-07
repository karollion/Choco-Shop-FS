import { useSelector } from 'react-redux';
import styles from './SumOrders.module.scss';
import PropTypes from 'prop-types'
import { getAllProducts } from '../../../redux/productsRedux';

const SumOrders = ({ orders }) => {
  const products = useSelector(getAllProducts);

  let sumPrice = 0;
  for(let order of orders) {
    for(let product of products){
      if(order.productId === product.id) {
        sumPrice = sumPrice + (order.quantity * product.price);
        break;
      }
    }
  }
  
  return (
    <div  className={styles.root}>
      <p>Summary:  {sumPrice}$</p>
      <p>Delivery: 10$</p>
      <p>Total:    {sumPrice + 10}$</p>
    </div>
  );
};

SumOrders.propTypes = {
	orders: PropTypes.array.isRequired,
}

export default SumOrders;