import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {
  const photos = product.photo.split(' ');

  return (
    <div className={`col-lg-4 col-md-6  col-12 ${styles.root}`}>
      <div className={styles.box}>
        <img
          src={IMGS_URL + photos[0]}
          alt="Product_photo"
          className={styles.img}
        />
        <div className={styles.content}>
          {product.name}
          {product.price}
          <button variant="primary" as={Link} to={"/products/" + product.id}>Read more</button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
}

export default ProductCard;
