import React, { useState } from 'react'
import Navbar from "../components/Navbar" 
import RateLimitedUI from '../components/RateLimitedUI'

const HomePage = () => {
 const [isRateLimited,setRateLimited]= useState(false)
  return <div className='min-h-screen'>
    <Navbar />  
    {isRateLimited && <RateLimitedUI/>}
    </div>
  
}

export default HomePage
