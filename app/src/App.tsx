import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import LanguageProvider, { LanguageContext } from "./components/LanguageContext";
import Dropdown from "./components/Dropdown";

function App() {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((old) => old + 1);
  };

  const courses = [
    {
      src: "https://croz.net/app/uploads/2025/03/gitops-1.jpg",
      title: "GitOps Fundamentals",
      duration: 2,
      category: "DEVOPS",
    },
    {
      src: "https://croz.net/app/uploads/2025/03/gitops-1.jpg",
      title: "GitOps Fundamentals",
      duration: 2,
      category: "DEVOPS",
    },
  ];

  return (
    <LanguageProvider>
      <div className="container">
        <div className="navBar">
          <Title title="Education" subtitle="Continuous education is one of the crucial factors for success " />
          <LanguagePicker />
        </div>
        <div className="content">
          {courses.map((course) => (
            <Card {...course} key={course.title} />
          ))}
        </div>
        <Button label="Spremi" />
        <Counter counter={counter} incrementCounter={onIncrement} />
        <Counter counter={counter} incrementCounter={onIncrement} />
        <Counter counter={counter} incrementCounter={onIncrement} />

        <Card src="https://croz.net/app/uploads/2025/03/gitops-1.jpg" title="GitOps Fundamentals" duration={2} category="DEVOPS" />
      </div>
    </LanguageProvider>
  );
}

function LanguagePicker() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Dropdown
      value={language}
      onValueChange={setLanguage}
      items={[
        { value: "hr", label: "HR" },
        { value: "en", label: "EN" },
      ]}
    />
  );
}

interface CounterProps {
  counter: number;
  incrementCounter: () => void;
}
function Counter({ counter, incrementCounter }: CounterProps) {
  return <button onClick={incrementCounter}>Click me: {counter}</button>;
}

export default App;
