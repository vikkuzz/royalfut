import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSize } from "../../redux/actions/royalfutActions";

import "./App.scss";

import Header from "../Header";
import BurgerMenu from "../BurgerMenu";

import { useWindowDimensions } from "../../utils/customHooks";

function App() {
  // const { width, height } = useWindowDimensions();
  // const dispatch = useDispatch;
  // useEffect(() => {
  //   dispatch(changeSize({ width: width, height: height }));
  // }, [width, height]);
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
    </div>
  );
}

export default App;
