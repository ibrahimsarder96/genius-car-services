import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(loading || loading1){
    return <Loading></Loading>
  }
  let errorElement;
  if(error || error1){
    errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
  }
  if(user || user1){
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{height: "1px"}} className="w-50 bg-primary"></div>
        <p className='mt-2 px-3'>OR</p>
        <div style={{height: "1px"}} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <div>
        <button 
          onClick={()=>signInWithGoogle()}
          className='btn btn-primary d-block w-50 mx-auto my-2'>
          <img style={{height: "30px"}} className='' src={google} alt="" />
          <span className='px-2'>Google Sign In</span>
        </button>
        <button className='btn btn-primary d-block w-50 mx-auto my-2'>
          <img style={{height: "30px"}} className='' src={facebook} alt="" />
          <span className='px-2'>Facebook Sign In</span>
        </button>
        <button 
          onClick={() =>signInWithGithub()}
          className='btn btn-primary d-block w-50 mx-auto'>
          <img style={{height: "30px"}} className='' src={github} alt="" />
          <span className='px-2'>Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;