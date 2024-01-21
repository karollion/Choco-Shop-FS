import styles from './OrderCard.module.scss';
import PropTypes from 'prop-types'
import { IMGS_URL } from '../../../config';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
// import modules
import Button from '../../common/Button/Button';
// imports from redux
import { removeOrderRequest, 
         removeOrderRequestOnServer, 
         updateOrderRequest, 
         updateOrderRequestOnServer 
       } from '../../../redux/ordersRedux';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { getUser } from '../../../redux/userRedux';

const Size = {
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL',
}

const OrderCard = ({ order, canBeEdited }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => getUser(state));
  const [size, setSize] = useState(order.size);
  const [quantity, setQuantity] = useState(order.quantity);
  const [description, setDescription] = useState(order.description);
  const product = useSelector(state => getProductById(state, order.productId));
  const photos = product.photo.split(' ');

  const calcPriceOfSize = (size) => {
    switch (size) {
      case 'S':
        return 1;
      case 'M':
        return 1.3;
      case 'L':
        return 1.5;
      case 'XL':
        return 1.8;
      case 'XXL':
        return 2;
      default:
        return 1;
    }
  };

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
        size: size,
        quantity: quantity,
        description: description,
        productId: order.productId,
        userId: user.user.id,
      }));
    } else {
      dispatch(updateOrderRequest({
        id: order.id,
        size: size,
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

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.contForm}>
        <img 
          className={styles.image}
          alt={'home background'}
          src={IMGS_URL + 'products/' + photos[0]} 
        />
        <div className={styles.contInfo}>
          <p>{product.name}</p>
          <p>{product.price * calcPriceOfSize(size)}$</p>
        </div>
      </div>
      <div  className={styles.contForm}>
        {canBeEdited ? (
          <Form>
            <Form.Select value={size} onChange={handleSizeChange}>
              <option value={Size.S}>S</option>
              <option value={Size.M}>M</option>
              <option value={Size.L}>L</option>
              <option value={Size.XL}>XL</option>
              <option value={Size.XXL}>XXL</option>
            </Form.Select>
          </Form>
        ) : null}
        {!canBeEdited ? (
          <p>size: {size}</p>
        ) : null}
      </div>
      <div  className={styles.contForm}>
        {canBeEdited ? (
          <Form.Group controlId="formphone" className={styles.form}>
            <Button action={(e) => {
              e.preventDefault();
              decQuantity();
              }}>-</Button>
            <Form.Control
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              type='number'
            />
            <Button action={(e) => {
              e.preventDefault();
              incQuantity();
              }}>+</Button>
          </Form.Group>
        ) : null}
        {canBeEdited ? (
          <Form >
            <Form.Group  controlId="formphone">
              <Form.Control
                value={description}
                onChange={e => setDescription(e.target.value)}
                as='textarea'
                rows={1}
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
      </div>
      <div className={styles.contButtons}>
        {canBeEdited ? (
        <Button 
          action={handleUpdate}>update</Button>
        ) : null}
        {canBeEdited ? (
        <Button action={handleRemove}>remove</Button>
        ) : null}
      </div>
      </div>
  );
};

OrderCard.propTypes = {
	order: PropTypes.object.isRequired,
  canBeEdited: PropTypes.bool.isRequired,
}

export default OrderCard;