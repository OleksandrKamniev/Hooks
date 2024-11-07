import React, { useEffect, useRef, useState } from "react";
import "./../App.scss";
import {defaultTimerValue, resetTimerValue} from "../constants/timerConstants";

export const Timer = () => {
    const Ref = useRef<NodeJS.Timeout | null>(null);
    const [timer, setTimer] = useState(resetTimerValue);

    const getTimeRemaining = (endTime: Date) => {
        const total = endTime.getTime() - new Date().getTime();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (endTime: Date) => {
        const { total, hours, minutes, seconds } = getTimeRemaining(endTime);
        if (total >= 0) {
            setTimer(
                `${hours > 9 ? hours : "0" + hours}:${
                    minutes > 9 ? minutes : "0" + minutes
                }:${seconds > 9 ? seconds : "0" + seconds}`
            );
        }
    };

    const clearTimer = (endTime: Date) => {
        setTimer(defaultTimerValue);
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(endTime);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    };

    return (
        <div className='timerContainer'>
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
        </div>
    );
};
