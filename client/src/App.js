import { Routes, Route, useLocation } from 'react-router-dom';
import { fetchProducts } from './redux/productsRedux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

// Import views
import Footer from "./components/views/footer/footer";
import NavBar from "./components/views/NavBar/NavBar";

// import pages
import Home from "./components/pages/Home/Home"
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import CartResume from './components/pages/CartResume/CartResume';
import NotFoundPage from './components/pages/NotFound/NotFoundPage';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      <NavBar />
      
      <div
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
        }}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Home/>} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/resume" element={<CartResume />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      
      <Footer />
    </div>
  );
}

export default App;
