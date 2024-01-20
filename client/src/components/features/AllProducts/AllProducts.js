import styles from './AllProducts.module.scss';
// import modules
import ProductCard from '../ProductCard/ProductCard';
// imports from redux
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

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