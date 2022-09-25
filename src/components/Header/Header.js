import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginModal } from "../../redux/actions/royalfutActions";

import "./Header.scss";

function Header() {
  const modal = useSelector((state) => state.royalfutReducer.loginModal);
  // const topDivider = React.createRef();
  // const centerDivider = React.createRef();
  // const bottomDivider = React.createRef();
  const dispatch = useDispatch();

  const loginModalState = useSelector(
    (state) => state.royalfutReducer.loginModal
  );

  const burgerToX = () => {
    dispatch(loginModal(!loginModalState));
  };
  return (
    <div className="header">
      <div className="header__left">
        <a className="header__logo" href="/">
          ROYALFUT
          <div className="header__sublogo">FIFA 22 coins</div>
        </a>
      </div>
      <div className="header__center"></div>
      <div className="header__right">
        <button onClick={burgerToX} className="header__burger from-375-to-1024">
          <div
            //ref={topDivider}
            className={`header__burger-top header__divider ${
              modal && "header__top-divider-x"
            }`}
          ></div>
          <div
            //ref={centerDivider}
            className={`header__burger-center header__divider ${
              modal && "header__center-divider-x"
            }`}
          ></div>
          <div
            //ref={bottomDivider}
            className={`header__burger-bottom header__divider ${
              modal && "header__bottom-divider-x"
            }`}
          ></div>
        </button>

        <button onClick={burgerToX} className="header__login from-1025-to-1900">
          {loginModalState ? (
            <div>
              <div className="header__burger-top header__divider header__top-divider-x"></div>
              <div className="header__burger-center header__divider header__center-divider-x"></div>
              <div className="header__burger-bottom header__divider header__bottom-divider-x"></div>
            </div>
          ) : (
            "Log in"
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
