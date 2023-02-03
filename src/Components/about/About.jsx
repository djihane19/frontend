import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../../assests/AboutA1.jpg"
import imt from "../../assests/aboutA2.jpg"
import "./about.css"
import Navbar from "../Nav/Navbar";

const About = () => {
  return (
    <>
     <Navbar/>
      <section className='about'>
        <br/> <br/>
        <Back name='À propos de nous' title='À propos de nous - Qui sommes-nous ?' cover={img}  />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Histoire de notre agence' subtitle="Découvrez l'histoire de notre entreprise et notre processus de travail" />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>Savoir plus sur nous</button>
          </div>
          <div className='right row'>
            <img src={imt} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About