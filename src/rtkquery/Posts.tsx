import React from 'react'
import { useGetPostsQuery } from '../redux/api/api'
import PostCard from './PostCard'
 
const Posts = () => {
    const {isLoading,isError,data,isSuccess}= useGetPostsQuery("")
    console.log(isError,isLoading,data)
  return (
    <div>
        {
            data?.map((data,index)=>(
                <PostCard key={index} post ={data}/>
            ))
        }
     
    </div>
  )
}

export default Posts
