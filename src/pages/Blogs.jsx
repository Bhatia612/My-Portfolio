import React from 'react'
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import Separator from "../components/Separator"
import BlogContainer from "../components/BlogContainer"
import Footer from "../components/Footer"


const Blogs = () => {
  const { "*": slug } = useParams();

  const selectedBlog = blogs.find(
    (blog) => blog.slug === slug
  );
  return (
    <div className='blogs'>
      <Separator />
      {!slug && <BlogContainer />}

      {slug && selectedBlog && <>
        <div className="jump-back"><Link to="/blogs">← Blog</Link></div>
        <div className="single-blog">
          <div className="blog-title">
            <h1>{selectedBlog.title}</h1>
            <p>Posted on: {selectedBlog.date}</p>
          </div>
          <p><selectedBlog.content /></p>
        </div>
      </>}

      {slug && !selectedBlog && <h1>Blog not found</h1>}
      <Separator />
      <Footer />

    </div>
  )
}

export default Blogs;