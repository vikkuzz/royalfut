import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MenuItem from "../MenuItem";
import SvgContainer from "../SvgContainer";

import "./BurgerMenu.scss";

import { twitter } from "../../data-svg/twitter";
import { whatsapp } from "../../data-svg/whatsapp";
import { insta } from "../../data-svg/insta";
import { youtube } from "../../data-svg/youtube";

const BurgerMenu = () => {
  const modal = useSelector((state) => state.royalfutReducer.loginModal);

  let menu =
    modal === true ? (
      <div className="burger-menu">
        <div className="burger-menu__wrapper">
          <MenuItem text={"LOG IN"} />
          <MenuItem text={"PRESET ORDERS"} styles={"burger-orange-"} />
          <MenuItem text={"BUY COINS"} styles={"burger-yellow-"} />
          <MenuItem text={"DELIVERY"} />
          <MenuItem text={"FAQ"} />
        </div>
        <div className="burger-menu__footer">
          <div className="burger-menu__icon-wrapper">
            <SvgContainer
              item={twitter}
              color={"white"}
              hover={"gold"}
              classStyle={"burger-menu__icon"}
            />
          </div>
          <div className="burger-menu__icon-wrapper">
            <SvgContainer
              item={whatsapp}
              color={"white"}
              hover={"gold"}
              classStyle={"burger-menu__icon"}
            />
          </div>
          <div className="burger-menu__icon-wrapper">
            <SvgContainer
              item={insta}
              color={"white"}
              hover={"gold"}
              classStyle={"burger-menu__icon"}
            />
          </div>
          <div className="burger-menu__icon-wrapper">
            <SvgContainer
              item={youtube}
              color={"white"}
              hover={"gold"}
              classStyle={"burger-menu__icon"}
            />
          </div>
        </div>
      </div>
    ) : null;
  return menu;
};

export default BurgerMenu;
