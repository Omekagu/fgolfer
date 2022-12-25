import { Add, Delete, Remove } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartComp = ({ name, image, price, brand, sex }) => {
  return (
    <div className="CartComp">
      <div className="CartComp__left">
        <img className="CartComp__img" src={image} alt="cart img" />

        <Delete />
      </div>
      <div className="CartComp__right">
        <p>
          {name}
          <h4> sex: {sex}</h4>
        </p>
        <h3>Brand:{brand}</h3>
        <div className="CartComp__price">
          <div>
            <h3>{price}</h3>
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
