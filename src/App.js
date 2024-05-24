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
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("")
    console.log(toDos)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
