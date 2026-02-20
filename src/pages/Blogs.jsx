import React from 'react'
import Separator from "../components/Separator"
import BlogContainer from "../components/BlogContainer"
import Footer from "../components/Footer"



const Blogs = () => {
  return (
    <div className='blogs'>
      <Separator />
      <BlogContainer />
      <Separator />
      <Footer />

    </div>
  )
}

export default Blogs