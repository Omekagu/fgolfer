import { Google } from '@mui/icons-material';
import React from 'react';
import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  return (
    <div className="login" style={{ padding: '100px', height: '100vh' }}>
      <input type="text" />
      <input type="text" />
      <button className="login__google" onClick={signIn}>
        <Google className="google icon" />
        Login with google
      </button>
    </div>
  );
};

export default Login;
