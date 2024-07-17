import { lazy } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Home from "./components/home";
const Projects = lazy(()=> import('./components/projects'))
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Hello />} />
        <Route path="/projects" element={<Projects />} />
        
      </Route>
    </Routes>
  );
}

export default App;
