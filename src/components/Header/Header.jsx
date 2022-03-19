import React from "react";

import './Header.scss';

const Header = () => {
    return <header className="header">
        <div className="header__wrapper-menu">
            <div className="header__home-page">
                <span>Royalfut</span><span>монеты FIFA22</span></div>
            <select className="header__countries">
                <option>Пункт 1</option>
                <option>Пункт 2</option>
            </select>
            <select className="header__currency">
                <option>Пункт 1</option>
                <option>Пункт 2</option>
            </select>
            <button className="header__menu">menu</button>
        </div>
    </header>
}

export default Header;