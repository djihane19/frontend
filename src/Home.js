import React from "react";
import Hero from "./Components/Hero";
import NewAnnonces from "./Components/NewAnnonces";
import FormInput from "./Components/FormInput";
import Featured from "./Components/featured/Featured";
import Footer from "./Components/footer/Footer";
import {BrowserRouter, Router, Route, Link} from "react-router-dom"
import Recent from "./Components/recent/Recent";

  



function Home() {
  return (
   <div className="Home">
   
      
      
        {/* Hero */}
        <Hero/>
        {/*Type des immobiliers*/}
        <Featured/>
     
        <Recent />
        <Footer />
    
       

        {/* creer des annonces  */}
    
    </div>
   
   

      
   
  )

}

export default Home;