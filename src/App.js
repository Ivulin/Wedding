import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from "./hooks/useToken";
import Menu from './components/menu';
import tabs from './asset/resource/tabList';
import Content from './components/content';
import Login from './components/login';

import './App.css';

const App = () => {
  const [loginCounter, setLoginCounter] = useState(0);
  const [token, setToken] = useToken();
  const [allowedTabs, setAllowedTabs] = useState([]);

  useEffect(() => {
    setAllowedTabs(tabs.filter(({ tabToken }) => tabToken.indexOf(token) > -1));
  }, [token]);

  return (
    <div className="my-container">
      <BrowserRouter>
        <Menu tabList={allowedTabs} />
        <Routes>
          {
            allowedTabs.map(({ id, link, tabName }) => <Route key={"link_" + id} path={id === 0 ? "/" : '/' + link} element={<Content tabId={id} tabName={tabName} tabLink={link} />} />)
          }
          <Route key={"link_9"} path="*" element={<Content tabId={0} tabName={''} tabLink={''} />} />
        </Routes>
        {
          (token === undefined || token === null || allowedTabs.length === 0) ? <Login setToken={setToken} isError={loginCounter > 0 && allowedTabs.length === 0} setLoginCounter={setLoginCounter} /> : null
        }
      </BrowserRouter>
    </div>
  );
};

export default App;
