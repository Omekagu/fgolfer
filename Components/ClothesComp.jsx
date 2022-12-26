import React from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

const ClothesComp = ({ img, name, price, cart, product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="ClothesComp" onClick={() => handleAddToCart({ product })}>
      <img className="ClothesComp__img" src={img} alt="shirt" />

      <p className="ClothesComp__text">{cart}</p>
      <div className="ClothesComp__btn--price">
        <div>
          <p className="ClothesComp__tag">{name}</p>
          <button className="ClothesComp__btn">ADD TO CART</button>
        </div>

        <div>
          <p className="ClothesComp__price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ClothesComp;
