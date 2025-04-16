import * as React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SidebarTheme from '../Themes/UniversalThemes/SidebarTheme';
import {ThemeProvider} from '@mui/material';

const Sidebar = () => {
  // const theme = useTheme();
  const [selectedButton, setSelectedButton] = React.useState(null);
  // const SidebarTheme = SidebarTheme(theme, selectedButton);

  const handleButtonSelect = (buttonId) => {
    setSelectedButton(buttonId);


    
  };

  return (
    <ThemeProvider theme={SidebarTheme}>


   
    <Box sx={SidebarTheme.sidebarContainer}>
      <Typography variant='h4' mt={1} color={'white'} sx={SidebarTheme.title}>Zedgoo</Typography>
      <Typography mt={3} ml={3} color={'rgba(123, 123, 123, 1)'} sx={SidebarTheme.mainMenuText}>MAIN MENU</Typography>

      {/* Sidebar buttons */}
      <Box sx={SidebarTheme.menuContainer}>
        <Box sx={SidebarTheme.topButtonsContainer}>
          <Button component={NavLink} to="/sidebar" sx={SidebarTheme.button('dashboard')} onClick={() => handleButtonSelect('dashboard')}>
            DASHBOARD
          </Button>
          <Button component={NavLink} to="/userManagement" sx={SidebarTheme.button('userManagement')} onClick={() => handleButtonSelect('userManagement')}>
            USER MANAGEMENT
          </Button>
          <Button component={NavLink} to="/batchManagement" sx={SidebarTheme.button('batchManagement')} onClick={() => handleButtonSelect('batchManagement')}>
            BATCH MANAGEMENT
          </Button>
        </Box>

        {/* Bottom buttons */}
        <Box sx={SidebarTheme.bottomButtonsContainer}>
          <Button component={NavLink} to="/SuperAdminSignIn" sx={SidebarTheme.button('logout')} onClick={() => handleButtonSelect('logout')}>
            LOG OUT
          </Button>
          <Button component={NavLink} to="/Setting" sx={SidebarTheme.button('settings')} onClick={() => handleButtonSelect('settings')}>
            SETTING
          </Button>
          <Button component={NavLink} to="/Help" sx={SidebarTheme.button('help')} onClick={() => handleButtonSelect('help')}>
            HELP
          </Button>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
