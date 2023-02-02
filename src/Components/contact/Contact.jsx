import React from "react"
import img from "../../assests/cantact1.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
   
      <section className='contact mb'>
        < br></br>
        <Back name='Contactez nous' title="Obtenez de l'aide et un soutien amical" cover={img}  />
        <div className='container'>
        < br></br>
          <form className='shadow'>
            <h4>Remplissez le formulaire</h4> <br />
            <div>
              <input type='text' placeholder='Nom' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Sujet' />
            <textarea cols='30' rows='10'></textarea>
            <button className='btn2'>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact