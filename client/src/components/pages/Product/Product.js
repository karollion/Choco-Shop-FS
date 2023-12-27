import styles from './Product.module.scss'
import { getProductById } from '../../../redux/productsRedux';
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import { useState } from 'react';
import { addOrderRequest } from '../../../redux/ordersRedux';

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  {id}  = useParams();
  const product = useSelector(state => getProductById(state, id));
  const [quantity, setQuantity] = useState(1);
  
  const handleSubmit = () => {
    
    dispatch(addOrderRequest({ product, quantity}));
    
    navigate('/cart');
  };

  if (!product) return <Navigate to="/" />;
  return (

    <div className='min-vh-100 px-4'>
      <h2 className='my-4' >product</h2>
      <Card className={styles.card}>
        <Card.Img variant='top' src={IMGS_URL + product.photo} className={styles.img} />
        <Card.Body>

          <Card.Title><h3>{product.name}</h3></Card.Title>

          <Card.Text>
            <b>Price:</b> $ {product.price}
          </Card.Text>

          <Card.Text>
            <b>Size:</b> {product.size}g
          </Card.Text>
          
          <Card.Text>
            <b>description:</b>
          </Card.Text>

          <Card className='p-2'>
            {product.description}
          </Card>

          <Form onSubmit={handleSubmit} className='col-12 col-sm-3 mx-auto'>

            <Form.Group  controlId="formphone">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                type='number'
              />
            </Form.Group>

            <Button className='my-3' variant="primary" type="submit">Add to cart</Button>
          </Form>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;