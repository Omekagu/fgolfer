import { Google } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';
// import { signIn, signOut } from 'next-auth/react';

const SignUp = () => {
  return (
    <div className="login">
      <form action="">
        <div className="input__box">
          <label htmlFor="Email Address">Email Address</label>
          <input type="text" className="input login__email" />
        </div>
        <div className="input__box">
          <label htmlFor="Email Address">Password *</label>
          <input type="password" className="input login__password" />
        </div>
        <div className="input__box">
          <label htmlFor="Email Address">Password *</label>
          <input type="password" className="input login__password" />
        </div>
        <div className="input__box">
          <label htmlFor="Email Address">Password *</label>
          <input type="password" className="input login__password" />
        </div>
        <div className="input__box">
          <label htmlFor="Email Address">Password *</label>
          <input type="file" className="input login__password" />
        </div>
        {/* <div className="login__check">
          <div className="login__right">
            <input type="checkbox" className="checkbox" />
            remember password
          </div>
          <h5 className="forgot__password">
            <Link href="">forgot your password?</Link>
          </h5>
        </div> */}
      </form>
      <button className="login__btn btn">Sign Up</button>
      <button className="login__google btn">
        <Google className="google_icon" />
        Sign Up with google
      </button>
    </div>
  );
};

export default SignUp;
