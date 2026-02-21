import React from "react";
import { blogs } from "../data/blogs";

import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, date, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="blog-card"
      role="button"
      tabIndex={0}
      onClick={() => navigate(link)}
      onKeyDown={(e) => e.key === "Enter" && navigate(link)}
    >
      <div className="blog-card-img"></div>
      <h2 className="blog-card-title">{title}</h2>
      <span className="blog-card-date">Posted on: {date}</span>
    </div>
  );
};

const BlogContainer = ({ maxBlogs }) => {
  const blogsToShow = maxBlogs ? blogs.slice(0, maxBlogs) : blogs;

  return (
    <div className="blog-container-outer">
      <h1>
        Blogs<sup> ({blogs.length})</sup>
      </h1>
      <div className="blog-head">
        <h2>Watch me grow as a dev: learning, failing, coding, repeating - sometimes with style, sometimes with chaos.</h2>
      </div>
      <div className="blog-container-inner">
        <div className="blog-container">
          {blogsToShow.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              title={blog.title}
              date={blog.date}
              link={`/blogs/${blog.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
