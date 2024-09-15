import React, {useEffect, useState} from "react";
import "./../App.scss";

export const Timer = () => {
    const [seconds, setSeconds] = useState(10);
    const [isResetButton, setIsResetButton] = useState(false);
    const decrementTime = () => {
        setSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds - 1 : 0);
    }
    const displayResetButton = () => {
        setIsResetButton(true)
    }
    const resetTimer = () => {
        setSeconds(10)
        hideResetButton()
    }
    const hideResetButton = () => {
        setIsResetButton(false)
    }
    useEffect(() => {
            if (seconds > 0) {
                const interval = setInterval(decrementTime, 1000)
                return () => {
                    clearInterval(interval)
                }
            } else{
                displayResetButton()
            }
        }, [seconds]
    )
    return (
        <div>
            Timer
            <div className="flexDiv">
            </div>
            <div> {seconds > 0 ? seconds : "Time's up!"} </div>

            {isResetButton && <button onClick={resetTimer}> Reset </button>}
        </div>
    );
}
