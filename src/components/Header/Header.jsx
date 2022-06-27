import React from "react";

import Select from "../Select";

import {flagLangs, currency} from "../../data-elements";


import './Header.scss';

const Header = () => {
    return <header className="header">
        <div className="header__wrapper-menu">
            <div className="header__home-page">
                <span className="header__logo">Royalfut</span>
                <span className="header__sublogo">FIFA22 coins</span>
            </div>
            <div className="header__wrapper-center">
                <Select elems={flagLangs}/>
                <Select elems={currency}/>
            </div>            
            <button className="header__menu">menu</button>
        </div>
    </header>
}

export default Header;