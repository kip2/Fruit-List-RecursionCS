import React from "react";
import { render } from "react-dom";
import FruitList from "./components/FruitsList";
import fruitList from "./json/fruits.json";


render(<FruitList fruitList={fruitList}/>, document.getElementById("root"));
