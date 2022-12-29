import React from 'react';

const signIn = () => {
  return (
    <div className="signin" style={{ padding: '100px' }}>
      <form action="">
        <h1>sign Up</h1>
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

export default signIn;
