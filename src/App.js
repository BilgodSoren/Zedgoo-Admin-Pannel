import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dashboard from "./Views/Universal/Dashboard";
import UserManagement from "./Views/UserManagement/UserManagement";
// import BatchManagement from "./Views/BatchManagement/BatchManagement"; // Fixed typo
import BatchManagement from "./Views/BatchManagement/Batchmangement";
import Profile from "./Views/Profiles/Profile";
import Sidebar from "./Views/Universal/Sidebar";
// import SettingsPage from "./Views/Universal/SettingsPage"; // Ensure consistent naming

import SuperAdminSignIn from "./Views/Universal/SuperAdminSignIn";
import SuperAdminSignUp from "./Views/Universal/SuperAdminSignUp";
import CreateProfile from "./Views/Universal/CreateProfile";
import UserAddNew from "./Views/UserManagement/UserAddNew";
import HelpPage from "./Views/Universal/Help";
import SettingsPage from "./Views/Universal/Setting";
import StudentSignUp from "./Views/Student/SignIn/StudentSignUp";
import Course from "./Views/Universal/NewSidebar";
import UserAppBar from "./Views/UserManagement/UserAppBar";



// students routing 

import Dashboard1 from "./Views/Student/Dashboards/DashBoard1";
import Dashboard2 from "./Views/Student/Dashboards/DashBoard2";
import Final from "./Views/Student/Finalpages/final1";
import Landing from "./Views/Student/Signup/Landing";
import Signin from "./Views/Student/Signup/Signin";

import InputCompo from "./Views/Student/Components/InputCompo";
import MainSignup from "./Views/Student/Signup/MainSignup";

function AppContent() {
  const location = useLocation();

  // Improved logic for showing the Sidebar
  const showNavigationLinks = ["/userManagement", "/batchManagement", "/Setting", "/Help"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {showNavigationLinks && <Sidebar />}
      <Routes>
        <Route path="/" element={<MainSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/logout" element={<UserAddNew />} />
        <Route path="/emptyDetails" element={<UserAddNew />} />
        <Route path="/userManagement" element={<UserManagement />} />
        <Route path="/batchManagement" element={<BatchManagement />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/superAdminSignIn" element={<SuperAdminSignIn />} />
        <Route path="/superAdminSignUp" element={<SuperAdminSignUp />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<HelpPage />} />




      {/* Students  */}

        <Route index element = {<MainSignup/>}/>
      <Route path='/Dashboard1' element={<Dashboard1/>}/>
      <Route path='/dashboard2' element={<Dashboard2/>}/>
      <Route path='/final1' element={<Final/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
