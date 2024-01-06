import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import ProductCard from '../ProductCard/ProductCard';
import styles from './AllProducts.module.scss';

const AllProducts = () => {
  const products = useSelector(getAllProducts);

    return (
      <div className={styles.root}>
        {products.map(product => (
          <ProductCard key={product.id} product={product}  />
        ))}
      </div>
    );
};

export default AllProducts;