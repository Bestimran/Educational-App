import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {registerForm} = useContext(AuthContext);
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        registerForm(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(error => console.log(error));
    }

    





    return (
        <Form onSubmit={handleRegister} className='w-50 mx-auto mt-5 bg-info p-5 rounded'>
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