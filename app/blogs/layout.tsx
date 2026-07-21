import React from 'react'

const BlogsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <h2 className="text-xl"> Blog Layout for specific for blog or inside blog file or folder inside the blog folder </h2>
      {children}
    </div>
  )
}

export default BlogsLayout
