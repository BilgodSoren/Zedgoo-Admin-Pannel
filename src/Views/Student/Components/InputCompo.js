import { Box, FormControl, TextField } from '@mui/material';
import React from 'react';

const InputCompo = ({sx={},labelprop,placeholder,width,height}) => {


  return (
    <Box width={width} height={height} sx={{
      display:'flex',
      flexDirection:'column',
      // border:1,
    }}>
     
        <label style={{
          // border:'2px solid red',
         fontWeight:600,
         marginLeft:'0.5vw',
         fontSize:'20px'
          
        }}>{labelprop}</label>


        <TextField  variant="outlined" placeholder={placeholder} fullWidth sx={{
          backgroundColor:'#FFFFFF',
          borderRadius:2,
          border:'none',
          '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
        }} />
      
        </Box>
        
       
   
  );
};

export default InputCompo;
