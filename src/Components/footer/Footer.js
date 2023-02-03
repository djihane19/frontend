import React from "react"
import "./footer.css"
import logo from "../../assests/hose.png";

export const footer = [
  {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
  },
 
 
  {
    title: "COMPANY",
    text: [{ list: "About" }, { list: "Affiliate" }, { list: "Login" }],
  },
]
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <div className="shrink-0 relative">
        <div className="-my-[0.7rem] ">
            <img src={logo} className="w-32 " />
        </div>
       
        </div>
              <h2>MOBILIER DZ</h2>
              <p>L'utilisation de ce site Internet implique l'acceptation des Conditions générales et du règlement sur le Respect de la vie privée.
</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Immobilier dz. Designd By DFLS.</span>
      </div>
    </>
  )
}

export default Footer
