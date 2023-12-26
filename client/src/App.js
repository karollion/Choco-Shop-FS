import { Routes, Route } from 'react-router-dom';
import { fetchProducts } from './redux/productsRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Import views
import Container from './components/common/container/Container';
import Footer from "./components/views/footer/footer";
import NavBar from "./components/views/NavBar/NavBar";

// import pages
import Home from "./components/pages/Home/Home"
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import CartResume from './components/pages/CartResume/CartResume';
import NotFoundPage from './components/pages/NotFound/NotFoundPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/resume" element={<CartResume />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
