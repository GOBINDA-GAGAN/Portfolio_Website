import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project></Project>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/skills" element={<Skills></Skills>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
