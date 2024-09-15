import React from "react";
import {Link} from "react-router-dom";

export const Home=()=> {
    return (
        <div>
            Home
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/timer">Timer</Link>
                </li>
                <li>
                    <Link to="/todolist">ToDoList</Link>
                </li>
                <li>...</li>
            </ul>
        </div>


    );
}
