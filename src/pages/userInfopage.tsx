import React from 'react'
import { useAppSelector } from '../redux/hooks'

const UserInfoPage = () => {
    const info =useAppSelector((state)=>state.form)
  return (
    <div>
    <h1>this is info page</h1> 
    <div>
            {
                info.names.map((data,index)=>(
                    <ul key={index}>
                        <li>{data.text}</li>
                    </ul>
                ))
            }
          </div>
    </div>
  )
}

export default UserInfoPage
