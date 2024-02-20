import React from 'react'
import {furnitureData} from '../data/furniture'
import Navber from '../components/Navber'
const FurniturePage = () => {
  return (
    <>
    <Navber/>
    <div className='PageSection'>
    {furnitureData.map((item)=>{
 return (
  <div>
    <div className='pageImg'>
      <img src={item.image} alt="/"/>
    </div>
    <div className="proModel">
      {item.brand}, {item.model}
    </div>
  </div>
 )
})}
    </div>
    </>
  )
}

export default FurniturePage