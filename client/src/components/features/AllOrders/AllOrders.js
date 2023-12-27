
import { Row } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';

const AllOrders = ({ orders, canBeEdited  }) => {

    return (
      <Row className='py-4'>
        {orders.map(order => (
          <OrderCard key={order.id} order={order} canBeEdited={canBeEdited} />
        ))}
      </Row>
    );
};

export default AllOrders;