import React from 'react';

const MobileDropdown = () => {
  return (
    <div className="mobileDropdown">
      <div className="mobileDropdown__container">
        <div>
          <a href="/Home" className="link mb-link">
            New
          </a>
          <div className="mobileDropdown__dropdown-menu">
            <a href="/">southern urban</a>
            <a href="/">new in men</a>
            <a href="/">new in women</a>
          </div>
        </div>

        <div>
          <a href="/Men" className="link mb-link">
            Men
          </a>
          <div className="mobileDropdown__dropdown-menu">
            <a href="/">southern urban</a>
            <a href="/">tailoring</a>
            <a href="/">jackets</a>
            <a href="/">shirts</a>
            <a href="/">pants & shorts</a>
            <a href="/">ties</a>
            <a href="/">socks</a>
          </div>
        </div>

        <div>
          <a href="/Women" className="link mb-link">
            Women
          </a>
          <div className="mobileDropdown__dropdown-menu">
            <a href="/">southern urban</a>
            <a href="/">tailoring</a>
            <a href="/">jackets</a>
            <a href="/">shirts</a>
            <a href="/">dresses & skirts</a>
            <a href="/">ties</a>
            <a href="/">socks</a>
          </div>
        </div>

        <div>
          <a href="/MadetoMeasure" className="link mb-link">
            made to measure
          </a>
          <div className="mobileDropdown__dropdown-menu">
            <a href="/">southern urban</a>
          </div>
        </div>

        <div>
          <a href="/Accessories" className="link mb-link">
            Accessories
          </a>
          <div className="mobileDropdown__dropdown-menu">
            <a href="/">tie</a>
          </div>
        </div>

        <div>
          <a href="/Videos" className="link mb-link">
            Videos
          </a>
        </div>
        <a href="tel:+4733378901" className="link mb-link">
          Contact Us
        </a>
        <a href="mailto:someone@example.com" className="link mb-link">
          Help center
        </a>
      </div>

      <div className="mobileDropdown__footer">
        <p>©francisGolfer2022</p>
      </div>
    </div>
  );
};

export default MobileDropdown;
