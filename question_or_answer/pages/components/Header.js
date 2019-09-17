import React from 'react';
import Link from 'next/link'
import './Header.scss';

const Header = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <Link href="/">
          <a><img className="container-img" src="https://miro.medium.com/max/3300/1*yg2DHASe7om_TsIz0E5UuA.png"/></a>
        </Link>
      </div>
    </div>
  );
};
//밥

export default Header;