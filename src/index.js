import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import useGetData from "./useGetData";

function App() {
  const [value, setValue] = useState();
  useGetData().then((res) =>
    res.map((item) => {
      return console.log(item.name);
    })
  );

  useEffect(() => {
    document.title = "useEffect";
  }, []);
  function onWrite(e) {
    setValue(e.target.value);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" value={value} onChange={onWrite} />
      <ul></ul>
    </div>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
