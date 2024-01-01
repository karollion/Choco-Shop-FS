import styles from './SumOrders.module.scss';

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

export default SumOrders;