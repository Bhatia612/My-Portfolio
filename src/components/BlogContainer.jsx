
import React from "react";

const BlogCard = ({ title, date, link }) => (
  <div className="blog-card">
    <div className="blog-card-img empty"></div>
    <h2 className="blog-card-title">{title}</h2>
    <span className="blog-card-date">Posted on: {date}</span>

  </div>
);

// Blog data defined inside the file
const blogs = [
  {
    title: "Turning Knowledge Into Code That Matters",
    date: "Feb 18, 2026",
    link: "/blog/1",
  },
  {
    title: "Understanding React State Properly",
    date: "Feb 12, 2026",
    link: "/blog/2",
  },
  {
    title: "Node.js Debugging Tips",
    date: "Feb 5, 2026",
    link: "/blog/3",
  },
];

const BlogContainer = ({ maxBlogs }) => {
  // Slice array if maxBlogs is provided
  const blogsToShow = maxBlogs ? blogs.slice(0, maxBlogs) : blogs;

  return (
    <div className="blog-container-outer">
      <h1>Blogs<sup> ({blogs.length})</sup></h1>
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
