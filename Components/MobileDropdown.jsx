import React from 'react';

const MobileDropdown = () => {
  return (
    <div className="mobileDropdown">
      <div className="mobileDropdown__container">
        <a href="/Home" className="link mb-link">
          New
        </a>
        <a href="/Men" className="link mb-link">
          Men
        </a>
        <a href="/Women" className="link mb-link">
          Women
        </a>
        <a href="/MadetoMeasure" className="link mb-link">
          made to measure
        </a>
        <a href="/Accessories" className="link mb-link">
          Accessories
        </a>
        <a href="/Videos" className="link mb-link">
          Videos
        </a>
      </div>

      <div className="mobileDropdown__footer">
        <p>francisGolfer ©2022</p>
      </div>
    </div>
  );
};

export default MobileDropdown;
