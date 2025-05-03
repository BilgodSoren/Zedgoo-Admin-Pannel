import { Box, IconButton } from '@mui/material';
import Profileimage from '../Components/Profileimage';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react';

const TopBar = ({ sx = {} }) => {
  return (
    <Box width={'100vw'}>

    <Box
      sx={{
        width: '100%', // force it to take full viewport width
        height: '7vh', // still flexible height
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        px: 2, // horizontal padding
        background: 'whitesmoke',
        boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box', // ensures padding is included in width
        
        ...sx,
      }}
      >
      <Box
        sx={{
          width:'7vw',
          display: 'flex',
          //   alignItems: 'center',
          //   border:1,
          gap: 4, // spacing between elements
          marginRight:'19vw',
          marginTop:'5vh',
          zIndex:10
        }}
        >
        <Box width={'38%'} >
        <IconButton  >
          <ChatOutlinedIcon  sx={{
            margin:'4px 2px 2px 4px' 
          }}/>
          <NotificationsNoneIcon sx={{
            margin:'0px 4px 2px 4px' 
          }}/>
        </IconButton>
        </Box>
            <Box>
        <Profileimage sx={{
          marginTop:'0.8vh',
          marginRight:'0px',
          border:1
        }}/>
            </Box>
            
             
      </Box>
    </Box>
        </Box>
  );
};

export default TopBar;
