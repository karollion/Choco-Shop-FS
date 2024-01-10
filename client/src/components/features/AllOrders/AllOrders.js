import SumOrders from '../../common/SumOrders/SumOrders';
import OrderCard from '../OrderCard/OrderCard';
import styles from './AllOrders.module.scss';
import { v4 as uuidv4 } from 'uuid';

const AllOrders = ({ orders, canBeEdited  }) => {

    return (
      <div className={styles.root}>
        {orders.map(order => (
          <OrderCard key={uuidv4()} order={order} canBeEdited={canBeEdited} />
        ))}
        <SumOrders orders={orders}/>
      </div>
    );
};

export default AllOrders;