import React from 'react';
import { Email, Call, KeyboardArrowRight } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="footer">
      {/* Newsletter
      <div className="footer__newsletter">
        <h3 className="footer__newsletter--header">
          Newsletter <span>?</span>
        </h3>
        <p className="footer__newsletter--text">
          Get free shipping on your first order by subscribing to the Francis
          Golfer newsletter.
        </p>
        <div className="footer__newsletter--emailBox">
          <Email />
          <div>
            <input
              className="footer__newsletter--input"
              type="text"
              placeholder="Email"
            />
          </div>
          <KeyboardArrowRight />
        </div>
      </div>

      {/* customer */}
      {/* <div className="footer__customer">
        <h3 className="footer__customer--header">Customer Service</h3>
        <p className="footer__customer--text">
          Monday to Friday 9.30am - 6.30pm (African time)
        </p>
        <p className="footer__customer--call">
          <Call /> +33 (0)1 73 04 21 39
        </p>
        <p className="footer__customer--email">
          {' '}
          <Email /> Send us a message
        </p>
      </div>
      {/* ASSISTANCE */}
      {/* <div className="footer__assistance">
        <h3 className="footer__assistance--header">Assistance</h3>
        <ul className="footer__assistance--item">
          <div>
            <li className="footer__assistance--list">
              <a href="Delivery">Delivery </a>
            </li>
            <li className="footer__assistance--list">
              <a href="Returns"> Returns</a>
            </li>
            <li className="footer__assistance--list">
              <a href=" FAQ"> FAQ </a>
            </li>
          </div>
          <div>
            <li className="footer__assistance--list">
              <a href="Payment"> Payment</a>
            </li>
            <li className="footer__assistance--list">
              <a href="My account"> My account</a>
            </li>
            <li className="footer__assistance--list">
              <a href="Size-Guide">Size Guide</a>
            </li>
          </div>
        </ul>
      </div> */}
      <div>
        <div class="footer">
          <div class="contain">
            <div class="col">
              <h1>Company</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
                <li>Social</li>
                <li>Get in touch</li>
              </ul>
            </div>
            <div class="col">
              <h1>Products</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
                <li>Social</li>
                <li>Get in touch</li>
              </ul>
            </div>
            <div class="col">
              <h1>Accounts</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
                <li>Social</li>
                <li>Get in touch</li>
              </ul>
            </div>
            <div class="col">
              <h1>Resources</h1>
              <ul>
                <li>Webmail</li>
                <li>Redeem code</li>
                <li>WHOIS lookup</li>
                <li>Site map</li>
                <li>Web templates</li>
                <li>Email templates</li>
              </ul>
            </div>
            <div class="col">
              <label for="state">
                <div class="button">Contact Us</div>
              </label>
              <input type="checkbox" id="state" hidden />
              <div class="content">
                <div class="inner">
                  <ul>
                    <li>Webmail</li>
                    <li>Redeem code</li>
                    <li>WHOIS lookup</li>
                    <li>Site map</li>
                    <li>Web templates</li>
                    <li>Email templates</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              {/* Newsletter */}
              <div className="footer__newsletter">
                <h3 className="footer__newsletter--header">
                  Newsletter <span>?</span>
                </h3>
                <p className="footer__newsletter--text">
                  Get free shipping on your first order by subscribing to the
                  Francis Golfer newsletter.
                </p>
                <div className="footer__newsletter--emailBox">
                  <Email />
                  <div>
                    <input
                      className="footer__newsletter--input"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <KeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
