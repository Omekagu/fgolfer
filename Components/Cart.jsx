import React, { useEffect } from 'react';
import CartComp from './CartComp';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redux/features/cartSlice';

const Cart = () => {
  const { cartItems, totalAmount, totalCount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

  console.log(cartItems);
  return (
    <div className="cart">
      <div className="cart__summary">
        <h5 className="cart__payment">Process Payment</h5>
        <h4 className="cart__total">Total: ({totalAmount})</h4>
      </div>

      <div className="cart__content">
        {cartItems.map((cartItem) => {
          return <CartComp key={cartItem.id} {...cartItem} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
