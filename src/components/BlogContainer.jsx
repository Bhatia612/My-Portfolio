import React from "react";
import { blogs } from "../blogs"; // import the array directly

const BlogCard = ({ title, date }) => (
  <div className="blog-card">
    <div className="blog-card-img"></div>
    <h2 className="blog-card-title">{title}</h2>
    <span className="blog-card-date">Posted on: {date}</span>
  </div>
);

const BlogContainer = ({ maxBlogs }) => {
  const blogsToShow = maxBlogs ? blogs.slice(0, maxBlogs) : blogs;

  return (
    <div className="blog-container-outer">
      <h1>
        Blogs<sup> ({blogs.length})</sup>
      </h1>
      <span className="blog-p">
        <h2>Watch me grow as a dev: learning, failing, coding, repeating - sometimes with style, sometimes with chaos.</h2>
      </span>
      <div className="blog-container-inner">
        <div className="blog-container">
          {blogsToShow.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              date={blog.date}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
