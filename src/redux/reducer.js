import * as actionTypes from "./actionTypes";

const INITIAL_STATE = [];

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { id: action.payload.id, ...action.payload.content }];

    case actionTypes.COMPLETE_TODO:
      return state.map((todo) => (todo.id === action.payload.id ? (todo.completed = !todo.completed) : todo));

    case actionTypes.CLEAR_ALL:
      return INITIAL_STATE;

    case actionTypes.CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed === false);

    case actionTypes.MARK_ALL_AS_COMPLETED:
      return state.map((todo) => {
        todo.completed = true;
        return todo;
      });

    default:
      return state;
  }
};

export default rootReducer;
