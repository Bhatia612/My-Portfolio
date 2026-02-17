import React from 'react'
import Navbar from './components/Navbar'
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';



const App = () => {
  return <>
    <main>
      <div className="top"><div className="inner"></div></div>
      <Navbar />
      <div className="cover-bg empty"></div>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </main>
  </>
}

export default App