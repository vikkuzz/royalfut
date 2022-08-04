import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MenuItem from "../MenuItem";

import "./BurgerMenu.scss";

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
        <div className="burger-menu__footer"></div>
      </div>
    ) : null;
  return menu;
};

export default BurgerMenu;
