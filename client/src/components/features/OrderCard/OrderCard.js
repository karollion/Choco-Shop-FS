import styles from './OrderCard.module.scss';
import { Link } from 'react-router-dom';
import { Card, Col, Button, Form } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import { useState } from 'react';

const OrderCard = ({ order, canBeEdited }) => {
  const [quantity, setQuantity] = useState(order.quantity);
  const [description, setDescription] = useState(order.description);

  return (
    <Col xs='12' md='6' lg='4' className='mb-4'>
      <Card className='p-3'>
        <Card.Img variant='top' src={IMGS_URL + order.product.photo} className={styles.img} />
			  <Card.Body>
          <Card.Title>{order.product.name}</Card.Title>
          <Card.Text>{order.product.price}</Card.Text>
          <Card.Text>{"wybieranie ilosci"}</Card.Text>
          {canBeEdited ? (
          <Form className='col-12 col-sm-3 mx-auto'>
            <Form.Group  controlId="formphone">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                type='number'
              />
            </Form.Group>
            <Form.Group  controlId="formphone">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                onChange={e => setDescription(e.target.value)}
                type='text'
              />
            </Form.Group>
          </Form>
          ) : null}
          {!canBeEdited ? (
            <div>
              <Card.Text>quantity: {quantity}</Card.Text>
              <Card.Text>description: {description}</Card.Text>
            </div>
            ) : null}
          <Button variant="danger" as={Link} to={"/orders/" + order.id}>remove</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrderCard;