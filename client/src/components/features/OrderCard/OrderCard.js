import styles from './OrderCard.module.scss';
import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';

const OrderCard = ({ order }) => {

  return (
    <Col xs='12' md='6' lg='4' className='mb-4'>
      <Card className='p-3'>
        <Card.Img variant='top' src={IMGS_URL + order.product.photo} className={styles.img} />
			  <Card.Body>
          <Card.Title>{order.product.name}</Card.Title>
          <Card.Text>{order.product.price}</Card.Text>
          <Card.Text>{"wybieranie ilosci"}</Card.Text>
          <Button variant="danger" as={Link} to={"/orders/" + order.id}>remove</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrderCard;