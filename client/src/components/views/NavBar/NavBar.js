import styles from './NavBar.module.scss'
import Container from '../../common/container/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/userRedux';

const NavBar = () => {
  const user = useSelector((state) => getUser(state));
  //const user = useSelector(getUser);

  console.log (user)
  return (
    <div className={styles.root}>
      <Container>
        <Navbar variant="dark" expand="lg" className='mb-4'>
            <Navbar.Brand className={styles.logo} as={NavLink} to="/">Choco-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/contact">Contact</NavLink>
                {!user ? (<NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/login">Login</NavLink>) : null }
                {!user ? (<NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/signup">Sign up</NavLink>) : null }
                {user ? (<NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/logout">Logout</NavLink>) : null }
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