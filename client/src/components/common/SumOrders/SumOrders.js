import styles from './SumOrders.module.scss';
import PropTypes from 'prop-types'
// imports from redux
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

const SumOrders = ({ orders }) => {
  const products = useSelector(getAllProducts);
  let delivery = 0;
  let sumPrice = 0;

  const calcPriceOfSize = (size) => {
    switch (size) {
      case 'S':
        return 1;
      case 'M':
        return 1.3;
      case 'L':
        return 1.5;
      case 'XL':
        return 1.8;
      case 'XXL':
        return 2;
      default:
        return 1;
    }
  };

  for(let order of orders) {
    for(let product of products){
      if(order.productId === product.id) {
        sumPrice = sumPrice + (order.quantity * product.price * calcPriceOfSize(order.size));
        break;
      }
    }
  }

  if (orders.length === 0) {
    delivery = 0;
  } else {
    delivery = 10;
  }
  
  return (
    <div  className={styles.root}>
      <p>Summary:  {sumPrice}$</p>
      <p>Delivery: {delivery}$</p>
      <p>Total:    {sumPrice + delivery}$</p>
    </div>
  );
};

SumOrders.propTypes = {
	orders: PropTypes.array.isRequired,
}

export default SumOrders;