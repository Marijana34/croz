import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="navBar">
        <Title title="Education" subtitle="Continuous education is one of the crucial factors for success " />
      </div>
      <div className="content"></div>
      <Button label="Spremi" />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((oldValue) => oldValue + 1);
  };

  return <button onClick={onClick}>Click me: {counter}</button>;
}
export default App;
