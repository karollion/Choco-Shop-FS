import styles from './OrderCard.module.scss';
import { Link } from 'react-router-dom';
import { Card, Col, Button, Form } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import { useState } from 'react';

const OrderCard = ({ order, canBeEdited }) => {
  const [quantity, setQuantity] = useState(order.quantity);
  const [description, setDescription] = useState(order.description);

  return (
    <div className={styles.root}>
      <img 
        className={styles.image}
        alt={'home background'}
        src={IMGS_URL + order.product.photo} 
      />
      <p>{order.product.name}</p>
      <p>{order.product.price}$</p>
      {canBeEdited ? (
        <Form >
          <Form.Group  controlId="formphone" className=''>
            <Form.Label>pcs.</Form.Label>
            <Form.Control
              className={styles.quantityLabel}
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              type='number'
            />
          </Form.Group>
        </Form>
      ) : null}
      {canBeEdited ? (
        <Form >
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
          <p>quantity: {quantity}</p>
      ) : null}
      {!canBeEdited ? (
          <p>description: {description}</p>
      ) : null}
      <Button variant="danger" as={Link} to={"/orders/" + order.id}>remove</Button>
    </div>
  );
};

export default OrderCard;