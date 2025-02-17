import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import SettingsPage from './Setting';
import SuperAdminSignIn from './SuperAdminSignIn';
import HelpPage from './Help';

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleButtonSelect = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <Box sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', width: '12%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h4' mt={1} color={'white'} sx={{ textAlign: 'center' }}>Zedgoo</Typography>

      {/* sidebar buttons */}
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
        <Box borderTop={'1px solid white'} mt={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '16vh',
          width: '100%',
        }}>
          <Button 
            component={NavLink} 
            to="/Profile" 
            style={{ marginRight: 10, fontSize: '13px', textAlign: 'center' }}
            onClick={() => handleButtonSelect('dashboard')}
            sx={{
              backgroundColor: selectedButton === 'dashboard' ? 'white' : 'rgba(42, 41, 39, 1)',
              color: selectedButton === 'dashboard' ? 'black' : 'white',
            }}
          >
            DASHBOARD
          </Button>
          <Button 
            component={NavLink} 
            to="/userManagement" 
            style={{ marginRight: 10, fontSize: '13px', textAlign: 'center' }}
            onClick={() => handleButtonSelect('userManagement')}
            sx={{
              backgroundColor: selectedButton === 'userManagement' ? 'white' : 'rgba(42, 41, 39, 1)',
              color: selectedButton === 'userManagement' ? 'black' : 'white',
            }}
          >
            USER MANAGEMENT
          </Button>
          <Button 
            component={NavLink} 
            to="/batchManagement" 
            style={{ fontSize: '13px', textAlign: 'center' }}
            onClick={() => handleButtonSelect('batchManagement')}
            sx={{
              backgroundColor: selectedButton === 'batchManagement' ? 'white' : 'rgba(42, 41, 39, 1)',
              color: selectedButton === 'batchManagement' ? 'black' : 'white',
            }}
          >
            BATCH MANAGEMENT
          </Button>
        </Box>

        {/* bottom buttons */}
        <Box mt={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '16vh',
          width: '100%',
        }}>
          <Button 
            component={NavLink} 
            to="/SuperAdminSignIn" 
            style={{ marginRight: 10, fontSize: '13px', textAlign: 'center', marginTop: '5px' }}
            onClick={() => handleButtonSelect('logout')}
            sx={{
              backgroundColor: selectedButton === 'logout' ? 'white' : 'rgba(42, 41, 39, 1)',
              color: selectedButton === 'logout' ? 'black' : 'white',
            }}
          >
            LOG OUT
          </Button>
          <Button 
            component={NavLink} 
            to="/Setting"
            style={{ marginRight: 10, fontSize: '13px', textAlign: 'center', marginTop: '5px' }}
            onClick={() => handleButtonSelect('settings')}
            sx={{
              backgroundColor: selectedButton === 'settings' ? 'white' : 'rgba(42, 41, 39, 1)',
              color: selectedButton === 'settings' ? 'black' : 'white',
            }}
          >
            SETTINGS
          </Button>
          <Button 
            component={NavLink} 
            to="/Help" 
            sx={{ fontSize: '13px', textAlign: 'center' }}
            onClick={() => handleButtonSelect('help')}
            style={{
              backgroundColor: selectedButton === 'help' ? 'white' : 'rgba(42, 41, 39, 1)',
              color: selectedButton === 'help' ? 'black' : 'white',
            }}
          >
            HELP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
