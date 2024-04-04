import React from 'react'
import { useAppSelector } from '../redux/hooks'

const Mycomponent = () => {
    const val= useAppSelector((state)=>state.cart)
  return (
    <div>
      <p>{val}</p>
    </div>
  )
}

export default Mycomponent
