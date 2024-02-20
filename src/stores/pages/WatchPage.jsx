import React from 'react'
import {watchData} from '../data/watch'
import Navber from '../components/Navber'
const WatchPage = () => {
  return (
    <>
    <Navber/>
    <div className='PageSection'>
    {watchData.map((item)=>{
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

export default WatchPage