import React, { ChangeEvent, useState } from "react";
import "../../App.scss";
import { TodoItem } from "./ToDoItem";

export const TodoList = () => {
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const addItem = () => {
        if (inputValue) {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };
    const deleteItem = (indexToDelete: number) => {
        const newTodos = items.filter((_, index) => index !== indexToDelete);
        setItems(newTodos);
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <h3>To Do List</h3>
            <div>
                <input value={inputValue} onChange={handleChange} placeholder="Add a new task..." />
            </div>
            <div className="flexDiv">
                <button onClick={addItem}>Add</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <TodoItem key={index} todo={item} removeToDo={() => deleteItem(index)} />
                ))}
            </ul>
        </div>
    );
};
