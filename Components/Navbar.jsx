import { Search, Person, ShoppingCart, Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import Cart from './Cart';
import MobileDropdown from './MobileDropdown';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="navbar">
        <img className="navbar__logo" src="./BBK.png" alt="logo" />

        <div className="navbar__middle">
          <ul className="navbar__list">
            <li className="navbar__item">
              <div className="navbar__dropdown">
                <a className="link" href="/">
                  New
                </a>
                <div className="navbar__dropdown-menu">
                  <a href="/">southern urban</a>
                  <a href="/">new in men</a>
                  <a href="/">new in women</a>
                </div>
              </div>
            </li>
            <li className="navbar__item">
              <div className="navbar__dropdown">
                <a className="link" href="/Men">
                  Men
                </a>
                <div className="navbar__dropdown-menu">
                  <a href="/">southern urban</a>
                  <a href="/">tailoring</a>
                  <a href="/">jackets</a>
                  <a href="/">shirts</a>
                  <a href="/">pants & shorts</a>
                  <a href="/">ties</a>
                  <a href="/">socks</a>
                </div>
              </div>
            </li>
            <li className="navbar__item">
              <div className="navbar__dropdown">
                <a className="link" href="/Women">
                  women
                </a>
                <div className="navbar__dropdown-menu">
                  <a href="/">southern urban</a>
                  <a href="/">tailoring</a>
                  <a href="/">jackets</a>
                  <a href="/">shirts</a>
                  <a href="/">dresses & skirts</a>
                  <a href="/">ties</a>
                  <a href="/">socks</a>
                </div>
              </div>
            </li>
            <li className="navbar__item">
              <div className="navbar__dropdown">
                <a className="link" href="/MadetoMeasure">
                  made to measure
                </a>
                <div className="navbar__dropdown-menu">
                  <a href="/">southern urban</a>
                </div>
              </div>
            </li>
            <li className="navbar__item">
              <div className="navbar__dropdown">
                <a className="link" href="/Accessories">
                  accessories
                </a>
                <div className="navbar__dropdown-menu">
                  <a href="/">tie</a>
                </div>
              </div>
            </li>
            <li className="navbar__item">
              <a className="link" href="/Videos">
                Videos
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__right">
          <Link href="/Login">
            <Person className="navbar__user" />
          </Link>
          <Search className="navbar__search" />
          <ShoppingCart onClick={() => setOpenCart(!openCart)} />
          {openCart && <Cart />}
          <span>{totalCount}</span>
          <Menu className="navbar__menu" onClick={() => setOpen(!open)} />
          {open && <MobileDropdown />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
