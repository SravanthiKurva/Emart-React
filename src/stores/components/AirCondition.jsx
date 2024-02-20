import React from 'react'
import {acData} from '../data/ac'

const AirCondition = () => {
  const firstFiveImages = acData.slice(0,5)
  return (
    <>
    <div className="protitle"><h2>Air Conditioner</h2></div>
    

<div className='proSection'>
      {
        firstFiveImages.map((item)=>{
          return(
            <div className='imgBox'>
              <img className="proImage" src={item.image} alt="mobile"/>
            </div>
          )
        })
      }
    </div>
</>
  )
}

export default AirCondition


