import React from "react";
import { connect } from "react-redux";
import { clearAllAction, clearCompletedAction, markAllAsCompletedAction } from "../../redux/actions";
import "./styles.css";

const TodoMenu = (props) => {
  const clearAll = () => {
    props.clearAll();
    props.expand();
  };
  const clearCompleted = () => {
    props.clearCompleted();
    props.expand();
  };
  const markAllAsCompleted = () => {
    props.markAllAsCompleted();
    props.expand();
  };

  return (
    <aside className={`todo-menu ${props.isActive ? "menu-active" : ""}`}>
      <ul className="menu-options">
        <li onClick={clearAll} className="option">
          <p className="clickable">Clear all</p>
        </li>
        <li onClick={clearCompleted} className="option">
          <p className="clickable">Clear Completed</p>
        </li>
        <li onClick={markAllAsCompleted} className="option">
          <p className="clickable">Mark All Completed</p>
        </li>
      </ul>
      <i onClick={props.expand} className="fas fa-arrow-left fa-lg menu-arrow clickable"></i>
    </aside>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAll: () => dispatch(clearAllAction()),
    clearCompleted: () => dispatch(clearCompletedAction()),
    markAllAsCompleted: () => dispatch(markAllAsCompletedAction()),
  };
};

export default connect(null, mapDispatchToProps)(TodoMenu);
