import styles from './UserAccount.module.scss';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import modules
import Container from '../../common/container/Container';
import AllOrders from '../../features/AllOrders/AllOrders';
import Button from '../../common/Button/Button';
// imports from redux
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getUser } from '../../../redux/userRedux';
import { fetchDoneOrdersFromServer, getAllDoneOrders } from '../../../redux/doneOrdersRedux';

const UserAccount = () => {
  window.scrollTo(0 ,0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => getUser(state));
  const userOrders = useSelector(state => getAllDoneOrders(state));
  const isLoading = useSelector(state => getIsLoading(state));
  
  const handleClick = e => {
    e.preventDefault();
    navigate("/");
  }

  useEffect(() => {
      if (user) {
        dispatch(fetchDoneOrdersFromServer(user.user.id));
      }
  }, [dispatch, user]);

  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>Your Account</h2>
        <div className={styles.info}>
          <p>E-mail: {user.user.email}</p>
          <p>Status: {user.user.role}</p>
        </div>
        <h3 className={styles.title}>All orders</h3>
        {userOrders.length === 0 && !isLoading && <div className={styles.empty}>You have no orders.</div>}
        {isLoading && <div className='my-4 d-flex '><Spinner animation='border' variant='primary' /></div>}
        {!isLoading && <AllOrders orders={userOrders} canBeEdited={false}  isSummed={false}/>}
        <div className='my-4 d-flex justify-content-center'>
          <Button action={handleClick}>Back to home</Button>
        </div>
      </div>
    </Container>
  );
};

export default UserAccount;