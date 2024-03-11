import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routess/Home";
import About from "./Routess/About";
import Contact from "./Routess/Contact";
import Service from "./Routess/Service";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
