"use client"
import React, { useState } from 'react'

const LikeButton = ({blogSlug}:{blogSlug:string}) => {
  const [count, setCount] = useState(0);
  
  const handleLikeClickBtn = ()=>{
    setCount((prevLike)=> prevLike + 1)
  }

  return (
    <div>
      <button onClick={handleLikeClickBtn} > Click for Like:{blogSlug} </button>
      <p>Total Like count:{count} </p>
    </div>
  )
}

export default LikeButton
