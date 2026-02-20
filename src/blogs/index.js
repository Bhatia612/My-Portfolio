// src/blogs/index.js
import FirstBlog from './2026-02-19-first-blog.mdx';
import SecondBlog from './2026-02-19-second-blog.mdx';
import Blogtemp from './2026-02-19-blog-temp.mdx';


export const blogs = [
    {
        title: "From Learning to Building",
        date: "2026-02-19",
        description: "Turning years of learning into action - my first real project!",
        component: FirstBlog,
        link: "/blog/1",
    },
    {
        title: "Why Building Small Projects Beats Endless Tutorials",
        date: "2026-02-19",
        description: "Lessons from doing over watching",
        component: SecondBlog,
        link: "/blog/1",
    },
    { title: "Blog Title Here", date: "2026-02-19", description: "Short description", component: Blogtemp, link: "2026-02-19-blog1" },
    { title: "Blog Title Here", date: "2026-02-20", description: "Short description", component: Blogtemp, link: "2026-02-20-blog2" },
    { title: "Blog Title Here", date: "2026-02-21", description: "Short description", component: Blogtemp, link: "2026-02-21-blog3" },


];
