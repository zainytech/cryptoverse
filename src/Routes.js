import React from 'react';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, Cryptodetails } from "./components";
import "./App.css"

function RouteConfig() {
  return <>
	<div>
    <BrowserRouter>
    <div className="app">
      <div className="navbar">
         <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className='routes'>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Routes>
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          </Routes>
          <Routes>
            <Route path="/crypto/:coinid" element={<Cryptodetails />} />
          </Routes>
          <Routes>
            <Route path="/exchanges" element={<Exchanges />} />
          </Routes>
          <Routes>
            <Route path="/news" element={<News />} />
          </Routes>
        
          </div>
        </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
        <space>
          <Link to="/">Home</Link>
          <Link to="/exchange">exchange</Link>
          <Link to="/news">News</Link>
        </space>
      </div>
    </div>
    </div>
    </BrowserRouter>    
	</div>
  </>
}
export default RouteConfig;