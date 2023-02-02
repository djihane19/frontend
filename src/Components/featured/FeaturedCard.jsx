import React from "react"




export const featured = [
    {
      cover: "Services.jpg",
      name: "Vente",
      total: "122 Propriétés",
    },
    {
      cover: "synchroniser",
      name: "Echange",
      total: "155 Propriétés",
    }, 
    {
      cover: "../immobilier.png",
      name: "Location",
      total: "300 Propriétés",
    },
    {
      cover: "../assurance-habitation.png",
      name: "Location pour vacance",
      total: "80 Propriétés",
    },
   
  ]

const FeaturedCard = () => {
     return (
    <>
      <div className='content grid4 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <p className='text-[14px]  pt-5 font-bold'>{items.name}</p>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard