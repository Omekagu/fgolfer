import React from 'react';
import ClothesComp from '../Components/ClothesComp';
import data from '../utils/data';

const MadetoMeasure = () => {
  return (
    <div className="men">
      <div className="men__container">
        {data.products.map((product) => (
          <ClothesComp
            key={product.name}
            img={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MadetoMeasure;
