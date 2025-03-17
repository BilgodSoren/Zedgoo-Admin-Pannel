import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from './Views/Universal/Sidebar';
import Profile from './Views/Profiles/Profile';
import UserSearch from './Views/UserManagement/UserSearch';
import SuperAdminSignUp from './Views/Universal/SuperAdminSignUp';
import SuperAdminSignIn from './Views/Universal/SuperAdminSignIn';
import CreateProfile from './Views/Universal/CreateProfile';
import BatchManagement from './Views/BatchManagement/Batchmangement';
import BatchPeople from './Views/BatchManagement/BatchPeople';
import BatchAddStudent from './Views/BatchManagement/BatchAddStudent';
import BatchAddTrainer from './Views/BatchManagement/BatchAddTrainer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    {/* <UserSearch/> */}
    <App/>
    {/* <BatchAddStudent/> */}
    {/* <BatchAddTrainer /> */}
    {/* <CreateProfile/> */}
    {/* <Profile/> */}
    {/* <BatchManagement/> */}
    {/* <ZedgooProfile/> */}
    {/* <AddStudentDialog/> */}
    {/* <AddStudentDialog/> */}
    {/* <SuperAdminSignIn/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
