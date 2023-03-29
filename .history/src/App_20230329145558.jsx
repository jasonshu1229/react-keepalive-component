import React from "react";
import { Routes, Link, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="nav">
        <Link to="/">首页</Link>
        <Link to="/list">用户列表</Link>
        <Link to="/add">添加用户</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;