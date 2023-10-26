import React from "react";

// todo: あとでimgを引数に追加してよびだす
export default function Card({ name, calorie, macro }) {
    return (
        <section>
            <h1>{name}</h1>
            <p>Calorie: {calorie}</p>
            <p>Macro: {macro}</p>
        </section>
    );
}