import styles from './NavBar.module.scss'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
// import modules
import Container from '../../common/container/Container';
// imports from redux
import { useSelector } from 'react-redux';
import { getAllOrders } from '../../../redux/ordersRedux';
import { getUser } from '../../../redux/userRedux';

const NavBar = () => {
  const user = useSelector((state) => getUser(state));
  const orders = useSelector((state) =>  getAllOrders(state))
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <Container>
        <Navbar expanded={expanded} variant="dark" expand="lg" className='mb-4'>
            <Navbar.Brand className={styles.logo} as={NavLink} to="/">Choco-Shop</Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className={styles.nav} id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/">Home</NavLink>
                <NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/about">About</NavLink>
                <NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/contact">Contact</NavLink>
                {!user ? (<NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/login">Login</NavLink>) : null }
                {!user ? (<NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/signup">Sign up</NavLink>) : null }
                {user ? (<NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/logout">Logout</NavLink>) : null }
                <NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/cart">
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                  <div className={styles.cartOrders}>{orders.length}</div>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container> 
    </div>
  );
};

export default NavBar;