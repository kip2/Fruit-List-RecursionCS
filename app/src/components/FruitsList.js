import React from "react";
import Card from "./Card";
import sytles from "../css/styles.css";

export default function FruitList({ fruits }) {
    return(
        <div className={sytles.background}>
            <div className={sytles.title_wrapper}>
                <h1 className={sytles.title}>Fruit List</h1>
            </div>
            <div className={sytles.container}>
                {
                    fruits.map(fruit => <Card {...fruit} />)
                }
            </div>
        </div>
    );
}