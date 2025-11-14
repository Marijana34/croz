import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import LanguageProvider, { LanguageContext } from "./components/LanguageContext";
import Dropdown from "./components/Dropdown";
import { createBrowserRouter, RouterProvider } from "react-router";
import CoursePage from "./features/CoursePage";
import { Outlet } from "react-router";
import { Navigate } from "react-router";
import InputPage from "./features/InputPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        index: true, // child koji se pojavljuje na "/" putanji, da redirecta na njega
        element: <Navigate to="/courses" />,
      },
      {
        path: "courses",
        children: [
          { index: true, element: <CoursePage /> },
          { path: ":id/apply", element: <InputPage /> },
        ],
      },
    ],
  },
]);

function AppContainer() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

function NavBar() {
  return (
    <div className="navBar">
      <Title title="Education" subtitle="Continuous education is one of the crucial factors for success " />
      <LanguagePicker />
    </div>
  );
}

function LanguagePicker() {
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    document.title = language;
  }, [language]);

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
