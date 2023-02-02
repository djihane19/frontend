import React from "react"
import img from "./assests/Services.jpg"
import Back from "./Components/common/Back"
import "./Components/featured/featured.css"
import FeaturedCard from "./Components/featured/FeaturedCard"

const Services =() => {
    return(
        <>
         <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>

        <serction className='Services'>
            <div className="container">
                <form action="" className='flex'>
                    <div className="box">
                    <div className="box">
                        <span>Type de l'AI</span>
                        <input type="text" placeholder="Location"/>
                    </div>
                        <span>Wilaya</span>
                        <input type="text" placeholder="Location"/>
                    </div>
                    <div className="box">
                        <span>Commune</span>
                        <input type="text" placeholder="Location"/>
                    </div>
                    <div className='box'>
                        <h4>Advance Filter</h4>
                    </div>
                    <button claaName='btn'>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </serction>
       
        </>
    )
}
export default Services;