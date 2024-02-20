import React from 'react'
import {acData} from '../data/ac'
import Navber from '../components/Navber'
import {Link} from 'react-router-dom'
const AcPage = () => {
  return (
    <>
    <Navber/>
    <div className='PageSection'>
    {acData.map((item)=>{
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

export default AcPage