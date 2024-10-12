import React from 'react';
import icon1 from '../../assets/icon-1.png';
import icon2 from '../../assets/icon-2.png';
import icon3 from '../../assets/icon-3.png';
import icon4 from '../../assets/icon-4.png';
import footerLogo from '../../assets/footer-logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 flex justify-between items-center p-5 md:px-20 flex-wrap">
      {/* Left Section: Logo and Copyright */}
      <div className="flex items-center gap-2">
      <div
  className="w-16 h-10 bg-no-repeat bg-center bg-contain"
  style={{ backgroundImage: `url(${footerLogo})` }}
></div>
        <div className="text-white text-opacity-50 text-xs">&copy; 2024 | Prolega</div>
      </div>
      
      {/* Center Section: Policy Links */}
      <div className="flex flex-col items-center text-white text-sm gap-2">
        <div>Privacy Policy</div>
        <div>Do not sell my personal info</div>
        <div>Terms of Service</div>
      </div>
      
      {/* Right Section: Links and Icons */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-5 text-white text-sm">
          <div>About</div>
          <Link to="contactUs">
          <div>Contact</div>
          </Link>
          <div>Fin-Buddy</div>
          <div>Investments</div>
        </div>
        <div className="flex gap-3">
          <img src={icon1} alt="RSS" className="w-7 h-7" />
          <img src={icon2} alt="Twitter" className="w-7 h-7" />
          <img src={icon3} alt="Reddit" className="w-7 h-7" />
          <img src={icon4} alt="Facebook" className="w-7 h-7" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
