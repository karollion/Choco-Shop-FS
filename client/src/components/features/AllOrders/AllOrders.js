import SumOrders from '../../common/SumOrders/SumOrders';
import OrderCard from '../OrderCard/OrderCard';
import styles from './AllOrders.module.scss';
import { v4 as uuidv4 } from 'uuid';

const AllOrders = ({ orders, canBeEdited  }) => {

    return (
      <div className={styles.root}>
        <div className={styles.orders}>
          {orders.map(order => (
            <OrderCard key={uuidv4()} order={order} canBeEdited={canBeEdited} />
          ))}
        <div className={styles.sum}>
          <SumOrders orders={orders}/>
        </div>
        </div>
      </div>
    );
};

export default AllOrders;