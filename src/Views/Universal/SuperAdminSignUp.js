import React from 'react';
import { Typography, Button, Box, TextField, useTheme, ThemeProvider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import zedgoo from './zedgoo.png';
import AdminSignUpTheme from '../Themes/UniversalThemes/AdminSignUpTheme';
import CreateProfile from './CreateProfile';

const SuperAdminSignUp = () => {


  const onSubmit = (e) => {
    e.preventDefault();
    alert('Signup Successful!');
  };

  return (
    <ThemeProvider theme={AdminSignUpTheme}>
    
    <Box>
      <Box sx={AdminSignUpTheme.container}>
        {/* Input Fields Section */}
        <Box sx={AdminSignUpTheme.inputContainer}>
          <Typography variant="h4" sx={AdminSignUpTheme.title}>ZedGoo</Typography>
          <Typography variant="h6"  fontWeight={500}>Sign Up</Typography>
          <Typography variant="subtitle1" sx={AdminSignUpTheme.subtitle}>to access ZedGoo</Typography>

          <Box component="form" onSubmit={onSubmit} sx={AdminSignUpTheme.form}>
            <TextField placeholder="Company Name" sx={AdminSignUpTheme.inputField} />   
            <TextField placeholder="Email Address" type="email" sx={AdminSignUpTheme.inputField} />
            <TextField placeholder="Password" type="password" sx={AdminSignUpTheme.inputField} /> 

            {/* Country and State Selection */}
            <Box sx={AdminSignUpTheme.selectContainer}>
              <TextField placeholder="Country" select sx={AdminSignUpTheme.selectField} SelectProps={{ native: true }}>
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </TextField>
              <TextField placeholder="State" select sx={AdminSignUpTheme.selectField} SelectProps={{ native: true }}>
                <option value="">Select State</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
              </TextField>
            </Box>

            <Button component={NavLink} to="/createprofile" type="submit" variant="contained" sx={AdminSignUpTheme.signUpButton}>
              Sign Up
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={AdminSignUpTheme.imageContainer}>
          <Box sx={AdminSignUpTheme.imageBox}>
            <img src={zedgoo} alt="Zedgoo Logo" />
          </Box>
          <Typography sx={AdminSignUpTheme.imageTitle} variant="h4" color="white">ZedGoo</Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={AdminSignUpTheme.footer}>
        <Typography>© 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.</Typography>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default SuperAdminSignUp;
