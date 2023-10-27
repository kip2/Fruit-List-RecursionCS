import React, { useState } from "react";
import FruitList from "./FruitsList";
import fruitData from "../json/fruits.json";

export default function App() {
    const [fruits] = useState(fruitData);
    return <FruitList fruits={fruits} />
}