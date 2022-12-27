import React from 'react';
import ClothesComp from '../Components/ClothesComp';
import data from '../utils/data';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

const MadetoMeasure = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="men">
      <div className="men__container">
        {data.products.map((product) => (
          <ClothesComp
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default MadetoMeasure;
