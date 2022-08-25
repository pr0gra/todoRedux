import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const defaultState = {
  todos: [],
  isDone: false,
};

const reducer = (state = defaultState, action:any) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
         if(index !== action.payload){
          return todo
         };
        }),
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index === action.payload) {
            return { name: item.name, isDone: !item.isDone };
          } else {
            return item;
          }
        }),
      };
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
