import React, { useState } from "react";

const App = () => {
  const [count, setcount] = useState();
  const [Todo, setTodo] = useState([]);

  function submit(e) {
    e.preventDefault();
    const newTodo = {
      id: Todo.length + 1,
      text: count,
    };
    if(count==""){
      console.log("please enter input fields")
    }
    else{
      setTodo([...Todo, newTodo]);
      setcount("");
    }
    
  }

  function del(id) {
    setTodo(Todo.filter((Todo) => Todo.id !== id));
  }

  const colors = ["linear-gradient(to right ,rgb(130, 217, 252), rgb(48, 196, 255))", "linear-gradient(to right ,rgb(68, 233, 95), rgb(0, 199, 33))", "linear-gradient(to right ,rgb(255, 111, 135), rgb(255, 66, 98))", "linear-gradient(to right ,rgb(170, 85, 250), rgb(143, 23, 255))", "linear-gradient(to right ,rgb(246, 255, 124), rgb(242, 255, 56))"];

  return (
    <div className="App">      
      <div className="todo-box" >
        <h1>what's Your Today Plans</h1>
        <form>
          <input
            type="text"
            placeholder="Enter Text"
            value={count}
            onChange={(e) => {
              setcount(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={submit} className="btn">Add Todo</button>
        </form>
        <div className="todolist">
          {Todo.map((todo,index) => {
            const color = colors[index % colors.length];
            return (
              <p key={todo.id} style={{backgroundImage: color}}>
                {todo.text}
                <button onClick={() => del(todo.id)} className="btn2">delete</button>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
