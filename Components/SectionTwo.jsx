import { AddShoppingCart } from '@mui/icons-material';
import React from 'react';
import data from '../utils/data';
import ClothesComp from './ClothesComp';

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <div>
        <ul className="sectionTwo__list">
          <li className="sectionTwo__item active">
            <a href="/men">Men</a>
          </li>
          <li className="sectionTwo__item">
            <a href="/women">Women</a>
          </li>
        </ul>
      </div>
      <div className="sectionTwo__banner">
        <div className="sectionTwo__clothesList">
          {data.products.map((product) => (
            <ClothesComp
              key={product.name}
              img={product.image}
              name={product.name}
              price={product.price}
              cart={<AddShoppingCart className="sectionTwo__add" />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
