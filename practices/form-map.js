import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => { // without onSubmit, button within form will empty the input
    event.preventDefault()
    if (toDo === "") {
      return;
    }
    // cannot directly modify the state, so need to use "function" to modify the state
    // in order to add, need to create new array and fill in values there
    // 1. send the data itself 2. send the function
    // 2 takes current data as argument
    
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("")
    // { } used in Javascript
    // map() puts function inside (), and return new array after running through function
  }
  return (
    <div>
      <h1>My ToDos</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
    </div>
  );
}

export default App;
