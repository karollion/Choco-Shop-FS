import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const photos = product.photo.split(' ');

  return (
    <div className={styles.root}>
      <img
        src={IMGS_URL + 'products/' + photos[0]}
        alt="Product_photo"
        className={styles.img}
      />
      <div className={styles.content}>
        <div className={styles.text}>
        {product.name}
        <span className={styles.price}><FontAwesomeIcon  icon={faDollar} />{product.price}</span>
        </div>
        <Button className={styles.button} variant="primary" as={Link} to={"/products/" + product.id}>Read more</Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
}

export default ProductCard;
