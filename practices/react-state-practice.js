import {useState, useEffect} from "react"

function App() {
  // In development mode React renders everything twice!
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState("")

  const onClick = () => setCounter((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)

  console.log("I run all the time")

  useEffect(() => { // only call once and does not re-render
    console.log("CALL THE API...")
  }, [])

  useEffect(() => { // run everytime keyword changes
    if (keyword != "" && keyword.length > 4) {
    console.log("I run when keyword changes")
    }
  }, [keyword])

  useEffect(() => { // run everytime keyword changes
    console.log("I run when counter changes")

  }, [counter])

  useEffect(() => { // run everytime keyword changes
    console.log("I run when keyword and counter changes")

  }, [keyword, counter])

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
