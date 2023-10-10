import { useState } from "react";
import Die from "./Die";
import './Dice.css';
// Dice game app to render dice cards.
// first define dice component and destructor numDice, title, maxVal and set them a default value.
const Dice = ({ numDice = 6, title = "Main Game", maxVal = 20 }) => {
    const [numbers, setNumbers] = useState(Array.from({ length: numDice }))
    // this function generates a nw number for every number thats in there make a new array using map wiill automatically return to the setNumbers 
    const rollDice = () => (
        setNumbers(numbers => (
            numbers.map(n => Math.floor(Math.random() * maxVal) + 1)
        ))
    )
    // const dice = [];
    // for (let i = 0; i < numDice; i++) {
    //     const num = Math.floor(Math.random() * maxVal) + 1;
    //     dice.push(num)

    // }

    return (
        <div className="Dice">
            <h2>{title}</h2>
            <div>
                {numbers.map(num => <Die val={num} />)}
            </div>
            <button onClick={rollDice}>Roll</button>
        </div>
    )
}

export default Dice;