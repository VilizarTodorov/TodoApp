import * as actionTypes from "./actionTypes";

const INITIAL_STATE = [];

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { id: action.payload.id, ...action.payload.content }];

    case actionTypes.COMPLETE_TODO:
      return state.map((todo) => (todo.id === action.payload.id ? (todo.completed = !todo.completed) : todo));

    default:
      return state;
  }
};

export default rootReducer;
