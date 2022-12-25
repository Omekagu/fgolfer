import { Add, Delete, Remove } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, remove, decrease } from '../redux/features/cartSlice';

const CartComp = ({ name, image, price, amount, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="CartComp">
      <div className="CartComp__left">
        <img className="CartComp__img" src={image} alt="cart img" />
      </div>
      <div className="CartComp__right">
        <p>{name}</p>
        <Delete onClick={() => dispatch(remove(id))} />
        <div className="CartComp__price">
          <div>
            <h3>₦{price}</h3>
          </div>

          <div className="CartComp__count">
            <div>
              <Remove onClick={() => dispatch(decrease(id))} />
            </div>
            <span>{amount}</span>
            <div>
              <Add onClick={() => dispatch(increase(id))} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
