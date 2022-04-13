import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  if(user){
    navigate('/home')
  }
  const handleRegisterSubmit = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password)
  }
  const navigateLogin = () =>{
    navigate('/login')
  }
  return (
    <div className='register-form'>
      <h2 style={{textAlign: 'center', marginTop:'20px'}}>Please Register</h2>
      <Form onSubmit={handleRegisterSubmit}>
        <input type="text" name="name" id="" placeholder='Your Name'/>
        <input type="email" name="email" id="" placeholder='Email' required/>
        <input type="password" name="password" id="" placeholder='Password' required/>
        <input type="submit" value="Register" />
      </Form>
      <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
    </div>
  );
};

export default Register;