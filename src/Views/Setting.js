// SettingsPage.js
import React from 'react';
import { Container, Typography, Divider, Grid, Paper, TextField, Switch, FormControlLabel, Button } from '@mui/material';

function SettingsPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {/* Account Settings */}
      <Paper elevation={4} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h6">Account Settings</Typography>
        <Divider sx={{ marginY: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Username" variant="outlined" defaultValue="User123" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" defaultValue="user@example.com" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Update Account</Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Notification Settings */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h6">Notification Settings</Typography>
        <Divider sx={{ marginY: 2 }} />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Email Notifications"
        />
        <FormControlLabel
          control={<Switch />}
          label="Push Notifications"
        />
      </Paper>

      {/* Preferences */}
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6">Preferences</Typography>
        <Divider sx={{ marginY: 2 }} />
        <FormControlLabel
          control={<Switch />}
          label="Dark Mode"
        />
      </Paper>

      <Button variant="contained" color="secondary" sx={{ marginTop: 3 }}>
        Save Changes
      </Button>
    </Container>
  );
}

export default SettingsPage;
