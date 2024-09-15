import React, {ChangeEvent, useState} from "react";
import "./../App.scss";

export const TodoList = () => {
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const addItem = () => {
        if(inputValue){
        setItems([...items, inputValue])
        setInputValue('')
        }
    }
    const deleteItem = () => {
        setItems(items.slice(0,-1))
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            ToDoList
            <div><input value={inputValue} onChange={handleChange}/></div>
            <div className="flexDiv">
                <div onClick={addItem}>Add</div>
                <div onClick={deleteItem}>Remove </div>
                </div>
            <div> <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> </div>
        </div>
    );
}
