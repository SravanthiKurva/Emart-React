import React from 'react'
import {computerData} from '../data/computers'
import Navber from '../components/Navber'
import {Link} from 'react-router-dom'
const ComputerPage = () => {
  return (
    <>
    <Navber/>
    <div className='PageSection'>
    {computerData.map((item)=>{
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

export default ComputerPage;