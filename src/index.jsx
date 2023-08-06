import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from "./hooks/useToken";
import Menu from './components/menu';
import tabs from './asset/resource/tabList';
import Content from './components/content';
import Login from './components/login';

import './style.css';

const App = () => {
  const [token, setToken] = useToken();
  const [allowedTabs, setAllowedTabs] = useState([]);

  useEffect(() => {
    setAllowedTabs(tabs.filter(({ tabToken }) => tabToken.indexOf(token)>-1));
  }, [token]);

  return (
    <div className="my-container">
      <BrowserRouter>
        <Menu tabList={allowedTabs} />
        <Routes>
          {
            allowedTabs.map(({ id, link, tabName }) => <Route key={"link_" + id} path={id == 0 ? "/" : '/' + link} element={<Content tabId={id} tabName={tabName} tabLink={link} />} />)
          }
          <Route key={"link_9"} path="*" element={<Content tabId={0} tabName={''} tabLink={''} />} />
        </Routes>
        {
          (token === undefined || token === null) ? <Login setToken={setToken} /> : null
        }
      </BrowserRouter>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
