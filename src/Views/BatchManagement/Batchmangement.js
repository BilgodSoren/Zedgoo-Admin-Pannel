import * as React from 'react';

import '@fontsource/roboto/300.css'; // import the 300 weight of the Roboto font
import { Notifications } from '@mui/icons-material';
import { Circle } from '@mui/icons-material';
// import UserSearch from '../ViewsComponent/UserSearch';
// import StudentList from '../StudentList';
import BatchStudentList from './BatchStudentList';
import { Box, Typography, AppBar, Button } from '@mui/material';
// import IconButton from '@mui/material';
import { IconButton } from '@mui/material';

import BatchSearch from './BatchSearch';
import BatchDetails1 from './BatchDetails1';
import BatchDetails2 from './BatchDetails2';
import BatchDetails3 from './BatchDetails3';
import BatchDetails4 from './BatchDetails4';
import w from './w.jpg'




const BatchManagement = () => {



  return (
    <Box>
      {/* left nav bar  */}
      <Box sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', fontFamily: '', width: '12%', display: 'flex', flexDirection: 'column' }}>
        {/* <Typography variant='h4' mt={1} color={'white'} sx={{ textAlign: 'center' }}>Zedgoo</Typography> */}

        <AppBar sx={{ width: '88%', height: '6vh', backgroundColor: 'rgba(255, 255, 255, 1)', }}>

          <IconButton sx={{ color: 'black', width: '99%', height: '100%', position: 'relative', left: '47%' }}>
            <Notifications />
            <Circle />
          </IconButton>

          <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>

            <Typography variant='h5' mb={2} mt={2} ml={2} sx={{ color: 'black', fontWeight: '700', textAlign: 'left' }}>
              BatchManagement
            </Typography>
            <Box>

              <BatchSearch />

            </Box>
          </Box>

          <Box sx={{ margin: '0px 15px 15px 15px ', width: '68.7% ' }}>




            <BatchStudentList />                   
            <Box sx={{
              position: 'absolute', right: '20px', top: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', width: '28%',
              //  boxShadow: '0px 0px 1px grey'
            }}>
              
            </Box>
          </Box>


        </AppBar>


      </Box>
    </Box>
  )
}

export default BatchManagement;