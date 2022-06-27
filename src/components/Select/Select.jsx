import React, { useState } from 'react';

import './Select.scss';

const Select = ({elems}) => {
    const[option,setOption]     =    useState(elems[0]);
    const[showBlock, setShowBlock] = useState(false);

    const icon = (url, currency, elem) =>{
        if(url){
            return <img className='select__btn' alt={elem.title} src={elem.url} id={elem.id}/>
        }
        if(currency){
            return <div className='select__option'>{elem.currency}</div>
        }
    }

    const handleBoxClick = (event) => {
        setShowBlock(!showBlock);
    };

    const onClickOption = (e) => {
        let id = e.target.id;
        if(!e.target.id){
            return
        }
        setOption(elems[id]);
    }

    const typeDisplay = 320;

    return (
        <div className={`select`} onClick={handleBoxClick}>
            <div className="select__title-wrapper">
                {icon(option.url, option.currency, option)}
                {typeDisplay > 320? <div className='select__title'>{option.country}</div> : null}
            </div>
            <div className={`select__wrapper-options${showBlock ? " select__is-active" : ""}`} 
                onClick={(e)=>onClickOption(e)}>
                {elems.map((item)=>{
                    return <div className="select__country" key={item.id} id={item.id}>
                                {icon(item.url, item.currency, item)}{item.country}
                            </div>
                })}
            </div>
        </div>
    )
}

export default Select;