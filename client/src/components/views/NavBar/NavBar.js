import styles from './NavBar.module.scss'
import Container from '../../common/container/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  return (
    <div className={styles.root}>
      <Container>
        <Navbar variant="dark" expand="lg" className='mb-4'>
            <Navbar.Brand className={styles.logo} as={NavLink} to="/">Choco-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/contact">Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/cart">
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </NavLink>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container> 
    </div>
  );
};

export default NavBar;