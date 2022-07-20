import React from "react";

import "./Header.scss";

function Header(props) {
  const topDivider = React.createRef();
  const centerDivider = React.createRef();
  const bottomDivider = React.createRef();

  const burgerToX = () => {
    centerDivider.current.classList.toggle("header__center-divider-x");
    topDivider.current.classList.toggle("header__top-divider-x");
    bottomDivider.current.classList.toggle("header__bottom-divider-x");
  };
  return (
    <div className="header">
      <div className="header__left">
        <a class="header__logo" href="/">
          ROYALFUT
          <div class="header__sublogo">FIFA 22 coins</div>
        </a>
      </div>
      <div className="header__center"></div>
      <div className="header__right">
        <button onClick={burgerToX} className="header__burger from-375-to-1024">
          <div
            ref={topDivider}
            className="header__burger-top header__divider"
          ></div>
          <div
            ref={centerDivider}
            className="header__burger-center header__divider"
          ></div>
          <div
            ref={bottomDivider}
            className="header__burger-bottom header__divider"
          ></div>
        </button>
        <button className="header__login from-1025-to-1900">Sign in</button>
      </div>
    </div>
  );
}

export default Header;
