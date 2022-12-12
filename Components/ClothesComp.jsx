import React from 'react';

const ClothesComp = ({ img, name, price }) => {
  return (
    <div className="ClothesComp">
      <img className="ClothesComp__img" src={img} alt="shirt" />
      <div className="ClothesComp__btn">
        {/* <p className="ClothesComp__text">T-shirt</p> */}
      </div>
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
