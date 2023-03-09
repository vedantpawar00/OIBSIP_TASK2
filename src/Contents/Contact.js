import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';

import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css' 

export const Contact = () => {
  
  return (

    <div>

    <div className='con'>
    <Form className='offset-2, offset-'>

        <Form.Label>Your Full Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
      <br />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Enter Address" />
      <br />
      

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
      <button className='c-button'> Submit </button>

    </Form>
    </div>

            

    </div>

  );

}





