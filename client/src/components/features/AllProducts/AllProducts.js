import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import { Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = () => {
  const products = useSelector(getAllProducts);

    return (
      <Row className='py-4'>
        {products.map(product => (
          <ProductCard key={product._id} product={product}  />
        ))}
      </Row>
    );
};

export default AllProducts;