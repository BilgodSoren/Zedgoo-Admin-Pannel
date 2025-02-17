import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from './Views/Universal/Sidebar';
import Profile from './Views/Universal/Profile';
import UserSearch from './Views/UserManagement/UserSearch';
import { useLocation } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
      {/* <Sidebar /> */}
      {/* <Sidebar/> */}
      {/* <Profile/> */}
      <App/>
      {/* <UserSearch/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
