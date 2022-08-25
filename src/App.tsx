import { useDispatch, useSelector } from "react-redux";

interface Todo {
  name: string;
  // id: number;
  isDone: boolean;
}

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addTodo = (name: string) => {
    const todo: Todo = {
      name: name,
      //  id: Date.now(),
      isDone: false,
    };
    console.log(todo);
    dispatch({ type: "ADD_TODO", payload: todo });
  };
  const deleteTodo = (index: number) => {
    console.log(index);
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  const toggleTodo = (index: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: index });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "0 auto",
      }}
      className="App"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(e.target.name.value);
        }}
        action=""
      >
        <input name="name" type="text" />
        <button>ДОБАВИТЬ</button>
      </form>

      {todos.length === 0 ? (
        <div>Добавьте задачу</div>
      ) : (
        <div>
          {todos.map((todo: Todo, index: number) => {
            return (
              <div key={index}>
                {todo.name}{" "}
                <button
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  Del
                </button>
                <button
                  onClick={() => {
                    toggleTodo(index);
                  }}
                  
                >
                  Done
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
