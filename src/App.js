import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import { Toaster } from "react-hot-toast";

function App() {
  document.oncontextmenu = function(element) {
    element.preventDefault();
  }
 

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/blogs' element={<Blog/>} />
        <Route path='/blogs/:id' element={<BlogDetails /> } />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </Router>
  );
}

export default App;