import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Form className='w-50 mx-auto mt-5 bg-info p-5 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter User Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photoURL</Form.Label>
          <Form.Control type="photoURL" name='photoURL' placeholder="Enter photoURL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
         <Link to='/login'><p>Already you have an account</p></Link>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Register;