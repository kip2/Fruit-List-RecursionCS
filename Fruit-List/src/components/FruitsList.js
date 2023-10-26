import React from "react";
import Card from "./Card";

export default function FruitList({ fruits }) {
    return(
        <>
            <h1>Fruit List</h1>
            <div>
                {
                    fruits.map(fruit => <Card {...fruit} />)
                }
            </div>
        </>
    );
}