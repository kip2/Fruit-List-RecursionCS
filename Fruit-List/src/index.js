import React from "react";
import { render } from "react-dom";
import FruitList from "./components/FruitsList";


render(<FruitList fruitList={fruitList}/>, document.getElementById("root"));
