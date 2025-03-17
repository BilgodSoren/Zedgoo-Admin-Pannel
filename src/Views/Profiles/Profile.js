import React from 'react';
import { 
  Typography, Button, Stack, List, Box, Grid, AppBar, Toolbar, ListItem 
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider
import { NavLink } from 'react-router-dom';
import ProfileTheme from '../Themes/ProfileThemes/ProfileTheme'; // Correct Theme import
import deskleft from './deskleft.png';
import deskright from './deskright.png';
import desk from './desk.png';
import ProfileFooter from './profilefooter';
import ProfileMidSection from '../Profiles/profilemidsection';

const Profile = () => {
  return (
    <ThemeProvider theme={ProfileTheme}> {/* Wrap inside ThemeProvider */}
      <Box sx={ProfileTheme.customStyles.container}>  {/* Use ProfileTheme directly */}
        {/* Header */}
        <AppBar>
          <Toolbar sx={ProfileTheme.customStyles.Toolbar}>
            <Typography sx={ProfileTheme.typography.zedgooheading} variant="h3">
              ZedGoo
            </Typography>

            {/* List in header */}
            <Box sx={ProfileTheme.customStyles.topbar}>
              <ListItem sx={ProfileTheme.customStyles.listitem}>Features</ListItem>
              <ListItem sx={ProfileTheme.customStyles.listitem}>Pricing</ListItem>
              <ListItem sx={ProfileTheme.customStyles.listitem}>Contact Us</ListItem>
            </Box>

            {/* Header Button */}
            <Button
              component={NavLink}
              to="/SuperAdminSignIn"
              sx={ProfileTheme.customStyles.loginbtn}
              color="inherit"
            >
              Sign In/Sign Up
            </Button>
          </Toolbar>
        </AppBar>

        {/* Desk contents */}
        <Box sx={ProfileTheme.customStyles.deskcontent}>
          <Typography sx={ProfileTheme.customStyles.deskMainTypography}>
            <Typography variant="h3" sx={ProfileTheme.customStyles.online}>
              Online
              <Typography variant="h3" sx={ProfileTheme.customStyles.learning}>
                Learning
              </Typography>
            </Typography>

            <Typography variant="h3" sx={ProfileTheme.customStyles.access}>
              you can access
            </Typography>
            <Typography variant="h3" sx={ProfileTheme.customStyles.easily}>
              where easily!
            </Typography>
            <Typography variant='subtitle1' textAlign={'left'} sx={ProfileTheme.customStyles.lorem}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            </Typography>
            <Box sx={ProfileTheme.customStyles.boxbtns}>
              <Button variant='contained' sx={ProfileTheme.customStyles.joinbtn}>
                JOIN COURSE
              </Button>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <PlayArrowIcon sx={ProfileTheme.customStyles.playarrowbtn} />
                <Typography fontWeight={600} ml={2} mt={7}>See how it works?</Typography>
              </Box>
            </Box>
          </Typography>

          <Box display={'flex'} flexDirection={'row'}>
            {/* Left image */}
            <img src={deskleft} alt="deskleft" style={ProfileTheme.customStyles.deskleftimg} />
            {/* Middle image */}
            <img src={desk} alt="desk" style={ProfileTheme.customStyles.deskmidimg} />
            {/* Right image */}
            <img src={deskright} alt="deskright" style={ProfileTheme.customStyles.deskrightimg} />
          </Box>
        </Box>

        {/* First footer section */}
        <Box sx={ProfileTheme.customStyles.firstfooterbox}>
          <footer style={ProfileTheme.customStyles.footercont}>
            <Box>
              <Typography sx={ProfileTheme.typography.num}>150+</Typography>
              <Typography sx={ProfileTheme.typography.total}>Total Courses</Typography>
            </Box>
            <Box>
              <Typography sx={ProfileTheme.typography.num}>25</Typography>
              <Typography sx={ProfileTheme.typography.total}>Total Instructor</Typography>
            </Box>
            <Box>
              <Typography sx={ProfileTheme.typography.num}>10K+</Typography>
              <Typography sx={ProfileTheme.typography.total}>Total Student</Typography>
            </Box>
          </footer>
        </Box>

        <Box sx={ProfileTheme.customStyles.profilecomponents}>
          <ProfileMidSection />
          <ProfileFooter />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
