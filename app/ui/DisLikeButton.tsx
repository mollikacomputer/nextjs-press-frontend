"use client"
import React, { useState } from 'react'

const DisLikeButton = ({ blogSlug }: { blogSlug: string }) => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
    console.log("Dislike Button click:", blogSlug)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Dislike button click {blogSlug}
      </button>
      <p>Total dislikes: {count}</p>
    </div>
  )
}

export default DisLikeButton

// "use client"
// import React from 'react'

// const DisLikeButton = ({blogSlug}:{blogSlug:string}) => {
//   return <button onClick={()=>{
//     console.log("Dislike Button click:", blogSlug)
//   }} >Dislike button click{blogSlug}</button>
// }

// export default DisLikeButton
