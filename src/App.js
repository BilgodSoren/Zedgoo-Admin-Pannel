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
        <Route path="/" element={<Profile />} />
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
