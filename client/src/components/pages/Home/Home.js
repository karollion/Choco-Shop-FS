import styles from './Home.module.scss';
import { Form, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
// import modules
import AllProducts from '../../features/AllProducts/AllProducts';
import Container from '../../common/container/Container';
// imports from redux
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllProducts } from '../../../redux/productsRedux';

const Home = () => {
  //window.scrollTo(0 ,0);
  const products = useSelector(state => getAllProducts(state));
  const isLoading = useSelector(state => getIsLoading(state));
  const [category, setCategory] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);
  
  useEffect(() => {
    setSearchedProducts(products);
  }, [products]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    const filteredProducts = selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products;
    setSearchedProducts(filteredProducts);
  };

  return (
    
      <div className={styles.root}>
        <div className={styles.hero}>
          <div className={styles.bgshadow}></div>
          <h1>Choco - Shop</h1>
          <h2>Treat yourself to a bit of sweetness</h2>
        </div>
        <Container>
          <h2 className={styles.title}>All our sweets</h2>
          <Form className='col-12 col-sm-3 mx-auto my-4 px-2'>
            <Form.Select value={category} onChange={handleCategoryChange}>
              <option value="">Select category</option>
              <option value="chocolate">Chocolate</option>
              <option value="cake">Cake</option>
              <option value="candy">Candy</option>
              <option value="icecream">Ice Cream</option>
            </Form.Select>
          </Form>
          {products.length === 0 && !isLoading && <p>No products</p>}
          {isLoading && <Spinner animation='border' variant='primary' />}
          {!isLoading && <AllProducts products={searchedProducts}/>}
        </Container>
      </div>
  );
};

export default Home;