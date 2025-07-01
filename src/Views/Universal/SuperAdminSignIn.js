import React, { useState } from 'react';
import {
  Typography,
  Button,
  Box,
  Link,
  TextField,
  ThemeProvider,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import zedgoo from './zedgoo.png';
import AdminSignInTheme from '../Themes/UniversalThemes/AdminSignInTheme';

const SuperAdminSignIn = () => {
  const [formData, setFormData] = useState({ email: '', pass: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    const { email, pass } = formData;
    if (!email || !pass) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post('/api/signin', {
        email: formData.email,
        pass: formData.pass,
      });

      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/Dashboard');
      } else {
        alert('Sign in failed');
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || 'An error occurred. Please try again.';
      alert(errMsg);
    }
  };

  return (
    <ThemeProvider theme={AdminSignInTheme}>
      <Box>
        <Box sx={AdminSignInTheme.container}>
          <Box sx={AdminSignInTheme.textFieldContainer}>
            <Typography variant='h4' sx={AdminSignInTheme.title}>ZedGoo</Typography>
            <Typography variant='h6' sx={AdminSignInTheme.signintxt} fontWeight={500}>Sign In</Typography>
            <Typography variant='subtitle1' sx={AdminSignInTheme.subtitle}>to access Zedgoo</Typography>

            <Box sx={AdminSignInTheme.formContainer}>
              <TextField placeholder='Email' name='email' value={formData.email} onChange={handleChange} sx={AdminSignInTheme.inputField} required />
              <TextField placeholder='Password' type='password' name='pass' value={formData.pass} onChange={handleChange} sx={AdminSignInTheme.inputField} required />

              <Button variant='contained' onClick={handleSignIn} sx={AdminSignInTheme.signInButton}>
                Sign In
              </Button>
            </Box>

            <Box sx={AdminSignInTheme.linksContainer}>
              <Typography sx={{ fontSize: '13px', fontWeight: '400', fontFamily: 'New Times Roman' }}>
                Don't have a Zedgoo account? <Link component={NavLink} to="/SuperAdminSignUp">Sign Up</Link>
                <Typography sx={{ fontSize: '13px', fontWeight: '400', fontFamily: 'New Times Roman' }}>
                  Don't have a Student account?
                  <Link component={NavLink} to="/SignUpStudent">Sign Up for Student</Link>
                </Typography>
              </Typography>

              <Typography sx={{ fontSize: '12px', fontWeight: '800', fontFamily: 'New Times Roman' }}>
                Forgot Password? <Link href='/'></Link>
              </Typography>
            </Box>
          </Box>

          <Box sx={AdminSignInTheme.imageContainer}>
            <Box sx={AdminSignInTheme.imageBox}>
              <img src={zedgoo} alt='Zedgoo Logo' />
            </Box>
            <Typography sx={AdminSignInTheme.imageTitle} variant='h4' color='white'>ZedGoo</Typography>
          </Box>
        </Box>

        <Box sx={AdminSignInTheme.footer}>
          <Typography>© 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SuperAdminSignIn;
