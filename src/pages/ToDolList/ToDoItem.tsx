import React from "react";
import "../../App.scss";

interface ToDoItemProps {
    todo: string;
    removeToDo: () => void;
}

export const TodoItem: React.FC<ToDoItemProps> = ({ todo, removeToDo }) => {
    return (
        <div className="todo-item">
            <li>{todo}</li>
            <button onClick={removeToDo}>Remove</button>
        </div>
    );
};
