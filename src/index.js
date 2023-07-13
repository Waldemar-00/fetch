import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
// import getData from "./getData";

function App() {
  const [value, setValue] = useState();
  const [get, setGet] = useState([]);
  useEffect(() => {
    document.title = "useEffect";
  }, []);
  function onWrite(e) {
    setValue(e.target.value);
  }
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      setGet(data);
    });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" value={value} onChange={onWrite} />
      <ul>
        {get.map((it) => (
          <li key={it.id}>{it.name}</li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
