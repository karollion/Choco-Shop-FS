import styles from './Search.module.scss';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import modules
import Container from '../../common/container/Container';
import Button from '../../common/Button/Button';
import { Form } from 'react-bootstrap';
// imports from redux
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllProducts } from '../../../redux/productsRedux';
import AllProducts from '../../features/AllProducts/AllProducts';
import { useState } from 'react';

const Search = () => {
  window.scrollTo(0 ,0);
  const navigate = useNavigate();
  const allProducts = useSelector(state => getAllProducts(state));
  const isLoading = useSelector(state => getIsLoading(state));

  const [searchPhase, setSearchPhase] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleSearch = () => {
    // Search for products based on the entered phrase
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchPhase.toLowerCase())
    );
    // Update the searchedProducts array
    setSearchedProducts(filteredProducts);
  };

  const handleClick = e => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>Search products</h2>
        <div className={styles.searchForm}>
          <Form >
            <Form.Group  controlId="formphone">
              <Form.Control
                type="text"
                value={searchPhase}
                onChange={(e) => setSearchPhase(e.target.value)}
                placeholder="Search phase"
              />
            </Form.Group>
          </Form>
          <Button action={handleSearch}>Szukaj</Button>
          
          <Button action={handleClick}>Back to home</Button>
        </div>
        {searchedProducts.length === 0 && !isLoading && <div className={styles.empty}>No products found</div>}
        {isLoading && <Spinner animation='border' variant='primary' />}
        {!isLoading && <AllProducts products={searchedProducts} />}
      </div>
    </Container>
  );
};

export default Search;