import styles from './OrderCard.module.scss';
import { Button, Form } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import { useState } from 'react';
import { removeOrderRequest, updateOrderRequest } from '../../../redux/ordersRedux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'

const OrderCard = ({ order, canBeEdited }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(order.quantity);
  const [description, setDescription] = useState(order.description);
  const photos = order.product.photo.split(' ');

  const handleRemove = (event) => {
    event.preventDefault();
    dispatch(removeOrderRequest(order.id));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateOrderRequest({
      id: order.id,
      quantity: quantity,
      description: description,
      productId: order.product.id,
    }));
  };

  return (
    <div className={styles.root}>
      <img 
        className={styles.image}
        alt={'home background'}
        src={IMGS_URL + photos[0]} 
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
              onChange={e => setQuantity(Number(e.target.value))}
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
              type='textarea'
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
      {canBeEdited ? (
      <Button variant="primary" onClick={handleUpdate}>update</Button>
      ) : null}
      {canBeEdited ? (
      <Button variant="danger" onClick={handleRemove}>remove</Button>
      ) : null}
      </div>
  );
};

OrderCard.propTypes = {
	order: PropTypes.object.isRequired,
  canBeEdited: PropTypes.bool.isRequired,
}

export default OrderCard;