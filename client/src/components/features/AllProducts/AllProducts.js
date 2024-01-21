import styles from './AllProducts.module.scss';
// import modules
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = ({products}) => {
    return (
      <div className={styles.root}>
        {products.map(product => (
          <ProductCard key={product.id} product={product}  />
        ))}
      </div>
    );
};

export default AllProducts;