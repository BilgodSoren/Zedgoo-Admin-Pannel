import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SuperAdminSignIn from './Views/SuperAdminSignIn';
import Sidebar from './Views/Sidebar';
import NavigationLinks from './Views/link';
import EyeDetails from './Views/ViewsComponent/EyesDetails';
import UserManagement from './Views/UserManagement';
import SettingsPage from './Views/Setting';
import { Dashboard } from '@mui/icons-material';
import Profile from './Views/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App/>
    {/* <SettingsPage/> */}
    {/* <SuperAdminSignIn/> */}
    {/* <Sidebar/> */}
    {/* <Dashboard/> */}
    {/* <Profile /> */}
    {/* <UserManagement/> */}
    {/* <EyeDetails/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
