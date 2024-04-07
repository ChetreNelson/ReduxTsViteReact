import React from 'react'
import { useAppSelector } from '../redux/hooks'
import Navbar from '../util/navbar'

const home = () => {
    
  return (
    <div className='w-full'>
        <div>
        <Navbar/>

        </div>
       <p>this is home page</p>
    </div>
  )
}

export default home
