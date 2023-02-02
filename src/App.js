import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Login from "./Components/login/Login";
import Signup from "./Components/Signup/Signup";
import Hero from "./Components/Hero";
import NewAnnonces from "./Components/NewAnnonces";
import Footer from "./Components/Footer";
import'bootstrap/dist/css/bootstrap.min.css'
import FormInput from "./Components/FormInput";
import Featured from "./Components/featured/Featured";
import {BrowserRouter, Router,Routes, Route, Link} from "react-router-dom"
import Home from "./Home";
import Services from "./Services"
import About from "./Components/about/About";
import Recent from "./Components/recent/Recent";
import Contact from "./Components/contact/Contact";

  



function App() {
  return (
  <BrowserRouter>
   <div className="App">
   {/* Navbar */}
   <Navbar />
   <Routes>
   {/* Hero *//*Type des immobiliers*/}
   <Route path="/" element={<Home/>} />
   <Route path="Acceuil" element={<Home/>} />
   
   <Route path="/Connexion" element={<Login/>} />
   <Route path="/Inscription" element={<Signup/>} />
   <Route path="/About" element={<About/>} />
   <Route path="/Services" element={<Services/>} />
   <Route path="/Contact" element={<Contact/>} />

   <Route path="/Connextion" element={<Login/>} />
   
   </Routes>
   

   {/* creer des annonces  */}

</div>

</BrowserRouter>

 

)

}

export default App;