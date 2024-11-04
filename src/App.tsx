import React from 'react';
import './App.css';
import {Counter} from "./pages/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Timer} from "./pages/Timer";
import {TodoList} from "./pages/ToDolList/ToDoList";

function App() {
    return (
    <BrowserRouter>
        <Routes>
                <Route path="counter" element={<Counter />} />
                <Route path="timer" element={<Timer />} />
                <Route path="todolist" element={<TodoList />} />
                <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
