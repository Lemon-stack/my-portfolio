import { lazy, Suspense } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Home from "./components/home";
const Projects = lazy(()=> import('./components/projects'))
const Spinner = lazy(()=>import('./components/Spinner'))
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Hello />} />
        <Route path="/projects" element={<Projects />} />
        
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
