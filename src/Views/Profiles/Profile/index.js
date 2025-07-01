import React from 'react';
import {
  Typography, Button, Stack, List, Box, Grid, AppBar, Toolbar, ListItem
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider
import { NavLink } from 'react-router-dom';
import ProfileTheme from '../../Themes/ProfileThemes/ProfileTheme'; // Correct Theme import
import deskleft from '../deskleft.png';
import deskright from '../deskright.png';
import desk from '../desk.png';
import ProfileFooter from '../ProfileFooter';
import ProfileMidSection from '../ProfileMidSec';
import SuperAdminSignIn from '../../Universal/SuperAdminSignIn';
import ZedgooHeader from '../ProfileHeader';

import ProfileDeskContent from '../ProfileDeskContent';
import ProfileFirstFooter from '../ProfileFirstFooter';

const Profile = () => {
  return (
    <ThemeProvider theme={ProfileTheme}> {/* Wrap inside ThemeProvider */}

      <ZedgooHeader />
      {/* Desk contents */}
      <ProfileDeskContent />
      {/* First footer section */}
      <ProfileFirstFooter />

      <ProfileMidSection />
      <ProfileFooter />

    </ThemeProvider>
  );
};

export default Profile;
