import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
// import getData from "./getData";

function App() {
  const [value, setValue] = useState("");
  const [get, setGet] = useState([]);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  useEffect(() => {
    document.title = "useEffect";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGet(data);
      });
    document.querySelector("button").addEventListener("click", () => {
      alert("Clock!");
    });
    return document.querySelector("button").removeEventListener("click", () => {
      alert("Clock!");
    });
  }, [url]);
  function onWrite(e) {
    console.log("RENDER");
    setValue(e.target.value);
  }
  // function onHandlerClick() {
  //     alert('Click!')
  //   }  onClick={onHandlerClick}
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" value={value} onChange={onWrite} />
      <ul>
        {get.map((it) => (
          <li key={it.id}>{it.name}</li>
        ))}
      </ul>
      <button>Handler of Clicks</button>
    </div>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
