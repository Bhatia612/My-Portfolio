import React from 'react'
import Navbar from './components/Navbar'
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import { useLocation } from 'react-router-dom';



const App = () => {
  const location = useLocation();
  const onBlogPage = location.pathname === "/" || location.hash === "#/";

  return <>
    <main>
      <div className="top"><div className="inner"></div></div>
      <Navbar />
      {onBlogPage ? <div className="cover-bg empty"></div> : null}

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </main>
  </>
}

export default App