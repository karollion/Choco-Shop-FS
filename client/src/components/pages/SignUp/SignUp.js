//import styles from './SignUp.module.scss'
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { API_URL } from '../../../config';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null); // null, "success", "error", "emailError"
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setStatus('loading');
    fetch(`${API_URL}/auth/register`, options)
      .then(res => {
        if(res.status === 201) {
          setStatus('success');
          setSignUpData({ email: '', password: '', passwordRepeat: '' });
          setTimeout(() => {
            navigate('/');
          }, 1000);
        } else if (res.status === 409) {
          setStatus('emailError');
        } else {
          setStatus('serverError');
        }
      })
      .catch(err => {
        setStatus('serverError');
      })
  };

  return (
    <Form onSubmit={handleSubmit} className='col-12 col-sm-3 mx-auto min-vh-100'> 
      <h2 className='my-4'>SignUp</h2>

      {status === 'success' && (
        <Alert variant='success'>
          <Alert.Heading>Succes!</Alert.Heading>
          <p>You have been successfully registered! You can now log in.</p>
        </Alert>
      )}

      {status === 'emailError' && (
        <Alert variant="danger">
          <Alert.Heading>User with such email already exists</Alert.Heading>
        </Alert>
      )}

      {status === 'error' && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Make sure all the fields are filled correctly and try again!</p>
        </Alert>
      )}

      {status === 'loading' && (
        <Spinner animation='border' role='status' className='block mx-auto'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>E-mail</Form.Label>
        <Form.Control 
          type='email' 
          value={signUpData.email} 
          onChange={(e) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type='password' 
          required
          value={signUpData.password} 
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formPassword'>
        <Form.Label>Confirm password</Form.Label>
        <Form.Control 
          type='password' 
          required
          value={signUpData.passwordRepeat} 
          onChange={(e) =>
            setSignUpData({ ...signUpData, passwordRepeat: e.target.value })
          }
        />
      </Form.Group>

      <Button variant='primary' type='submit' >
        Sign up
      </Button>

    </Form>
  );
};

export default SignUp;