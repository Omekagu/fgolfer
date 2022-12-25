import React from 'react';
import ClothesComp from '../Components/ClothesComp';
import data from '../utils/data';

const Accessories = () => {
  return (
    <div className="men">
      <div className="men__container">
        {data.products.map((product) => (
          <ClothesComp
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
