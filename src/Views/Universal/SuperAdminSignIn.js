import React from 'react';
import { Typography, Button, Box, Link, TextField, useTheme, ThemeProvider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import zedgoo from './zedgoo.png';
import AdminSignInTheme from '../Themes/UniversalThemes/AdminSignInTheme';

const SuperAdminSignIn = () => {
  // const theme = useTheme();
  // const AdminSignInTheme = AdminSignInTheme(theme);

  return (
    <ThemeProvider theme={AdminSignInTheme}>
    <Box>
      <Box sx={AdminSignInTheme.container}>
        {/* TextField Section */}
        <Box sx={AdminSignInTheme.textFieldContainer}>
          <Typography variant='h4' sx={AdminSignInTheme.title}>ZedGoo</Typography>
          <Typography variant='h6'  fontWeight={500}>Sign In</Typography>
          <Typography variant='subtitle1' sx={AdminSignInTheme.subtitle}>to access Zedgoo</Typography>

          <Box sx={AdminSignInTheme.formContainer}>
            <TextField placeholder='Login ID' sx={AdminSignInTheme.inputField}></TextField>
            <TextField placeholder='Password' sx={AdminSignInTheme.inputField}></TextField>

            <Button
              component={NavLink}
              to="/Dashboard"
              variant='contained'
              sx={AdminSignInTheme.signInButton}
            >
              Sign In
            </Button>
          </Box>

          <Box sx={AdminSignInTheme.linksContainer}>
            <Typography sx={{ fontSize: '13px', fontWeight: '400',fontFamily:'New Times Roman' }}>
              Don't have a Zedgoo account? <Link component={NavLink} to="/SuperAdminSignUp">Sign Up</Link>
            </Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: '800',fontFamily:'New Times Roman' }}>
              Forgot Password? <Link href='/'></Link>
            </Typography>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={AdminSignInTheme.imageContainer}>
          <Box sx={AdminSignInTheme.imageBox}>
            <img src={zedgoo} alt="Zedgoo Logo"></img>
          </Box>
          <Typography sx={AdminSignInTheme.imageTitle} variant='h4' color={'white'}>ZedGoo</Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={AdminSignInTheme.footer}>
        <Typography>© 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.</Typography>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default SuperAdminSignIn;
