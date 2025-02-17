import React from 'react';
import WhyWeAreBest from './profilemidsection';
import { Typography, Button, Stack, List, Box, Grid, ImageList } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import { orange } from '@mui/material/colors';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import deskleft from './deskleft.png';
import deskright from './deskright.png';
import desk from './desk.png'
import ZedgooFooter from './profilefooter';
import SuperAdminSignIn from './SuperAdminSignIn';
import { NavLink } from 'react-router-dom';
  




const Profile = () => {
  console.log('Profile renders')
  return (
    <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column',zIndex:3 }}>
      {/* Header */}
      <AppBar>
        <Toolbar sx={{ height: '80px', backgroundColor: 'rgba(42, 41, 39, 1)' }}>
          <Typography
            sx={{
              fontSize: '44px',
              fontWeight: '400'
            }}
            variant="h3"
            component="div"
          >
            Zedgoo
          </Typography>

          {/* list in header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '30%', ml: 'auto' }}>
            <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightpink' } }}>Features</ListItem>
            <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightblue' } }}>Pricing</ListItem>
            <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Contact Us</ListItem>
          </Box>

          {/* header Button */}
            <Button  
            component ={NavLink}
              to="/SuperAdminSignIn"
            variant='outlined' sx={{ marginLeft: 'auto', backgroundColor: 'orange' }} color="inherit">
              Login/SignUp
            </Button>
        </Toolbar>
      </AppBar>

      {/* Desk contents */}
      <Box sx={{ height: '74vh', backgroundColor: 'whitesmoke', color: 'black', padding: '20px' }}>
        <Typography sx={{ width: '30%', marginTop: '6%', marginLeft: '5%', textAlign: 'left' }}>
          <Typography variant="h3" sx={{ color: 'black', display: 'flex', flexDirection: 'row', width: '100%' }}>
            Online
            <Typography variant="h3" sx={{ color: 'Orange', marginLeft: '15px' }}>
              Learning
            </Typography>
          </Typography>

          <Typography variant="h3" sx={{ color: 'Orange', margin: 'none' }}>
            you can access
          </Typography>
          <Typography variant="h3" sx={{ color: 'grey' }}>
            where easily!
          </Typography>
          <Typography variant='subtitle1' textAlign={'left'} sx={{ marginTop: '20px' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'orange',
                position: 'relative',
                top: '30px',
                borderRadius: '10px',
                marginRight: '10px',
                cursor: 'pointer'
              }}
            >
              JOIN COURSE
            </Button>
            <PlayArrowIcon sx={{ fontSize: '36px', marginTop: '60px', marginLeft: '20px', backgroundColor: 'orange', color: 'white', borderRadius: '50%', cursor: 'pointer',transition:'0.8 all',
            "&:hover":{
             
              backgroundColor:'green',
              
            } }} />
          </Box>
        </Typography>
        <Box display={'flex'} flexDirection={'row'}>
          {/* left image */}
          <img src={deskleft} alt="deskleft" style={{ height: '44vh', position: 'relative', left: '42%', bottom: '300px' }} />

          {/* ,middle image */}
          <img src={desk} alt="desk" style={{ width: '40%', height: '50%', position: 'relative', left: '44.5%', bottom: '300px',
          }}  />
         
          {/* right image */}
          <img src={deskright} alt="deskright" style={{ height: '44vh', position: 'relative',left:'46.5%',bottom:'300px' }} />
        </Box>
      </Box>

      {/* First footer section */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center',
        width: '100z%',
        height: '18vh',
        alignItems: 'center',
        //   marginLeft: '30%',
        backgroundColor: 'rgba(42, 41, 39, 1)'// Add this line
      }}>
        <footer style={{ display: 'flex', color: 'white', flexDirection: 'row', justifyContent: 'space-around', width: '60%',padding:'10px' }}>
          <div>
            <Typography variant='h4' fontWeight={800}>150+</Typography>
            <Typography variant='h6'>Total Courses</Typography>
          </div>
          <div>
            <Typography variant='h4' fontWeight={800}>25</Typography>
            <Typography variant='subtitle2'>Total Instructor</Typography>
          </div>
          <div>
            <Typography variant='h4' fontWeight={800}>10K+</Typography>
            <Typography variant=''>Total Student</Typography>
          </div>
        </footer>

      </Box>
      <Box sx={{ backgroundColor: 'white' }}>

        <WhyWeAreBest />
       <ZedgooFooter/>
      </Box>

    </Box>
  );
};
export default Profile;