import React from 'react';
// images
import Logo from '../assets/ChrGraceLogoSnip.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* button */}
          <a href='#contact' className='btn btn-lg'>Work with me</a>
        </div>
      </div>
    </header>
  );
};
<a href='#contact' className='btn btn-lg'>Contact me</a>
export default Header;
