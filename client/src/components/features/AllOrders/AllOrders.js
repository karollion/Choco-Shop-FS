import OrderCard from '../OrderCard/OrderCard';
import styles from './AllOrders.module.scss';

const AllOrders = ({ orders, canBeEdited  }) => {

    return (
      <div className={styles.root}>
        {orders.map(order => (
          <OrderCard key={order.id} order={order} canBeEdited={canBeEdited} />
        ))}
      </div>
    );
};

export default AllOrders;