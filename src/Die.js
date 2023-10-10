import './Die.css'


/** Die component is a child component of dice it just takes a prop called val the Die component returns a div passed the prop val that we set the val to num in the main component Dice. */
const Die = ({ val }) => {
    return (
        <div className="Die">
            {val}
        </div>
    )
}

export default Die;