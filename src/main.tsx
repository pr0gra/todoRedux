import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const defaultState = {
  todos: [],
  isDone:false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return { ...state, todos: state.todos.filter(todo => {todo.id === action.payload}) };

    case "TOGGLE_TODO":
      return { ...state, isDone: !state.isDone}
    default:
      return state;
  }
};

const store = createStore(reducer);
 
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
