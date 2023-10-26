import React from "react";
import Card from "./Card";
import sytles from "../css/styles.css";

export default function FruitList({ fruits }) {
    return(
        <div className={sytles.background}>
            <h1 className={sytles.title}>Fruit List</h1>
            <div className={sytles.container}>
                {
                    fruits.map(fruit => <Card {...fruit} />)
                }
            </div>
        </div>
    );
}