import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginModal } from "../../redux/actions/royalfutActions";

import "./App.scss";

import Header from "../Header";
import BurgerMenu from "../BurgerMenu";

function App() {
  const wrapperModalRef = React.createRef();
  const modal = useSelector((state) => state.royalfutReducer.loginModal);
  const dispatch = useDispatch();

  const isOutsideClick = (event, ref) => {
    console.log("click", ref.current, event.target);
    if (!ref.current.contains(event.target) && modal) {
      dispatch(loginModal(false));
    }
  };

  return (
    <div className="App" onClick={(e) => isOutsideClick(e, wrapperModalRef)}>
      <Header />
      <div className="app__burger-wrapper" ref={wrapperModalRef}>
        <BurgerMenu />
      </div>
    </div>
  );
}

export default App;
