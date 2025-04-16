import * as React from 'react';

import '@fontsource/roboto/300.css'; // import the 300 weight of the Roboto font
import { Notifications } from '@mui/icons-material';
import { Circle } from '@mui/icons-material';
// import UserSearch from '../ViewsComponent/UserSearch';

import { Box, Typography, AppBar, Button, Card, Slider } from '@mui/material';
// import IconButton from '@mui/material';
import { IconButton } from '@mui/material';

import BatchSearch from './BatchSearch';
import BatchDetails1 from './BatchDetails1';
import BatchDetails2 from './BatchDetails2';
import BatchDetails3 from './BatchDetails3';
import BatchDetails4 from './BatchDetails4';
import w from './w.jpg'
import {useTheme} from '@mui/material';
import BatchManagementTheme from '../Themes/BatchThemes/BatchManagementTheme';
import BatchesList from './BatchesList';
import {Avatar} from '@mui/material';
import avatar from './avatar.jpg'
import BatchNothingtoShowFp from './BatchNothingtoshowfp';





const BatchManagement = () => {

const theme = useTheme();
const styles = BatchManagementTheme(theme);

  return (
    <Box>
 
      {/* left nav bar  */}
      <Box sx={styles.mainbox}>
        {/* <Typography variant='h4' mt={1} color={'white'} sx={{ textAlign: 'center' }}>Zedgoo</Typography> */}

        <AppBar sx={styles.appbar}>

          <IconButton sx={styles.iconbutton}>
            <Notifications sx={styles.avatar} />
            <Avatar sx={styles.avatar}><img src= {avatar}></img></Avatar>
          </IconButton>

          <Box sx={styles.batchbox}>

            <Typography variant='h5' mb={2}  ml={2} sx={styles.batchtypography}>
              Batch Management
            </Typography>
            <Box>
              <BatchSearch />
            </Box>
          </Box>


          <Box sx={styles.boxstudentlist}>




            {/* <BatchesList />                    */}
            <BatchNothingtoShowFp/>
          
          </Box>


        </AppBar> 


      </Box>
    </Box>
  )
}

export default BatchManagement;