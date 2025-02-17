import React from 'react';
import { Typography, Button, Stack, List, Box, Grid, Link, TextField, Container, colors } from '@mui/material';
import zedgoo from './zedgoo.png';
import SuperAdminSignUp from './SuperAdminSignUp';
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';

const SuperAdminSignIn = () => {
  return (
    <Box>
      <Box width={'70%'} height={'80vh'} display={'flex'} flexDirection={'row'} sx={{ marginLeft: '15%', marginTop: '5%', border: '1px solid grey  ', borderRadius: '10px' }}
      >
        {/* TextField */}
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '60%', height: '100px', marginLeft: '70px', marginTop: '70px' }}>
          <Typography variant='h4' sx={{ fontWeight: '300', mb: 3 }}>Zedgoo</Typography>
          <Typography variant='h6' fontWeight={700}>Sign In</Typography>
          <Typography variant='subtitle1' mb={2} sx={{ fontWeight: '200' }}>to access Zedgoo</Typography>

          <Box display={'flex'} flexDirection={'column'} sx={{ height: '30vh', marginRight: '50px' }}>
            <TextField placeholder='Login ID ' sx={{ marginBottom: '10px' }}></TextField>
            <TextField placeholder='Password' sx={{ marginBottom: '10px' }}></TextField>

            {/* for slection of country and  */}
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>

            </Box>
            <Button
              component={NavLink}
              to="/Dashboard"
              variant='contained' sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', }}>Sign In</Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15px', width: '92%' }}>
            <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>Don't have a Zedgoo account? <Link component={NavLink} to="/SuperAdminSignUp" >Sign Up</Link></Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: '800' }}>Forgot Password ? <Link href='/'></Link></Typography>
          </Box>

        </Box>


        {/* Img Field */}
        <Box sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '40%', borderRadius: '0px 10px 10px 0px' }}>
          <Box sx={{ marginLeft: "30%" }}><img src={zedgoo} style={{ '&:hover': { color: 'white' } }}></img></Box>
          <Typography sx={{ marginLeft: "38%" }} variant='h4' color={'white'}>Zedgoo</Typography>
        </Box>

      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography mt={1} sx={{ fontSize: '12px' }}>
          © 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default SuperAdminSignIn;