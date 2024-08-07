import React from 'react';
import { Typography, Button, Stack, List, Box, Grid, Link, TextField, Container, colors } from '@mui/material';
import zedgoo from './ViewsComponent/zedgoo.png';

const SuperAdminSignUp = () => {
  return (
    <Box>
    <Box width={'70%'} height={'80vh'} display={'flex'} flexDirection={'row'} sx={{marginLeft:'15%',marginTop:'5%',border:'1px solid grey  ',borderRadius:'10px'}}
    >
        {/* TextField */}
    <Box sx={{display:'flex', flexDirection:'column',textAlign:'left',width:'60%',height:'100px',marginLeft:'70px',marginTop:'70px'}}>
       <Typography variant='h4' sx={{fontWeight:'300',mb:3}}>Zedgoo</Typography>
       <Typography variant='h6' fontWeight={700}>Sign Up</Typography>
       <Typography variant='subtitle1' mb={2} sx={{fontWeight:'200'}}>to access Zedgoo</Typography>

       <Box display={'flex'} flexDirection={'column'} sx={{height:'30vh',marginRight:'50px'}}>
    <TextField  placeholder='Company Name ' sx={{marginBottom:'10px'}}></TextField>
    <TextField placeholder='Email Address' sx={{marginBottom:'10px'}}></TextField>
    <TextField placeholder='Password' sx={{marginBottom:'10px'}}></TextField>

    {/* for slection of country and  */}
    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
  <TextField
    placeholder='Country'
    select
    sx={{ marginBottom: '30px', width: '49%' }}
    SelectProps={{
      native: true,
    }}
  >
    <option value="">Select Country</option>
    <option value="USA">USA</option>
    <option value="Canada">Canada</option>
    {/* Add more options here */}
  </TextField>
  <TextField
    placeholder='State'
    select
    sx={{ marginBottom: '30px', width: '49%' }}
    SelectProps={{
      native: true,
    }}
  >
    <option value="">Select State</option>
    <option value="California">California</option>
    <option value="New York">New York</option>
    {/* Add more options here */}
  </TextField>
</Box>
    <Button variant='contained' sx={{backgroundColor:'rgba(42, 41, 39, 1)', }}>Sign Up</Button>
       </Box>
       
        
    </Box>


    {/* Img Field */}
    <Box sx={{backgroundColor:'rgba(42, 41, 39, 1)',display:'flex',flexDirection:'column',justifyContent:'center',width:'40%',borderRadius:'0px 10px 10px 0px'}}>
        <Box><img src={zedgoo} style={{'&:hover':{color:'white'}}}></img></Box>
        <Typography variant='h4' color={'white'}>Zedgoo</Typography>
    </Box>

    </Box>
    <Typography  mt={1} sx={{fontSize:'12px'}}>© 2024, Eimple Labs Pvt. Ltd. All Rights Reserved.</Typography>
    </Box>
  );
};

export default SuperAdminSignUp;