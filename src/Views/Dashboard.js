import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, Box } from '@mui/material';
import '@fontsource/roboto/300.css'; // import the 300 weight of the Roboto font
import { Notifications } from '@mui/icons-material';
import { Circle } from '@mui/icons-material';

const DashboardTopBtns = () => {
  const [selectedButton, setSelectedButton] = React.useState('dashboard');

  const topbuttons = [
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'userManagement', label: 'USER MANAGEMENT' },
    { id: 'deviceManagement', label: 'DEVICE MANAGEMENT' },

   
  ];
  const bottombuttons = [
    { id: 'logout', label: 'LOG OUT' },
    { id: 'setting', label: 'SETTING' },
    { id: 'help', label: 'HELP' },

   
  ];

  return (
    <Box>
      {/* left nav bar  */}
      <Box sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', fontFamily: '', width: '13%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h4' mt={1} color={'white'} sx={{ textAlign: 'center' }}>Zedgoo</Typography>


      <AppBar sx={{width:'87%',height:'6vh',backgroundColor:'rgba(255, 255, 255, 1)',}}>
     
      <IconButton sx={{color:'black',width:'99%',height:'100%',position:'relative',left:'47%'}}>
        <Notifications/>
       <Circle/>
      </IconButton>
     
     
      </AppBar>


        <Box>
          <Typography variant='body1' mt={6} fontSize={'14px'} fontWeight={10} color={'white'} sx={{ textAlign: 'center' }}>MAIN MENU</Typography>
        </Box>
        

        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>

        
        <Box borderTop={'1px solid white'} mt={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // add this line
          height: '16vh',
          width: '100%',
        }}>
          {topbuttons.map((button) => (
            <Button
              key={button.id}
              variant='text'
              sx={{
                fontSize:'12px',
                fontWeight:'100',
                color: 'white',
                backgroundColor: selectedButton === button.id? 'white' : '',
                color: selectedButton === button.id? 'black' : 'white',
                fontFamily: 'Roboto, sans-serif', // add the custom font family
                ':active': {
                  backgroundColor: 'white',
                  color: 'black'
                }
              }}
              onClick={() => setSelectedButton(button.id)}
            >
              {button.label}
            </Button>
          ))}
           
       
        </Box>

        <Box  mt={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // add this line
          height: '16vh',
          width: '100%',
        }}>
          {bottombuttons.map((button) => (
            <Button
              key={button.id}
              variant='text'
              sx={{
                fontSize:'12px',
                fontWeight:'100',
                color: 'white',
                backgroundColor: selectedButton === button.id? 'white' : '',
                color: selectedButton === button.id? 'black' : 'white',
                fontFamily: 'Roboto, sans-serif', // add the custom font family
                ':active': {
                  backgroundColor: 'white',
                  color: 'black'
                }
              }}
              onClick={() => setSelectedButton(button.id)}
            >
              {button.label}
            </Button>
          ))}
           
       
        </Box>



        </Box>

        

      </Box>
    </Box>
  )
}

export default DashboardTopBtns;