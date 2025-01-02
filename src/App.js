import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import UserManagement from './Views/UserManagement';
import BatchManagement from './Views/BatchManagement/Batchmangement'; // Fixed casing for component and folder
import Profile from './Views/Profile';
import Sidebar from './Views/Sidebar'; // Fixed import path
import EyeDetails from './Views/ViewsComponent/EyesDetails'; // Fixed casing for component
import SettingsPage from './Views/Setting'; // Fixed casing for component
import SuperAdminSignIn from './Views/SuperAdminSignIn';
import SuperAdminSignUp from './Views/SuperAdminSignUp';
import ZedgooProfile from './Views/ZedgooProfile';
import NavigationLinks from './Views/link';
import { Logout } from '@mui/icons-material';

function App() {
  return (
    <BrowserRouter>
      {/* Sidebar Component */}
      {/* <Sidebar /> */}
      {/* <Profile/> */}
      
      <NavigationLinks/>
      <Routes>
        <Route path="/" element={<NavigationLinks />} />
        <Route path="Logout/" element={<Logout />} />
        {/* <Route path="/NavigationLinks" element={<NavigationLinks />} /> */}
        <Route path='/Dashboard' element={<Dashboard />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/userManagement" element={<UserManagement />} />
        <Route path="/eyeDetails" element={<EyeDetails />} /> {/* Fixed casing for route */}
        <Route path="/batchManagement" element={<BatchManagement />} /> {/* Fixed casing */}
        <Route path="/setting" element={<SettingsPage />} /> {/* Fixed casing */}
        <Route path="/Logout" element={<Profile />} /> {/* Fixed casing */}
        <Route path="/SuperAdminSignIn" element={<SuperAdminSignIn />} /> {/* Fixed casing */}
        <Route path="/SuperAdminSignUp" element={<SuperAdminSignUp />} /> {/* Fixed casing */}
        <Route path="/ZedgooProfile" element={<ZedgooProfile />} /> {/* Fixed casing */}
        <Route path="/Dashboard" element={<Dashboard />} /> {/* Fixed casing */}
        <Route path="/Profile" element={<Profile />} /> {/* Fixed casing */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
