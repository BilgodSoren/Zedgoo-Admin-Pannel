import { Box } from '@mui/material';

import Dashboard from '../Universal/Dashboard';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import React from 'react';
import UserSearch from './UserSearch';
import UserNothingtoShowFp from './UserNothingtoshowfp';
import UserEyeDetails from './UserEyesDetails';
import UserEmptyDetails from './UserEmptyDetails';
import  {useState} from 'react';

import StudentList from './UserStudentList';



const UserManagement = () => {
  
  return (
    <Box >

      <Box>
        {/* left nav bar  */}


        <AppBar sx={{ width: '88%', height: '6vh', backgroundColor: 'rgba(255, 255, 255, 1)', color: 'black' }}>

          <IconButton sx={{ color: 'black', width: '99%', height: '99.5%', position: 'relative', left: '47%' }}>
            <Notifications />
            <Circle />
          </IconButton>



          <UserSearch />
          <Box sx={{ margin: '0px 15px 15px 15px ', width: '68.5%' }}>

            <StudentList />
          </Box>
          

        </AppBar>


      </Box>
    </Box>



    // </Box> 
  )
}

export default UserManagement;


