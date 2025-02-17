import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Dashboard from './Views/Universal/Dashboard';
import UserManagement from './Views/UserManagement/UserManagement';
import BatchManagement from './Views/BatchManagement/Batchmangement';
import Profile from './Views/Universal/Profile';
import Sidebar from './Views/Universal/Sidebar';
import EyeDetails from './Views/UserManagement/UserEyesDetails';
import SettingsPage from './Views/Universal/Setting';
import SuperAdminSignIn from './Views/Universal/SuperAdminSignIn';
import SuperAdminSignUp from './Views/Universal/SuperAdminSignUp';
import ZedgooProfile from './Views/Universal/ZedgooProfile';
import NavigationLinks from './Views/Universal/link';
import EmptyDetails from './Views/UserManagement/UserEmptyDetails';
import HelpPage from './Views/Universal/Help';

function AppContent() {
  const location = useLocation(); // ✅ useLocation() is safe here

  const showNavigationLinks = [
    '/userManagement',
    '/batchManagement',
    '/Setting',
    '/Help'
  ].includes(location.pathname);

  return (
    <>
      {showNavigationLinks && <NavigationLinks />}
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<EmptyDetails />} />
        <Route path="/EmptyDetails" element={<EmptyDetails />} />
        <Route path="/userManagement" element={<UserManagement />} />
        <Route path="/eyeDetails" element={<EyeDetails />} />
        <Route path="/batchManagement" element={<BatchManagement />} />
        <Route path="/Setting" element={<SettingsPage />} />
        <Route path="/SuperAdminSignIn" element={<SuperAdminSignIn />} />
        <Route path="/SuperAdminSignUp" element={<SuperAdminSignUp />} />
        <Route path="/ZedgooProfile" element={<ZedgooProfile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Help" element={<HelpPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
     <AppContent/>
    </BrowserRouter>
  );
}

export default App;
