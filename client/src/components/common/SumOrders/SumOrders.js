import styles from './SumOrders.module.scss';
import PropTypes from 'prop-types'

const SumOrders = ({ orders }) => {
  let sumPrice = 0;
  for(let order of orders) {
    sumPrice = sumPrice + (order.quantity * order.product.price);
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