import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';

const ProductCard = ({ product }) => {
  const photos = product.photo.split(' ');

  return (
    <Col xs='12' md='6' lg='4' className='mb-4'>
      <Card className='p-3'>
        <Card.Img variant='top' src={IMGS_URL + photos[0]} className={styles.img} />
			  <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" as={Link} to={"/products/" + product.id}>Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
