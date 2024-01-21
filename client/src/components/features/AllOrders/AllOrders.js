import styles from './AllOrders.module.scss';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import modules
import SumOrders from '../../common/SumOrders/SumOrders';
import OrderCard from '../OrderCard/OrderCard';

const AllOrders = ({ orders, canBeEdited, isSummed  }) => {

    return (
      <div className={styles.root}>
        <div className={styles.orders}>
          {orders.map(order => (
            <OrderCard key={uuidv4()} order={order} canBeEdited={canBeEdited} />
          ))}
        
        {isSummed ? (
          <div className={styles.sum}>
            <SumOrders orders={orders}/>
          </div>
        ) : null }
        </div>
      </div>
    );
};

AllOrders.propTypes = {
	orders: PropTypes.array.isRequired,
  canBeEdited: PropTypes.bool.isRequired,
}

export default AllOrders;