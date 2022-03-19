import React from "react";

const Calculator = () => {
    return<div className="calculator">
        <div className="calculator__platform">
            <button className="calculator__platform-button">playstation</button>
            <button className="calculator__platform-button">xbox</button>
        </div>
        <div className="calculator__method">
            <div className="calculator__wrapper-method">
                <label>
                    <input className="calculator__comfort" type="radio" name="radiobutton" value="radiobutton" ></input>
                    <span>комфортный</span>
                </label>
                <label>                
                    <input className="calculator__transfer" type="radio" name="radiobutton" value="radiobutton" defaultValue={"XBOX"}></input>
                    <span>трансферный рынок</span>
                </label>
            </div>
            <a href='#' className="help">как это работает?</a>
            <div className="calculator__wrapper-coins">
                <input type='text'></input>
                <div className="calculator__wrapper-buttons-coins">
                    <button>300k</button>
                    <button>500k</button>
                    <button>1m</button>
                    <button>10m</button>
                </div>
                <input type="text"></input>
            </div>
            <div className="calculator__wrapper-buttons">
                <div className="calculator__buttons-pay">
                    <button>купить монеты</button>
                    <button>offers</button>
                </div>
                <div className="calculator__hint">наша система полностью автоматизирована, поэтому мы доставляем монеты в любое время, 24.7</div>                
            </div>
        </div>
    </div>
}

export default Calculator;