import React from "react";
import { images } from "../../utils";

const TodoEntity = (props) => {
  const image = props.completed ? images.completed : images[props.category];

  return (
    <li className="todo-entry">
      <div className="container">
        <p className="task-icon">{image}</p>
        <div className="task-main-info">
          <h3 className="task-name">{props.taskName}</h3>
          <p className="task-location">{props.location}</p>
        </div>
      </div>
      <div className="time">{props.time}</div>
    </li>
  );
};

export default TodoEntity;
