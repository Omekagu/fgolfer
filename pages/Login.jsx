import { Google } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';
// import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  return (
    <div className="login" style={{ paddingTop: '100px', height: '100vh' }}>
      <form action="">
        <div className="input__box">
          <label htmlFor="Email Address">Email Address</label>
          <input type="text" className="input login__email" />
        </div>
        <div className="input__box">
          <label htmlFor="Email Address">Password *</label>
          <input type="password" className="input login__password" />
        </div>
        <div className="login__check">
          <div className="login__right">
            <input type="checkbox" className="checkbox" />
            remember password
          </div>
          <h5 className="forgot__password">
            <Link href="">forgot your password?</Link>
          </h5>
        </div>
      </form>
      <button className="login__btn btn">Login</button>
      <button className="login__google btn">
        <Google className="google_icon" />
        Login with google
      </button>
    </div>
  );
};

export default Login;
