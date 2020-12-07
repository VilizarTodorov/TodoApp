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
          Clear all
        </li>
        <li onClick={clearCompleted} className="option">
          Clear Completed
        </li>
        <li onClick={markAllAsCompleted} className="option">
          Mark All Completed
        </li>
      </ul>
      <i onClick={props.expand} className="fas fa-arrow-left fa-lg menu-arrow"></i>
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
