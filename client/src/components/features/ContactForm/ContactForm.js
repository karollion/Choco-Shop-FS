import { Button, Form } from 'react-bootstrap';
import styles from './ContactForm.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = ({ action }) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  
  const handleSubmit = () => {
    action({ fName, lName, address, phone, email });
  };

  return (
    <div  className={styles.root}>
      <Form onSubmit={validate(handleSubmit)} className='col-12 col-sm-3 mx-auto'>

        <h4 className='my-4' >Where to deliver?</h4>

        <Form.Group  controlId="formfname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            {...register("fname", { required: true, minLength: 3, maxLength: 20 })}
            value={fName}
            onChange={e => setFName(e.target.value)}
            type='text' placeholder='John'
          />
          {errors.fName && <small className="d-block form-text text-danger mt-2">First Name length is incorrect (min is 3, max is 20)</small>}
        </Form.Group>

        <Form.Group  controlId="formlname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            {...register("lName", { required: true, minLength: 3, maxLength: 30 })}
            value={lName}
            onChange={e => setLName(e.target.value)}
            type='text' placeholder='Doe'
          />
          {errors.lName && <small className="d-block form-text text-danger mt-2">Last name length is incorrect (min is 3, max is 30)</small>}
        </Form.Group>

        <Form.Group  controlId="formaddress">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            {...register("address", { required: true, minLength: 10, maxLength: 100 })}
            value={address}
            onChange={e => setAddress(e.target.value)}
            type='text' placeholder='Caan 10'
            />
            {errors.address && <small className="d-block form-text text-danger mt-2">Address length is incorrect (min is 10, max is 100)</small>}
        </Form.Group>

        <Form.Group  controlId="formphone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            {...register("phone", { required: true })}
            value={phone}
            onChange={e => setPhone(Number(e.target.value))}
            type='phone' placeholder='555444666'
          />
          {errors.phone && <small className="d-block form-text text-danger mt-2">Phone can't be empty</small>}
        </Form.Group>

        <Form.Group  controlId="formemail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            {...register("email", { required: true })}
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email' placeholder='john.doe@gmail.com'
          />
          {errors.email && <small className="d-block form-text text-danger mt-2">Email can't be empty</small>}
        </Form.Group>

        <Button className='my-3' variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
  );
};

export default ContactForm;