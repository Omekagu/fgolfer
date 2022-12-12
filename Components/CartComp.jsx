import { Add, Remove } from '@mui/icons-material';
import React from 'react';

const CartComp = () => {
  return (
    <div className="CartComp">
      <div className="CartComp__left">
        <img
          className="CartComp__img"
          src="./images/golfer (14).jpeg"
          alt="cart img"
        />
      </div>
      <div className="CartComp__right">
        <h3>pizza</h3>
        <p>sweet & delicious</p>
        <div className="CartComp__price">
          <div>
            <h3>N2,000</h3>
          </div>

          <div className="CartComp__count">
            <div>
              <Remove />
            </div>
            <span>3</span>
            <div>
              <Add />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
