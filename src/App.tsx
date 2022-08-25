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
        flexDirection: "column",
        margin: "0 auto",
      }}
      className="App"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.name.value === "") {
            return;
          } else {
            addTodo(e.target.name.value);
          }
        }}
        
      >
        <input name="name" type="text" />
        <button>ДОБАВИТЬ</button>
      </form>

      {todos.length === 0 ? (
        <div>Добавьте задачу</div>
      ) : (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          {todos.map((todo: Todo, index: number) => {
            return (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={index}
              >
                <div style={{ color: todo.isDone ? "green" : "black" }}>
                  {todo.name}
                </div>
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
