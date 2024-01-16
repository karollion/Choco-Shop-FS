import styles from './Product.module.scss'
import { getProductById } from '../../../redux/productsRedux';
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import { useState } from 'react';
import { addOrderRequest, addOrderRequestOnServer } from '../../../redux/ordersRedux';
import ImageGallery from "react-image-gallery";
import Container from '../../common/container/Container';
import { v4 as uuidv4 } from 'uuid';
import { getUser } from '../../../redux/userRedux';

const Product = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => getUser(state));
  const  {id}  = useParams();
  const product = useSelector(state => getProductById(state, id));
  const [quantity, setQuantity] = useState(1);
  const productId = product.id;
  const photos = product.photo.split(' ');
  const images = [];
  
  photos.forEach(photo => {
      images.push({
        original: IMGS_URL + 'products/' + photo,
        thumbnail: IMGS_URL + 'products/' + photo,
      });
  });

  const handleSubmit = e => {
    e.preventDefault();
    let description = '';
    if (user) {
      dispatch(addOrderRequestOnServer({ productId, quantity, description, userId: user.user.id}));
    } else {
      dispatch(addOrderRequest({ id: uuidv4() , productId, quantity, description, userId: 'f4c05e45-cd90-473c-bae2-959c977ca811'}));
    }
    navigate('/cart');
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

  if (!product) return <Navigate to="/" />;
  return (
    <div className={styles.root}>
      <Container>
        <div className='min-vh-100 px-4'>
          <h2 className={styles.title} >Product details</h2>
          <div className='row py-3'>
            <div className='col-md-6 p-3' >
              <ImageGallery 
                items={images} 
                showPlayButton={false} 
                showNav={false}
                showFullscreenButton={false}
              />
            </div>
            <div className={`col-md-6 p-3 ${styles.pInfo}`} >
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p> 
              <p>Weight: {product.size}g</p> 
              <p>Description: </p>
              <p>{product.description}</p>
              <Form onSubmit={handleSubmit} className={`row ${styles.formAndButton}`}>
                  <Form.Group className={styles.form} id='quantity'>
                    <Form.Label>Quantity: </Form.Label>
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
                <Button className={styles.button} variant="primary" type="submit">Add to cart</Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;