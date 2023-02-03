import React from "react";
import './App.css';
import Navbar from "././Components/Nav/Navbar";
import Hero from "./Components/Hero";
import NewAnnonces from "./Components/NewAnnonces";
import Footer from "./Components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from "./Components/FormInput";
import Featured from "./Components/featured/Featured";
import {BrowserRouter, Router,Routes, Route, Link} from "react-router-dom"
import Home from "./Home";
import Services from "./Services"
import About from "./Components/about/About";
import Recent from "./Components/recent/Recent";
import Contact from "./Components/contact/Contact";
import Login from "./Components/Inscription/Login";

  



function App() {
  return (
  <BrowserRouter>
   <div className="App">
   {/* Navbar */}
  
   <Routes>
   {/* Hero *//*Type des immobiliers*/}
{/*<Route path="/" element={<Home/>} />*/}
   <Route path="Acceuil" element={<Home/>} />
   <Route path="/About" element={<About/>} />
   <Route path="/Services" element={<Services/>} />
   <Route path="/Contact" element={<Contact/>} />
   <Route path="/" element={<Login/>} />
   
   </Routes>
   

   {/* creer des annonces  */}

</div>

</BrowserRouter>

 

)

}

export default App;