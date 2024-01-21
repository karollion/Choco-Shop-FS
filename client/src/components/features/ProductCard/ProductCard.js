import styles from './ProductCard.module.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
// import modules
import Button from '../../common/Button/Button';

const ProductCard = ({ product }) => {
  const photos = product.photo.split(' ');
  const navigate = useNavigate();

  const handleClick = e => {
    e.preventDefault();
    navigate("/products/" + product.id);
  }

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
        <div className='my-4 d-flex justify-content-center'>
        <Button action={handleClick}>Read more</Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
}

export default ProductCard;
