import styles from './Product.module.scss'
import { getProductById } from '../../../redux/productsRedux';
import { Navigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';

const Product = () => {
  const  {id}  = useParams();
  const product = useSelector(state => getProductById(state, id));
  
  console.log(id)
  console.log("Product:", product)
  if (!product) return <Navigate to="/" />;
  return (

    <div className='min-vh-100 px-4'>
      <h2 className='my-4' >productvertisement</h2>
      <Card className={styles.card}>
        <Card.Img variant='top' src={IMGS_URL + product.photo} className={styles.img} />
        <Card.Body>

          <Card.Title><h3>{product.name}</h3></Card.Title>

          <Card.Text>
            <b>Price:</b> $ {product.price}
          </Card.Text>

          <Card.Text>
            <b>Size:</b> {product.size}
          </Card.Text>
          
          <Card.Text>
            <b>description:</b>
          </Card.Text>

          <Card className='p-2'>
            {product.description}
          </Card>
        
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;