import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { completeTodoAction, clearSingleTodoAction } from "../../redux/actions";
import { images } from "../../utils";
import "./styles.css";

const TodoEntry = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const select = () => {
    setIsSelected(!isSelected);
  };

  const completeTodo = () => {
    props.completeTodo(props.todoId);
  };

  const removeTodo = () => {
    props.removeTodo(props.todoId);
  };

  const image = props.completed ? images.completed : images[props.category];

  return (
    <Fragment>
      <li className="todo-entry">
        <div className="container">
          <p className="task-icon">{image}</p>
          <div className={`task-main-info ${props.completed ? "completed" : ""}`}>
            <h3 className="task-info task-name">{props.taskName}</h3>
            <p className="task-info task-location">{props.location}</p>
          </div>
        </div>

        <div className="controls">
          {props.note && (
            <img
              className={`clickable ${isSelected ? "selected" : ""}`}
              onClick={select}
              src="https://img.icons8.com/nolan/30/chevron-down.png"
              alt="arrow down"
            ></img>
          )}

          {!props.completed && (
            <img
              className="clickable"
              onClick={completeTodo}
              src="https://img.icons8.com/nolan/30/checkmark.png"
              alt="check"
            />
          )}
          <img
            className="clickable"
            onClick={removeTodo}
            src="https://img.icons8.com/nolan/30/waste.png"
            alt="trashcan"
          />
        </div>
        <div className={`note  ${isSelected ? "selected" : ""}`}>
          <p>{`Task title: ${props.taskName}`}</p>
          <p>{`Place: ${props.location}`}</p>
          <p>{`Note: ${props.note}`}</p>
        </div>
      </li>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (id) => dispatch(completeTodoAction(id)),
    removeTodo: (id) => dispatch(clearSingleTodoAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoEntry);
