import React from "react";
import "./styles.css";

const TodoMenu = (props) => {
  return (
    <aside className={`todo-menu ${props.isActive ? "menu-active" : ""}`}>
      <ul className="menu-options">
        <li className="option">Clear all</li>
        <li className="option">Clear Completed</li>
        <li className="option">Mark All Completed</li>
      </ul>
      <i onClick={props.expand} className="fas fa-arrow-left fa-lg"></i>
    </aside>
  );
};

export default TodoMenu;
