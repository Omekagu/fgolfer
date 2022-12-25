import React, { useEffect } from 'react';
import CartComp from './CartComp';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redux/features/cartSlice';

const Cart = () => {
  const { items, totalAmount, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  return (
    <div className="cart">
      <div className="cart__summary">
        cart({totalCount}){' '}
        <h4 className="cart__total">Total: ({totalAmount})</h4>
      </div>

      <div>
        {items.map((item) => {
          return <CartComp key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
