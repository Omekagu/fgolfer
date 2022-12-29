import React from 'react';

const login = () => {
  return (
    <div className="login" style={{ padding: '100px' }}>
      <form action="">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="francisGolfer@gmail.com"
          className="login__input"
        />
        <input
          type="password"
          placeholder="*************"
          className="login__input"
        />
        <input type="submit" value="Login" className="login__btn" />
      </form>
    </div>
  );
};

export default login;
