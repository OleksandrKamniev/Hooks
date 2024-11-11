import React from "react";
import "../../App.scss";

interface ToDoItemProps {
    todo: string;
    index: number;
    removeToDo: (index: number) => void;
}

export const TodoItem: React.FC<ToDoItemProps> = ({ todo, index, removeToDo }) => {
    return (
        <div className="todo-item">
            <li>{todo}</li>
            <button onClick={() => removeToDo(index)}>Remove</button>
        </div>
    );
};
