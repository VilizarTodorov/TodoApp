import * as actionTypes from "./actionTypes";

let nextTodoID = 0;

const addTodoAction = (content) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: ++nextTodoID,
      content,
    },
  };
};

const completeTodoAction = (id) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    payload: {
      id,
    },
  };
};

const clearAllAction = () => {
  return {
    type: actionTypes.CLEAR_ALL,
  };
};

const clearCompletedAction = () => {
  return {
    type: actionTypes.CLEAR_COMPLETED,
  };
};

const clearSingleTodoAction = (id) => {
  return {
    type: actionTypes.CLEAR_SINGLE_TODO,
    payload: {
      id,
    },
  };
};

const markAllAsCompletedAction = () => {
  return {
    type: actionTypes.MARK_ALL_AS_COMPLETED,
  };
};

export { addTodoAction, completeTodoAction, clearAllAction, clearCompletedAction, clearSingleTodoAction, markAllAsCompletedAction };
