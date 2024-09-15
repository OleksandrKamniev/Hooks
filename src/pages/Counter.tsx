import React, {useState} from "react";
import "./../App.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }
    return (
        <div>
            Counter
            <div className="flexDiv">
                <div onClick={incrementCount}>+</div>
                <div onClick={decrementCount}>- </div>
                </div>
                <div> {count} </div>
        </div>
    );
}
