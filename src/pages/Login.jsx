import React from 'react'
import {Form, Button} from 'react-bootstrap';

const Login = () => {
  return (
    <div className='login'>
      <div className="login-bg">
        <img src="/images/login-bg.png" alt="bg" />
      </div>
      <div className="right-bg"></div>
      <div className="login-card">
        <h1>WELCOME</h1>
        <p>Please enter your details.</p>
        <Form className='form'>
          <Form.Group className="mb-1 email" controlId="formBasicEmail">
            <Form.Label className='label'>Email</Form.Label>
            <Form.Control className='input' type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 password" controlId="formBasicPassword">
            <Form.Label className='label'>Password</Form.Label>
            <Form.Control className='input' type="password" placeholder="Password" />
          </Form.Group>
          <Button className='submit' type="submit">
            Sign
          </Button>
        </Form>
        <span>Don’t have an account? <b>Sign up</b></span>
      </div>
    </div>
  )
}

export default Login
