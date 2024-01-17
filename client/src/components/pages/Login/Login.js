import styles from './Login.module.scss'
import { Alert, Spinner, Form } from 'react-bootstrap';
import { useState } from 'react';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/userRedux';
import { useNavigate } from "react-router-dom";
import Container from '../../common/container/Container';
import Button from '../../common/Button/Button';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); //null, 'loading', 'success', 'serverError', 'clientError'

  const handleSubmit = e => {
    e.preventDefault();

    const options = {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/login`, options)
      
      .then(res => {
        if(res.status === 201) {
          setStatus('success');
          return res.json();
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .then(user => {
        dispatch(logIn({ user }));
        setTimeout(() => { navigate('/') }, 500);
      })
      .catch(err => {
        setStatus('serverError');
      })
  };
  return (
    <div className={styles.root}>
      <Container>
        <h2 className={styles.title}>Login</h2>

        {status === 'success' && (
          <Alert variant='success'>
            <Alert.Heading>Succes!</Alert.Heading>
            <p>You have been successfully logined in!</p>
          </Alert>
        )}

        {status === 'serverError' && (
          <Alert variant='danger'>
            <Alert.Heading>Something went wrong...</Alert.Heading>
            <p>Unexpected error... Try again!</p>
          </Alert>
        )}

        {status === 'clientError' && (
          <Alert variant='danger'>
            <Alert.Heading>Incorrect data</Alert.Heading>
            <p>Login or password are incorrect...</p>
          </Alert>
        )}

        {status === 'loading' && (
          <Spinner animation='border' role='status' className='block mx-auto'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}

        <Form onSubmit={handleSubmit} className='col-12 col-sm-3 mx-auto my-4 px-3 min-vh-100'> 

          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control 
              type='text' 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder='example@email.com' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='password' 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder='******' />
          </Form.Group>

          <div className='my-4 d-flex justify-content-center'>
          <Button type='submit' >Sign in</Button>
          </div>

        </Form>
      </Container>
    </div>
  );
};

export default Login;