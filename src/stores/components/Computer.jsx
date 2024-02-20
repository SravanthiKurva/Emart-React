import React from 'react'
import {computerData} from '../data/computers'

const Computer = () => {
  const firstFiveImages = computerData.slice(0,5)
  return (
<>
<div className="protitle">Computers</div>

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

export default Computer