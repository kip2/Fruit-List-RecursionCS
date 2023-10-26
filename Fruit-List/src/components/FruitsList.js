import React from "react";
import Card from "./Card";

export default function FruitList({ fruitData }) {
    return(
        <>
            <h1>Fruit List</h1>
            <div>
                {
                    fruitData.map(fruit => <Card {...fruit} />)
                }
            </div>
        </>
    );
}