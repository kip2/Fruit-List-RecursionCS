import React from "react";
import Card from "./Card";

export default function FruitList({ fruitList }) {
    return(
        <>
            <h1>Fruit List</h1>
            <Card fruitList={fruitList}/>
        </>
    );
}