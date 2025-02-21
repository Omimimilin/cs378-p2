import React from 'react';

function Header() {
  return (
    //edit make sure it works
    <header className="header">
      <img className="logo" src={`${process.env.PUBLIC_URL}/images/maru-logo.png`} alt="restaurant logo"/>
      <p className="slogan">Authentic flavors, fresh ingredients, a taste of Japan awaits!</p>
      <p className="slogan2">Your choice for authentic Japanese flavors, fresh and delicious!</p>
    </header>
  );
}

export default Header;