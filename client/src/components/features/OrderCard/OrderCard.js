import styles from './OrderCard.module.scss';
import { Button, Form } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import { useState } from 'react';
import { removeOrderRequest, removeOrderRequestOnServer, updateOrderRequest, updateOrderRequestOnServer } from '../../../redux/ordersRedux';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { getProductById } from '../../../redux/productsRedux';
import { getUser } from '../../../redux/userRedux';

const OrderCard = ({ order, canBeEdited }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => getUser(state));
  const [quantity, setQuantity] = useState(order.quantity);
  const [description, setDescription] = useState(order.description);
  const product = useSelector(state => getProductById(state, order.productId));
  const photos = product.photo.split(' ');

  const handleRemove = (event) => {
    event.preventDefault();
    if (user) {
      dispatch(removeOrderRequestOnServer(order.id));
    } else {
      dispatch(removeOrderRequest(order.id));
    }
  };
  
  const handleUpdate = (event) => {
    event.preventDefault();
    if (user) {
      dispatch(updateOrderRequestOnServer({
        id: order.id,
        quantity: quantity,
        description: description,
        productId: order.productId,
        userId: user.user.id,
      }));
    } else {
      dispatch(updateOrderRequest({
        id: order.id,
        quantity: quantity,
        description: description,
        productId: order.productId,
      }));
    }
  };

  const decQuantity = e => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const incQuantity = e => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    } else if (quantity > 99) {
      setQuantity(99);
    }
  }

  return (
    <div className={styles.root}>
      <img 
        className={styles.image}
        alt={'home background'}
        src={IMGS_URL + 'products/' + photos[0]} 
      />
      <p>{product.name}</p>
      <p>{product.price}$</p>
      {canBeEdited ? (
        <Form.Group controlId="formphone" className={styles.form}>
          <button onClick={(e) => {
            e.preventDefault();
            decQuantity();
            }} className={styles.qtyBtn}>-</button>
          <Form.Control
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            type='number'
          />
          <button onClick={(e) => {
            e.preventDefault();
            incQuantity();
            }} className={styles.qtyBtn}>+</button>
        </Form.Group>
      ) : null}
      {canBeEdited ? (
        <Form >
          <Form.Group  controlId="formphone">
            <Form.Control
              value={description}
              onChange={e => setDescription(e.target.value)}
              type='textarea'
              placeholder='Your description'
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
      <Button className={styles.qtyBtn} variant="primary" onClick={handleUpdate}>update</Button>
      ) : null}
      {canBeEdited ? (
      <Button className={styles.qtyBtn} variant="danger" onClick={handleRemove}>remove</Button>
      ) : null}
      </div>
  );
};

OrderCard.propTypes = {
	order: PropTypes.object.isRequired,
  canBeEdited: PropTypes.bool.isRequired,
}

export default OrderCard;