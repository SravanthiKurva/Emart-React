import React from 'react'
import {womanData} from '../data/woman'
const WomanDresses = () => {
  const firstFiveImages = womanData.slice(0,5)
  return (
    <>
    <div className="protitle"><h2>Woman Dresses</h2></div>

<div className='proSection'>
      {
        firstFiveImages.map((item)=>{
          return(
            <div className='imgBox'>
              <img className="proImage" src={item.image} alt="wd"/>
            </div>
          )
        })
      }

    </div>
    </>
  )
}
export default WomanDresses


  


 
