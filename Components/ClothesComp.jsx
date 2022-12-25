import React from 'react';

const ClothesComp = ({ img, name, price, cart }) => {
  return (
    <div className="ClothesComp">
      <img className="ClothesComp__img" src={img} alt="shirt" />

      <p className="ClothesComp__text">{cart}</p>
      <div className="ClothesComp__btn"></div>
      <div className="ClothesComp__btn--price">
        <div>
          <p className="ClothesComp__tag">{name}</p>
        </div>

        <div>
          <p className="ClothesComp__price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ClothesComp;
