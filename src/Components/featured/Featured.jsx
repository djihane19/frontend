import React from "react"
import "./featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
        <p className='text-[28px]  pt-10 font-bold'> Featured Property Types </p>
        <p className='text-blue-600 text-[15px]'>Find All Type of Property</p>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}


export default Featured