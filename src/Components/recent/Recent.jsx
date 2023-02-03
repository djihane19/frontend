import React from "react"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
        <p className='text-[28px]  pt-10 font-bold'>Immobiliers Recents </p>
        <p className='text-blue-600 text-[15px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <RecentCard />
        <br/><br/>
        </div>
      </section>
    </>
  )
}
   
export default Recent