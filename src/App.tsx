import { useDispatch, useSelector } from "react-redux";

interface Todo {
  name: string;
  id: number;
  isDone: boolean;
}

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addTodo = (name: string) => {
    const todo: Todo = {
      name: name,
      id: Date.now(),
      isDone: false,
    };
    console.log(todo)
    dispatch({ type: "ADD_TODO", payload: todo });
  };
  const deleteTodo = (todo: Todo) => {
    console.log(todo)
    dispatch({ type: "DELETE_TODO", payload: todo.id })
    
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
          {todos.map((todo: Todo) => {
            return (
              <div key={todo.id}>
                {todo.name}{" "}
                <button
                  onClick={() => {
                    deleteTodo(todo);
                  }}
                >Del</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
