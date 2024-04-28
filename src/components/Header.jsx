import React from 'react'
import HeaderTitle from './HeaderTitle';

function Header() {
  return (
    <div className='cursor-default h-56 bg-gradient-to-r from-black to-gray-900 p-10'>
      {/* Header Nav Component*/}
      <HeaderTitle/>
    </div>
  );
}

export default Header