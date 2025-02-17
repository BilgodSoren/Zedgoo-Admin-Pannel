// src/LogoutPage.js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, update state, etc.)
    // For example, if you're using localStorage:
    localStorage.removeItem('token'); // or whatever key you're using
    // Redirect to login or home page
    history.push('/login'); // Change this to your desired route
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        You have been logged out
      </Typography>
      <Typography variant="body1" gutterBottom>
        Thank you for using our application. We hope to see you again soon!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Log In Again
      </Button>
    </Container>
  );
};

export default Logout;