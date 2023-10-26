import React from "react";
import styles from "../css/styles.css";

export default function Card({ name, calorie, macro, path }) {
    return (
        <section>
            <img className={styles.card} src={path} />
            <h1>{name}</h1>
            <p>Calorie: {calorie}</p>
            <p>Macro: {macro}</p>
        </section>
    );
}