import { React } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Technologies from "./components/Technologies";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-black h-full w-full">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/technology/:id" element={<Technologies />} />
        <Route path="/technology/sbms" element={<Technology />} />
        <Route path="/technology/cooling" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
