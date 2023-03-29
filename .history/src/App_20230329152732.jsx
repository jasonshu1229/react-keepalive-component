import React from "react";
import { Routes, Link, Route, Navigate } from 'react-router-dom';

import Home from "./components/Home";
import UserList from "./components/UserList";
import UserAdd from './components/UserAdd';

import { KeepAliveProiver, withKeepAlive } from 'keepalive-react-component';

const KeepAliveHome = withKeepAlive(Home, { cacheId: 'Home' });
const KeepAliveUserList = withKeepAlive(UserList, { cacheId: 'UserList', scroll: true });
const KeepAliveUserAdd = withKeepAlive(UserAdd, { cacheId: 'UserAdd' });

function App() {
  return (
    <>
      <KeepAiveProiver>
        <div className="nav">
          <Link to="/">首页</Link>
          <Link to="/list">用户列表</Link>
          <Link to="/add">添加用户</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<KeepAliveHome />} />
            <Route path="/list" element={<KeepAliveUserList />} />
            <Route path="/add" element={<KeepAliveUserAdd /> } />
          </Routes>
        </div>
      </KeepAiveProiver>
    </>
  )
}

export default App;