import { useSelector } from 'react-redux';
import { getAllOrders } from '../../../redux/ordersRedux';
import { Row } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';

const AllOrders = () => {
  const orders = useSelector(getAllOrders);

    return (
      <Row className='py-4'>
        {orders.map(order => (
          <OrderCard key={order.id} order={order}  />
        ))}
      </Row>
    );
};

export default AllOrders;