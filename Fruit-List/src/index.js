import React from "react";
import { render } from "react-dom";
import FruitList from "./components/FruitsList";
import fruitData from "./json/fruits.json";


render(<FruitList fruitList={fruitData}/>, document.getElementById("root"));

// todo: fruits.jsonにimg画像の呼び出しを加えてみる
