// src/blogs/index.js
import FirstBlog from './2026-02-19-From-Learning-to-Building.mdx';
import Blogtemp from './2026-02-19-blog-temp.mdx';


export const blogs = [

    {
        slug: "2026-02-19-From-Learning-to-Building",
        title: "From Learning to Building",
        date: "2026-02-19",
        description: "Turning years of learning into action - my first real project!",
        content: FirstBlog,

    },
    { slug: "blog-temp", title: "Blog Title Here", date: "2026-02-19", description: "Short description", content: Blogtemp },
    { slug: "blog-temp", title: "Blog Title Here", date: "2026-02-20", description: "Short description", content: Blogtemp },
    { slug: "blog-temp", title: "Blog Title Here", date: "2026-02-21", description: "Short description", content: Blogtemp },


];
