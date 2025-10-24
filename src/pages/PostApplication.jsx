import React from 'react'
import {useDispatch,useSelector} from "react-redux"

const PostApplication = () => {
  const {singleJob} = useSelector((state)=> state.jobs);
  const {isAuthenticated, user} = useSelector((state)=> state.user);
  return (
    <div>
      
    </div>
  )
}

export default PostApplication
