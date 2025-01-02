import { Box } from '@mui/material';

import Dashboard from './Dashboard';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import React from 'react';
import UserSearch from './ViewsComponent/UserSearch';
import NothingtoShowFp from './ViewsComponent/Nothingtoshowfp';
import EyeDetails from './ViewsComponent/EyesDetails';
import EmptyDetails from './ViewsComponent/EmptyDetails';

import StudentList from './StudentList';



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
            <Box sx={{
              position: 'absolute', right: '20px', top: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center',  width: '28%',
              border: '0.4px solid whitesmoke',
            }}>
              {/* <EyeDetails/> */}
              <EmptyDetails/> 
            {/* <NothingtoShowFp/> */}
              {/* <NothingtoShowFp /> */}
            </Box>
            
          </AppBar>

         
        </Box>
      </Box>



    // </Box>
  )
}

export default UserManagement;