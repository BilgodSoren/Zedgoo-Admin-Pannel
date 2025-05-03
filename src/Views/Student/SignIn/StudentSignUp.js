import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';

const StudentSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', formData);
    // Add your API call or logic here
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Student Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentSignUp;