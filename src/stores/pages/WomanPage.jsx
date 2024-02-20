import React from 'react'
import {womanData} from '../data/woman'
import Navber from '../components/Navber'
const WomanPage = () => {
  return (
    <>
    <Navber/>
    <div className='PageSection'>
    {womanData.map((item)=>{
 return (
  <div>
    <div className='pageImg'>
      <img src={item.image} alt="/"/>
    </div>
    <div className="proModel">
      {item.company}, {item.model}
    </div>
  </div>
 )
})}
    </div>
    </>
  )
}

export default WomanPage