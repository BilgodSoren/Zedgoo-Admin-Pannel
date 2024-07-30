import React from 'react';
import { 
  Typography, 
  Button, 
  Stack, 
  List, 
  Box, 
  Grid, 
  Link, 
  TextField, 
  Container 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import zedgoo from './zedgoo.png';
import SuperAdminSignUp from './SuperAdminSignUp';

const SuperAdminSignIn = () => {
  return (
    <Box>
      <Box 
        width={'70%'} 
        height={'80vh'} 
        display={'flex'} 
        flexDirection={'row'} 
        sx={{ 
          marginLeft: '15%', 
          marginTop: '5%', 
          border: '1px solid grey', 
          borderRadius: '10px' 
        }}
      >
        {/* TextField */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            textAlign: 'left', 
            width: '60%', 
            height: '100px', 
            marginLeft: '70px', 
            marginTop: '70px' 
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: '300', mb: 3 }}>Zedgoo</Typography>
          <Typography variant='h6'>Sign In</Typography>
          <Typography variant='subtitle1' mb={2} sx={{ fontWeight: '200' }}>to access Zedgoo</Typography>

          <Box 
            display={'flex'} 
            flexDirection={'column'} 
            sx={{ height: '30vh', marginRight: '50px' }}
          >
            <TextField placeholder='Login ID ' sx={{ marginBottom: '30px' }}></TextField>
            <TextField placeholder='Password' sx={{ marginBottom: '30px' }}></TextField>
            <Button variant='contained' sx={{ backgroundColor: 'rgba(42, 41, 39, 1)' }}>Sign In</Button>
          </Box>
          <Box 
            display={'flex'} 
            flexDirection={'row'} 
            justifyContent={'space-between'} 
            mt={1} 
            marginRight={8}
          >
            <Typography variant='subtitle2' sx={{ fontWeight: '500', marginBottom: '10px' }}>
              Don't have a Zedgoo account? 
              <Link component={RouterLink} to="/SuperAdminSignUp" underline="hover">
                Sign Up Now
              </Link>
            </Typography>

            <Typography>Forgot Password?</Typography>
          </Box>

        </Box>


        {/* Img Field */}
        <Box 
          sx={{ 
            backgroundColor: 'rgba(42, 41, 39, 1)', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            width: '40%', 
            borderRadius: '0px 10px 10px 0px' 
          }}
        >
          <Box><img src={zedgoo} style={{ '&:hover': { color: 'white' } }}></img></Box>
          <Typography variant='h4' color={'white'}>Zedgoo</Typography>
        </Box>

      </Box>
      <Typography mt={1} sx={{ fontSize: '12px' }}>© 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.</Typography>
    </Box>
  );
};

export default SuperAdminSignIn;