import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
  let errorElement;
  if(error){
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  if(loading || updating){
    return <Loading></Loading>
  }
 if(user){
   console.log('user',user)
 }
  const handleRegisterSubmit = async (event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if(agree){
      createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name});
      alert('Updated profile');
      navigate('/home');
    }
  }

  const navigateLogin = () =>{
    navigate('/login')
  }
  
  return (
    <div className='register-form'>
      <h2 style={{textAlign: 'center', marginTop:'20px'}} className="text-primary">Please Register</h2>
      <Form onSubmit={handleRegisterSubmit}>
        <input type="text" name="name" id="" placeholder='Your Name'/>
        <input type="email" name="email" id="" placeholder='Email' required/>
        <input type="password" name="password" id="" placeholder='Password' required/>
        <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        {/* <label className={agree ? "ps-2 ": "ps-2 text-danger"} htmlFor='terms'>Accept Genius Car Terms and Conditions</label> */}
        <label className={`ps-2 ${agree? "": "text-danger"}`} htmlFor='terms'>Accept Genius Car Terms and Conditions</label>
        <input 
        className='bg-primary text-white mx-auto w-50 rounded mt-2' 
        type="submit" 
        value="Register" />
      </Form>
      {errorElement}
      <p className='mt-4'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;