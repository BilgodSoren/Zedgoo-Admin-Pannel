import React from 'react';
import { Typography, Button, Box, TextField, useTheme, ThemeProvider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import zedgoo from './zedgoo.png';
import CreateProfileTheme from '../Themes/UniversalThemes/CreateProfileTheme';

const CreateProfile = () => {
  // const theme = useTheme();
  // const CreateProfileTheme = CreateProfileTheme(theme);

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Signup Successful!');
  };

  return (
    <ThemeProvider theme={CreateProfileTheme}>

   
    <Box>
      <Box sx={CreateProfileTheme.container}>
        {/* Input Fields Section */}
        <Box sx={CreateProfileTheme.inputContainer}>
          <Typography variant="h4" sx={CreateProfileTheme.title}>ZedGoo</Typography>
          <Typography sx={CreateProfileTheme.profile} variant="h5" fontWeight={500}>Profile</Typography>
          <Typography variant="subtitle1" sx={CreateProfileTheme.subtitle}>Create your Profile</Typography>

          <Box component="form" onSubmit={onSubmit} sx={CreateProfileTheme.form}>
            <TextField placeholder="Company Name" sx={CreateProfileTheme.inputField} />
            <TextField placeholder="Email Address" type="email" sx={CreateProfileTheme.inputField} />
            <TextField placeholder="Password" type="password" sx={CreateProfileTheme.inputField} />

            {/* Country and State Selection */}
            <Box sx={CreateProfileTheme.selectContainer}>
              <TextField placeholder="Country" select sx={CreateProfileTheme.selectField} SelectProps={{ native: true }}>
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </TextField>
              <TextField placeholder="State" select sx={CreateProfileTheme.selectField} SelectProps={{ native: true }}>
                <option value="">Select State</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
              </TextField>
            </Box>

            <Button component={NavLink} to="/SuperAdminSignIn" type="submit" variant="contained" sx={CreateProfileTheme.saveButton}>
              Save
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={CreateProfileTheme.imageContainer}>
          <Box sx={CreateProfileTheme.imageBox}>
            <img src={zedgoo} alt="Zedgoo Logo" />
          </Box>
          <Typography sx={CreateProfileTheme.imageTitle} variant="h4" color="white">ZedGoo</Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={CreateProfileTheme.footer}>
        <Typography>© 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.</Typography>
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default CreateProfile;
