import React from 'react';
import { 
  Box, AppBar, Typography, IconButton, Switch, Divider, Button, 
  FormControl, InputLabel, Select, MenuItem, CssBaseline 
} from '@mui/material';
import { Notifications, Brightness4, AccountCircle } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SettingsPage = () => {
  const [themeMode, setThemeMode] = React.useState('light');
  const [notifications, setNotifications] = React.useState(true);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      background: {
        default: themeMode === 'dark' ? '#121212' : '#fafafa',
        paper: themeMode === 'dark' ? '#1e1e1e' : '#ffffff'
      },
      text: {
        primary: themeMode === 'dark' ? '#ffffff' : '#000000'
      }
    }
  });

  const handleThemeChange = (event) => {
    setThemeMode(event.target.value);
  };

  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" ml={35}>
        {/* Main Content Area */}
        <Box sx={{ width: '78%', display: 'flex', flexDirection: 'column', position: 'absolute', top: '40px' }}>
          <AppBar
            position="static"
            sx={{
              height: '6vh',
              backgroundColor: theme.palette.background.paper,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 20px',
              boxShadow: 3
            }}
          >
            <IconButton sx={{ color: theme.palette.text.primary }}>
              <Notifications />
            </IconButton>
            <Typography variant="h5" sx={{ color: theme.palette.text.primary, fontWeight: '700' }}>
              Settings
            </Typography>
          </AppBar>

          {/* Settings Content */}
          <Box
            sx={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              backgroundColor: theme.palette.background.default,
              boxShadow: 3,
              color: theme.palette.text.primary,
              minHeight: '90vh'
            }}
          >
            {/* Account Settings */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: '600' }}>
                Account Settings
              </Typography>
              <Divider sx={{ marginY: 1 }} />
              <Button variant="contained" startIcon={<AccountCircle />} sx={{ marginTop: 1 }}>
                Manage Account
              </Button>
            </Box>

            {/* Notification Preferences */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: '600' }}>
                Notification Preferences
              </Typography>
              <Divider sx={{ marginY: 1 }} />
              <Box display="flex" alignItems="center" gap={2}>
                <Typography>Enable Notifications</Typography>
                <Switch checked={notifications} onChange={toggleNotifications} />
              </Box>
            </Box>

            {/* Theme Settings */}
            <Box mt={2}>
              <Typography variant="h6" sx={{ fontWeight: '600' }}>
                Theme Settings
              </Typography>
              <Divider sx={{ marginY: 1 }} />
              <FormControl fullWidth>
                <InputLabel>Theme</InputLabel>
                <Select value={themeMode} onChange={handleThemeChange}>
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                  <MenuItem value="system">System Default</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SettingsPage;
