import React from "react";
import { connect } from "react-redux";
import { completeTodoAction, clearSingleTodoAction } from "../../redux/actions";
import { images } from "../../utils";
import "./styles.css";

const TodoEntry = (props) => {
  const completeTodo = () => {
    props.completeTodo(props.todoId);
  };

  const removeTodo = () => {
    props.removeTodo(props.todoId);
  };

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
      <div className="time-controls-wrapper">
        <div className="time">{props.time}</div>
        <div className="controls">
          <img onClick={completeTodo} src="https://img.icons8.com/nolan/30/checkmark.png" />
          <img onClick={removeTodo} src="https://img.icons8.com/nolan/30/waste.png" />
        </div>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (id) => dispatch(completeTodoAction(id)),
    removeTodo: (id) => dispatch(clearSingleTodoAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoEntry);
